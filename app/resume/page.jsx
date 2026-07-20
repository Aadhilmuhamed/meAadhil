"use client";

import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";

// Computes "MMM yyyy - Present (Xy Ym)" from a start date to now
const getDurationFromStart = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const startLabel = start.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const parts = [];
  if (years > 0) parts.push(`${years}y`);
  if (months > 0 || years === 0) parts.push(`${months}m`);

  return `${startLabel} - Present (${parts.join(" ")})`;
};

// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have collaborated with dynamic companies to build efficient web solutions.",
  items: [
    {
      company: "Scripter Lab",
      position: "Collaborator / Developer",
      duration: getDurationFromStart("2023-04-01"),
    },
    {
      company: "Veloz Marketing",
      position: "Web Developer",
      duration: "2022 - 2023",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Continuous learner with certifications from reputable platforms.",
  items: [
    {
      institution: "Coursera",
      degree: "Full Stack Web Development",
      duration: "2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "Front End Development Libraries",
      duration: "2022",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description:
    "Proficient in modern web technologies and frameworks.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaWordpress />,
      name: "WordPress",
    },
  ],
};

// Projects Data
const projects = {
  title: "My Projects",
  description: "A showcase of my recent work.",
  items: [
    {
      title: "WordPress Project",
      tech: "WordPress, PHP",
      description: "A dynamic website built with WordPress.",
    },
    {
      title: "Next.js Project",
      tech: "Next.js, React, Tailwind",
      description: "A modern web application using Next.js.",
    },
    {
      title: "Node.js Email Project",
      tech: "Node.js, Express, Nodemailer",
      description: "Backend service for sending emails.",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-full flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex justify-end mb-4 xl:mb-0 xl:absolute xl:top-24 xl:right-24 z-10">
          <a href="/resume/cv.pdf" download>
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download CV</span>
              <FaDownload className="text-xl" />
            </Button>
          </a>
        </div>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 h-auto bg-transparent p-0">
            <TabsTrigger value="experience" className="w-full py-3 data-[state=active]:bg-accent data-[state=active]:text-primary">Experience</TabsTrigger>
            <TabsTrigger value="education" className="w-full py-3 data-[state=active]:bg-accent data-[state=active]:text-primary">Education</TabsTrigger>
            <TabsTrigger value="projects" className="w-full py-3 data-[state=active]:bg-accent data-[state=active]:text-primary">Projects</TabsTrigger>
            <TabsTrigger value="about" className="w-full py-3 data-[state=active]:bg-accent data-[state=active]:text-primary">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Projects */}
            <TabsContent value="projects" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{projects.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {projects.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {projects.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <p className="text-white/60 mb-2">{item.description}</p>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-accent">{item.tech}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">About me</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  I am a passionate developer with a knack for building robust and scalable web applications.
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">Name</span>
                    <span className="text-xl">Aadhil Muhamed</span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">Phone</span>
                    <span className="text-xl">0778739418</span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">Experience</span>
                    <span className="text-xl">2+ Years</span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">Nationality</span>
                    <span className="text-xl">Sri Lankan</span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">Email</span>
                    <span className="text-xl">aadhilmuhamed2022@gmail.com</span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">Freelance</span>
                    <span className="text-xl">Available</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Skills Section Always Visible */}
        <div className="mt-12 mb-12">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
              </p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill, index) => {
                return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
