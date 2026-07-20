"use client";

import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiMail, FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const skills = ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"];

const Contact = () => {
    return (
        <section className="min-h-full flex items-center py-4 xl:py-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px]" >
                <div className="flex flex-col xl:flex-row ">
                    {/* Contact Info & CV */}
                    <div className="xl:w-100 order-2 xl:order-none">
                        <div className="flex flex-col gap-4 p-6 bg-[#27272c] rounded-xl">
                            <h3 className="text-3xl text-accent">My Profile</h3>
                            <p className="text-white/60 text-sm">
                                I am a dedicated professional with a passion for technology and
                                innovation. Here is a brief overview of my professional
                                background and contact details.
                            </p>

                            {/* HTML CV Section */}
                            <div className="bg-[#1c1c22] p-4 rounded-lg border border-white/10">
                                <h4 className="text-lg text-accent mb-3">Curriculum Vitae</h4>
                                <div className="space-y-2 text-white/80">
                                    <div>
                                        <h5 className="font-bold text-white">Aadhil Muhamed</h5>
                                        <p className="text-sm">Software Engineer</p>
                                    </div>
                                    <div>
                                        <h6 className="font-semibold text-accent">Experience</h6>
                                        <p className="text-sm">
                                            Specializing in front-end development with React, Next.js, and Node.js.
                                        </p>
                                    </div>
                                    <div>
                                        <h6 className="font-semibold text-accent">Education</h6>
                                        <p className="text-sm">
                                            (Add Education Details Here)
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <a href="/resume/cv.pdf" download>
                                        <Button variant="outline" className="uppercase flex items-center gap-2">
                                            Download CV
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-4">
                                    <div className="w-[40px] h-[40px] xl:w-[48px] xl:h-[48px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-lg">
                                            <FaPhoneAlt />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60 text-sm">Phone</p>
                                        <h3 className="text-base">0778739418</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-[40px] h-[40px] xl:w-[48px] xl:h-[48px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-lg">
                                            <FaMapMarkerAlt />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60 text-sm">Address</p>
                                        <h3 className="text-base">Kinnniya 06, Trincomalee</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-[40px] h-[40px] xl:w-[48px] xl:h-[48px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-lg">
                                            <FaEnvelope />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60 text-sm">Email</p>
                                        <Link href="mailto:aadhilmuhamed2022@gmail.com" className="text-base hover:text-accent transition-all duration-500">
                                            aadhilmuhamed2022@gmail.com
                                        </Link>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-[40px] h-[40px] xl:w-[48px] xl:h-[48px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-lg">
                                            <FaLinkedin />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60 text-sm">LinkedIn</p>
                                        <Link href="https://www.linkedin.com/in/aadhil-muhamed/" target="_blank" className="text-base hover:text-accent transition-all duration-500">
                                            aadhil-muhamed
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="relative rounded-2xl border border-accent/30 bg-[#101014] p-6 flex flex-col items-center text-center shadow-[0_0_60px_-15px_rgba(0,255,153,0.25)]">
                    {/* Available badge */}
                    <div className="self-start flex items-center gap-2 rounded-full bg-[#1c1c22] border border-white/10 px-4 py-1.5 text-sm text-white/80">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Available for work
                    </div>

                    {/* Avatar */}
                    <div className="mt-5 relative w-24 h-24 xl:w-28 xl:h-28 rounded-full ring-2 ring-accent/60 shadow-[0_0_40px_-5px_rgba(0,255,153,0.5)] overflow-hidden">
                        <Image
                            src="/assets/Aadhil2.jpg"
                            fill
                            quality={100}
                            alt="Aadhil Muhamed"
                            className="object-cover"
                        />
                    </div>

                    <h3 className="mt-3 text-2xl xl:text-3xl font-semibold text-white leading-tight">
                        Aadhil
                    </h3>
                    <h3 className="text-2xl xl:text-3xl font-semibold text-accent leading-tight">
                        Muhamed
                    </h3>
                    <p className="text-white/60 mt-1 text-sm">Software Engineer</p>

                    <div className="w-12 h-[3px] bg-accent rounded-full my-3" />

                    <p className="text-white/70 text-sm max-w-[380px]">
                        Passionate about building modern web applications with clean
                        code and exceptional user experiences. Always learning. Always
                        building.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 rounded-full border border-white/15 text-xs text-white/80"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
                        <Link href="mailto:aadhilmuhamed2022@gmail.com" className="flex-1">
                            <Button className="w-full flex items-center justify-center gap-2">
                                <FiMail className="text-lg" />
                                Contact Me
                            </Button>
                        </Link>
                        <a href="/resume/cv.pdf" download className="flex-1">
                            <Button
                                variant="outline"
                                className="w-full flex items-center justify-center gap-2"
                            >
                                <FiDownload className="text-lg" />
                                Download CV
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
