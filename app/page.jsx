import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import MagnetLines from "@/components/MagnetLines";
import { withBasePath } from "@/lib/basePath";

const Page = () => {
  return (
    <section className="min-h-full relative">
      <MagnetLines
        className="absolute inset-0 -z-10"
        rows={10}
        columns={20}
        lineColor="rgba(255, 255, 255, 0.35)"
        baseAngle={-10}
      />
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Aadhil</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Full-Stack Software Engineer building fast, scalable and
              SEO-optimized web apps with Next.js, React and Node.js — from data
              modeling and REST APIs to polished, production-ready interfaces.
              Early adopter of AI-assisted development.
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href={withBasePath("/resume/cv.pdf")} download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Page;
