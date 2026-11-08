"use client";

// React Bits — Splash Cursor (https://reactbits.dev/animations/splash-cursor)
// WebGL fluid simulation, adapted from Pavel Dobryakov's WebGL-Fluid-Simulation.
// Palette tuned to the dashboard (mint / pink) and trails fade fast on light UI.
import { useEffect, useRef } from "react";

const PALETTE = [
  [0.2, 0.71, 0.54], // mint-500
  [0.39, 0.82, 0.66], // mint-400
  [0.96, 0.45, 0.71], // pink-400
  [0.98, 0.81, 0.91], // pink-200
  [0.53, 0.94, 0.67], // green-300
];

export default function SplashCursor({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1024,
  DENSITY_DISSIPATION = 4.5,
  VELOCITY_DISSIPATION = 2.2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.16,
  SPLAT_FORCE = 5000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  INTENSITY = 0.14,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const config = {
      SIM_RESOLUTION,
      DYE_RESOLUTION,
      DENSITY_DISSIPATION,
      VELOCITY_DISSIPATION,
      PRESSURE,
      PRESSURE_ITERATIONS,
      CURL,
      SPLAT_RADIUS,
      SPLAT_FORCE,
      SHADING,
      COLOR_UPDATE_SPEED,
    };

    const pointer = {
      id: -1,
      texcoordX: 0,
      texcoordY: 0,
      prevTexcoordX: 0,
      prevTexcoordY: 0,
      deltaX: 0,
      deltaY: 0,
      down: false,
      moved: false,
      color: { r: 0, g: 0, b: 0 },
    };

    const ctx = getWebGLContext(canvas);
    if (!ctx) return;
    const { gl, ext } = ctx;
    if (!ext.supportLinearFiltering) {
      config.DYE_RESOLUTION = 256;
      config.SHADING = false;
    }

    function getWebGLContext(cv) {
      const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };
      let g = cv.getContext("webgl2", params);
      const isWebGL2 = !!g;
      if (!isWebGL2) g = cv.getContext("webgl", params) || cv.getContext("experimental-webgl", params);
      if (!g) return null;

      let halfFloat;
      let supportLinearFiltering;
      if (isWebGL2) {
        g.getExtension("EXT_color_buffer_float");
        supportLinearFiltering = g.getExtension("OES_texture_float_linear");
      } else {
        halfFloat = g.getExtension("OES_texture_half_float");
        supportLinearFiltering = g.getExtension("OES_texture_half_float_linear");
      }
      g.clearColor(0, 0, 0, 0);
      const halfFloatTexType = isWebGL2 ? g.HALF_FLOAT : halfFloat && halfFloat.HALF_FLOAT_OES;
      let formatRGBA, formatRG, formatR;
      if (isWebGL2) {
        formatRGBA = getSupportedFormat(g, g.RGBA16F, g.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(g, g.RG16F, g.RG, halfFloatTexType);
        formatR = getSupportedFormat(g, g.R16F, g.RED, halfFloatTexType);
      } else {
        formatRGBA = getSupportedFormat(g, g.RGBA, g.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(g, g.RGBA, g.RGBA, halfFloatTexType);
        formatR = getSupportedFormat(g, g.RGBA, g.RGBA, halfFloatTexType);
      }
      if (!formatRGBA) return null;
      return {
        gl: g,
        ext: { formatRGBA, formatRG, formatR, halfFloatTexType, supportLinearFiltering },
      };
    }

    function getSupportedFormat(g, internalFormat, format, type) {
      if (!supportRenderTextureFormat(g, internalFormat, format, type)) {
        switch (internalFormat) {
          case g.R16F:
            return getSupportedFormat(g, g.RG16F, g.RG, type);
          case g.RG16F:
            return getSupportedFormat(g, g.RGBA16F, g.RGBA, type);
          default:
            return null;
        }
      }
      return { internalFormat, format };
    }

    function supportRenderTextureFormat(g, internalFormat, format, type) {
      const texture = g.createTexture();
      g.bindTexture(g.TEXTURE_2D, texture);
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST);
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.NEAREST);
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
      g.texImage2D(g.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
      const fbo = g.createFramebuffer();
      g.bindFramebuffer(g.FRAMEBUFFER, fbo);
      g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, texture, 0);
      return g.checkFramebufferStatus(g.FRAMEBUFFER) === g.FRAMEBUFFER_COMPLETE;
    }

    function compileShader(type, source, keywords) {
      if (keywords) source = keywords.map((k) => `#define ${k}\n`).join("") + source;
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    function createProgram(vs, fs) {
      const program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      return program;
    }

    function getUniforms(program) {
      const uniforms = {};
      const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < count; i++) {
        const name = gl.getActiveUniform(program, i).name;
        uniforms[name] = gl.getUniformLocation(program, name);
      }
      return uniforms;
    }

    class Program {
      constructor(vs, fs) {
        this.program = createProgram(vs, fs);
        this.uniforms = getUniforms(this.program);
      }
      bind() {
        gl.useProgram(this.program);
      }
    }

    const baseVertexShader = compileShader(
      gl.VERTEX_SHADER,
      `precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv, vL, vR, vT, vB;
      uniform vec2 texelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }`
    );

    const copyShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv; uniform sampler2D uTexture;
      void main () { gl_FragColor = texture2D(uTexture, vUv); }`
    );

    const clearShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv; uniform sampler2D uTexture; uniform float value;
      void main () { gl_FragColor = value * texture2D(uTexture, vUv); }`
    );

    const displayShaderSource = `precision highp float; precision highp sampler2D;
      varying vec2 vUv, vL, vR, vT, vB;
      uniform sampler2D uTexture; uniform vec2 texelSize;
      void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        #ifdef SHADING
          vec3 lc = texture2D(uTexture, vL).rgb;
          vec3 rc = texture2D(uTexture, vR).rgb;
          vec3 tc = texture2D(uTexture, vT).rgb;
          vec3 bc = texture2D(uTexture, vB).rgb;
          float dx = length(rc) - length(lc);
          float dy = length(tc) - length(bc);
          vec3 n = normalize(vec3(dx, dy, length(texelSize)));
          float diffuse = clamp(dot(n, vec3(0.0, 0.0, 1.0)) + 0.7, 0.7, 1.0);
          c *= diffuse;
        #endif
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
      }`;

    const splatShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision highp float; precision highp sampler2D;
      varying vec2 vUv; uniform sampler2D uTarget;
      uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius;
      void main () {
        vec2 p = vUv - point.xy; p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        gl_FragColor = vec4(texture2D(uTarget, vUv).xyz + splat, 1.0);
      }`
    );

    const advectionShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision highp float; precision highp sampler2D;
      varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource;
      uniform vec2 texelSize; uniform vec2 dyeTexelSize; uniform float dt; uniform float dissipation;
      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5; vec2 iuv = floor(st); vec2 fuv = fract(st);
        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }
      void main () {
        #ifdef MANUAL_FILTERING
          vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
          vec4 result = bilerp(uSource, coord, dyeTexelSize);
        #else
          vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
          vec4 result = texture2D(uSource, coord);
        #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
      }`,
      ext.supportLinearFiltering ? null : ["MANUAL_FILTERING"]
    );

    const divergenceShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv, vL, vR, vT, vB; uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).x; float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y; float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; } if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; } if (vB.y < 0.0) { B = -C.y; }
        gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
      }`
    );

    const curlShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv, vL, vR, vT, vB; uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).y; float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x; float B = texture2D(uVelocity, vB).x;
        gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
      }`
    );

    const vorticityShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision highp float; precision highp sampler2D;
      varying vec2 vUv, vL, vR, vT, vB;
      uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float curl; uniform float dt;
      void main () {
        float L = texture2D(uCurl, vL).x; float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x; float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001; force *= curl * C; force.y *= -1.0;
        vec2 velocity = texture2D(uVelocity, vUv).xy + force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }`
    );

    const pressureShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv, vL, vR, vT, vB;
      uniform sampler2D uPressure; uniform sampler2D uDivergence;
      void main () {
        float L = texture2D(uPressure, vL).x; float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x; float B = texture2D(uPressure, vB).x;
        float divergence = texture2D(uDivergence, vUv).x;
        gl_FragColor = vec4((L + R + B + T - divergence) * 0.25, 0.0, 0.0, 1.0);
      }`
    );

    const gradientSubtractShader = compileShader(
      gl.FRAGMENT_SHADER,
      `precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv, vL, vR, vT, vB;
      uniform sampler2D uPressure; uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uPressure, vL).x; float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x; float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy - vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }`
    );

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    const elements = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elements);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    const blit = (target, clear = false) => {
      if (target == null) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      } else {
        gl.viewport(0, 0, target.width, target.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
      }
      if (clear) {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    };

    const copyProgram = new Program(baseVertexShader, copyShader);
    const clearProgram = new Program(baseVertexShader, clearShader);
    const splatProgram = new Program(baseVertexShader, splatShader);
    const advectionProgram = new Program(baseVertexShader, advectionShader);
    const divergenceProgram = new Program(baseVertexShader, divergenceShader);
    const curlProgram = new Program(baseVertexShader, curlShader);
    const vorticityProgram = new Program(baseVertexShader, vorticityShader);
    const pressureProgram = new Program(baseVertexShader, pressureShader);
    const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
    const displayProgram = new Program(
      baseVertexShader,
      compileShader(gl.FRAGMENT_SHADER, displayShaderSource, config.SHADING ? ["SHADING"] : null)
    );

    let dye, velocity, divergence, curl, pressure;

    function createFBO(w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0);
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);
      return {
        texture,
        fbo,
        width: w,
        height: h,
        texelSizeX: 1 / w,
        texelSizeY: 1 / h,
        attach(id) {
          gl.activeTexture(gl.TEXTURE0 + id);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          return id;
        },
      };
    }

    function createDoubleFBO(w, h, internalFormat, format, type, param) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, param);
      let fbo2 = createFBO(w, h, internalFormat, format, type, param);
      return {
        width: w,
        height: h,
        texelSizeX: fbo1.texelSizeX,
        texelSizeY: fbo1.texelSizeY,
        get read() {
          return fbo1;
        },
        set read(v) {
          fbo1 = v;
        },
        get write() {
          return fbo2;
        },
        set write(v) {
          fbo2 = v;
        },
        swap() {
          const t = fbo1;
          fbo1 = fbo2;
          fbo2 = t;
        },
      };
    }

    function resizeFBO(target, w, h, internalFormat, format, type, param) {
      const newFBO = createFBO(w, h, internalFormat, format, type, param);
      copyProgram.bind();
      gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
      blit(newFBO);
      return newFBO;
    }

    function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
      if (target.width === w && target.height === h) return target;
      target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
      target.write = createFBO(w, h, internalFormat, format, type, param);
      target.width = w;
      target.height = h;
      target.texelSizeX = 1 / w;
      target.texelSizeY = 1 / h;
      return target;
    }

    function getResolution(resolution) {
      let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
      if (aspectRatio < 1) aspectRatio = 1 / aspectRatio;
      const min = Math.round(resolution);
      const max = Math.round(resolution * aspectRatio);
      return gl.drawingBufferWidth > gl.drawingBufferHeight ? { width: max, height: min } : { width: min, height: max };
    }

    function initFramebuffers() {
      const simRes = getResolution(config.SIM_RESOLUTION);
      const dyeRes = getResolution(config.DYE_RESOLUTION);
      const texType = ext.halfFloatTexType;
      const rgba = ext.formatRGBA;
      const rg = ext.formatRG;
      const r = ext.formatR;
      const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
      gl.disable(gl.BLEND);

      dye = !dye
        ? createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering)
        : resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
      velocity = !velocity
        ? createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering)
        : resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
      divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
      curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
      pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    }

    const scaleByPixelRatio = (input) => Math.floor(input * (window.devicePixelRatio || 1));

    function resizeCanvas() {
      const width = scaleByPixelRatio(canvas.clientWidth);
      const height = scaleByPixelRatio(canvas.clientHeight);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }
      return false;
    }

    function generateColor() {
      const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      return { r: r * INTENSITY, g: g * INTENSITY, b: b * INTENSITY };
    }

    function correctRadius(radius) {
      const aspectRatio = canvas.width / canvas.height;
      return aspectRatio > 1 ? radius * aspectRatio : radius;
    }

    function splat(x, y, dx, dy, color) {
      splatProgram.bind();
      gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
      gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
      gl.uniform2f(splatProgram.uniforms.point, x, y);
      gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0);
      gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100));
      blit(velocity.write);
      velocity.swap();

      gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
      gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
      blit(dye.write);
      dye.swap();
    }

    function splatPointer(p) {
      splat(p.texcoordX, p.texcoordY, p.deltaX * config.SPLAT_FORCE, p.deltaY * config.SPLAT_FORCE, p.color);
    }

    function clickSplat(p) {
      const color = generateColor();
      color.r *= 10;
      color.g *= 10;
      color.b *= 10;
      splat(p.texcoordX, p.texcoordY, 10 * (Math.random() - 0.5), 30 * (Math.random() - 0.5), color);
    }

    function step(dt) {
      gl.disable(gl.BLEND);

      curlProgram.bind();
      gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(curl);

      vorticityProgram.bind();
      gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
      gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
      gl.uniform1f(vorticityProgram.uniforms.dt, dt);
      blit(velocity.write);
      velocity.swap();

      divergenceProgram.bind();
      gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(divergence);

      clearProgram.bind();
      gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
      gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
      blit(pressure.write);
      pressure.swap();

      pressureProgram.bind();
      gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write);
        pressure.swap();
      }

      gradienSubtractProgram.bind();
      gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
      gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
      blit(velocity.write);
      velocity.swap();

      advectionProgram.bind();
      gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      if (!ext.supportLinearFiltering)
        gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
      const velocityId = velocity.read.attach(0);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
      gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
      gl.uniform1f(advectionProgram.uniforms.dt, dt);
      gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
      blit(velocity.write);
      velocity.swap();

      if (!ext.supportLinearFiltering)
        gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
      gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
      blit(dye.write);
      dye.swap();
    }

    function render() {
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
      displayProgram.bind();
      if (config.SHADING)
        gl.uniform2f(displayProgram.uniforms.texelSize, 1 / gl.drawingBufferWidth, 1 / gl.drawingBufferHeight);
      gl.uniform1i(displayProgram.uniforms.uTexture, dye.read.attach(0));
      blit(null, true);
    }

    function updatePointerDownData(p, posX, posY) {
      p.down = true;
      p.moved = false;
      p.texcoordX = posX / canvas.width;
      p.texcoordY = 1 - posY / canvas.height;
      p.prevTexcoordX = p.texcoordX;
      p.prevTexcoordY = p.texcoordY;
      p.deltaX = 0;
      p.deltaY = 0;
      p.color = generateColor();
    }

    function updatePointerMoveData(p, posX, posY, color) {
      p.prevTexcoordX = p.texcoordX;
      p.prevTexcoordY = p.texcoordY;
      p.texcoordX = posX / canvas.width;
      p.texcoordY = 1 - posY / canvas.height;
      const aspectRatio = canvas.width / canvas.height;
      p.deltaX = (p.texcoordX - p.prevTexcoordX) * (aspectRatio < 1 ? aspectRatio : 1);
      p.deltaY = (p.texcoordY - p.prevTexcoordY) / (aspectRatio > 1 ? aspectRatio : 1);
      p.moved = Math.abs(p.deltaX) > 0 || Math.abs(p.deltaY) > 0;
      p.color = color;
    }

    initFramebuffers();
    let lastUpdateTime = Date.now();
    let colorUpdateTimer = 0;
    let rafId;

    function updateFrame() {
      const now = Date.now();
      const dt = Math.min((now - lastUpdateTime) / 1000, 0.016666);
      lastUpdateTime = now;
      if (resizeCanvas()) initFramebuffers();
      colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
      if (colorUpdateTimer >= 1) {
        colorUpdateTimer %= 1;
        pointer.color = generateColor();
      }
      if (pointer.moved) {
        pointer.moved = false;
        splatPointer(pointer);
      }
      step(dt);
      render();
      rafId = requestAnimationFrame(updateFrame);
    }

    let started = false;
    const onMouseDown = (e) => {
      updatePointerDownData(pointer, scaleByPixelRatio(e.clientX), scaleByPixelRatio(e.clientY));
      clickSplat(pointer);
    };
    const onMouseMove = (e) => {
      const x = scaleByPixelRatio(e.clientX);
      const y = scaleByPixelRatio(e.clientY);
      if (!started) {
        started = true;
        updatePointerDownData(pointer, x, y);
        return;
      }
      updatePointerMoveData(pointer, x, y, pointer.color);
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    updateFrame();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [
    SIM_RESOLUTION,
    DYE_RESOLUTION,
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    PRESSURE,
    PRESSURE_ITERATIONS,
    CURL,
    SPLAT_RADIUS,
    SPLAT_FORCE,
    SHADING,
    COLOR_UPDATE_SPEED,
    INTENSITY,
  ]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-screen w-screen" />
    </div>
  );
}
