"use client";

import React from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaReact, FaGitAlt, FaGithub, FaFigma, FaDocker, FaWordpress } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { HiOutlineBriefcase, HiOutlineSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

// ---- Data ---------------------------------------------------------------

const stats = [
  { value: "3+", label: "Years Experience", sub: "Full-Stack Development" },
  { value: "6+", label: "API Integrations", sub: "Travel Booking Products" },
  { value: "30%", label: "Faster Load Times", sub: "Performance Tuning" },
  { value: "AI", label: "Augmented", sub: "Claude · Cursor · Gemini" },
];

// Real experience (source of truth: Aadhil_Muhamed_CV)
const experience = [
  {
    period: "Feb 2024 - Present",
    role: "Software Engineer",
    company: "Scripterlab · Colombo, Sri Lanka",
    description:
      "Shipping full-stack features end-to-end with React, Next.js and Tailwind CSS. Integrated Google Maps API for location search & geocoding, built the Pulse 24 Digital Agency sub-site, and cut page-load times by ~30% through render and query tuning.",
  },
  {
    period: "Feb 2024 - Present",
    role: "Software Engineer",
    company: "Techneapp · Remote",
    description:
      "Integrated Stripe & SuperPayment gateways (checkout, webhooks, subscriptions), built flight-booking integrations via REST APIs and Node.js, engineered automated email systems, and shipped custom WordPress & Elementor plugins. Maintained 6+ third-party travel APIs.",
  },
  {
    period: "Apr 2023 - Feb 2024",
    role: "Associate Software Engineer",
    company: "Techneapp · Remote",
    description:
      "Crafted interactive UIs with React and modern front-end libraries, releasing 10+ customer-facing features and supporting REST API development as the travel booking platform scaled.",
  },
];

const frontendSkills = [
  { name: "Next.js", level: 95 },
  { name: "React.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "JavaScript / HTML / CSS", level: 95 },
];

const backendSkills = [
  { name: "Node.js / Express.js", level: 88 },
  { name: "REST APIs", level: 90 },
  { name: "MongoDB / MySQL", level: 82 },
  { name: "Stripe & Payment APIs", level: 85 },
];

const tools = [
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Claude Code", icon: <VscVscode /> },
  { name: "Cursor AI", icon: <FaReact /> },
];

// ---- Small building blocks ---------------------------------------------

const SkillBar = ({ name, level }) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center justify-between text-sm">
      <span className="text-white/80">{name}</span>
      <span className="text-white/40">{level}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

// ---- Page ---------------------------------------------------------------

const Contact = () => {
  return (
    <section className="min-h-full py-8 xl:py-10">
      <div className="container mx-auto flex flex-col gap-6">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-end gap-3">
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1c1c22] px-4 py-1.5 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Available for work
          </span>
          <Link href="mailto:aadhilmuhamed2022@gmail.com">
            <span className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <FiMail /> Contact Me
            </span>
          </Link>
        </div>

        {/* Hero */}
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#101014] via-[#131318] to-[#101014] p-6 text-center md:p-10 lg:flex-row lg:text-left">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-accent/25 blur-2xl" />
            <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-accent/60 shadow-[0_0_60px_-10px_rgba(0,255,153,0.6)] sm:h-48 sm:w-48">
              <Image
                src={withBasePath("/assets/Aadhil2.jpg")}
                fill
                quality={100}
                alt="Aadhil Muhamed"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Intro */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <div>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Aadhil <span className="text-accent">Muhamed</span>
              </h1>
              <p className="mt-2 text-lg text-white/70">
                Full-Stack Software Engineer · AI-Augmented Developer
              </p>
            </div>
            <p className="max-w-[520px] text-white/60">
              I build fast, scalable and SEO-optimized web applications with
              Next.js, React and Node.js — from data modeling and REST APIs to
              polished, production-ready interfaces.
            </p>
            <div className="mt-1 flex flex-col gap-3 sm:flex-row">
              <Link href="mailto:aadhilmuhamed2022@gmail.com">
                <Button className="flex items-center gap-2">
                  <FiMail className="text-lg" /> Contact Me
                </Button>
              </Link>
              <a href={withBasePath("/resume/cv.pdf")} download>
                <Button variant="outline" className="flex items-center gap-2">
                  View Resume <FiArrowRight className="text-lg" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-[#101014] p-5"
            >
              <p className="text-2xl font-bold text-accent sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 font-medium text-white">{s.label}</p>
              <p className="text-sm text-white/50">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Experience + Skills */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Experience */}
          <div className="rounded-2xl border border-white/10 bg-[#101014] p-6">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
              <HiOutlineBriefcase className="text-accent" /> Experience
            </h2>
            <div className="flex flex-col gap-6 border-l border-white/10 pl-6">
              {experience.map((exp) => (
                <div key={exp.company} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-primary" />
                  <span className="text-sm text-accent">{exp.period}</span>
                  <h3 className="mt-1 font-semibold text-white">{exp.role}</h3>
                  <p className="text-accent/80">{exp.company}</p>
                  <p className="mt-2 text-sm text-white/60">{exp.description}</p>
                </div>
              ))}
            </div>
            <a href={withBasePath("/resume/cv.pdf")} download className="mt-6 inline-block">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                View Full Resume <FiArrowRight />
              </Button>
            </a>
          </div>

          {/* Skills */}
          <div className="rounded-2xl border border-white/10 bg-[#101014] p-6">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
              <HiOutlineSparkles className="text-accent" /> Skills
            </h2>

            <p className="mb-3 text-sm font-medium text-white/50">Frontend</p>
            <div className="flex flex-col gap-4">
              {frontendSkills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>

            <p className="mb-3 mt-6 text-sm font-medium text-white/50">Backend</p>
            <div className="flex flex-col gap-4">
              {backendSkills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>

            <p className="mb-3 mt-6 text-sm font-medium text-white/50">
              Tools &amp; Others
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t.name}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#1c1c22] px-3 py-1.5 text-sm text-white/80"
                >
                  <span className="text-accent">{t.icon}</span>
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
