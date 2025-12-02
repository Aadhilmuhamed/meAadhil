"use client";

import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import ProfileCard from "./profileCard";

const Contact = () => {
    return (
        <section className="py-12 xl:py-24 h-full">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px]" >
                <div className="flex flex-col xl:flex-row ">
                    {/* Contact Info & CV */}
                    <div className="xl:w-100 order-2 xl:order-none">
                        <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">My Profile</h3>
                            <p className="text-white/60">
                                I am a dedicated professional with a passion for technology and
                                innovation. Here is a brief overview of my professional
                                background and contact details.
                            </p>

                            {/* HTML CV Section */}
                            <div className="bg-[#1c1c22] p-6 rounded-lg border border-white/10">
                                <h4 className="text-xl text-accent mb-4">Curriculum Vitae</h4>
                                <div className="space-y-4 text-white/80">
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
                                <div className="mt-6">
                                    <a href="/resume/cv.pdf" download>
                                        <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                                            Download CV
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <ul className="flex flex-col gap-6">
                                <li className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">
                                            <FaPhoneAlt />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">Phone</p>
                                        <h3 className="text-xl">0778739418</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">
                                            <FaMapMarkerAlt />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">Address</p>
                                        <h3 className="text-xl">Kinnniya 06, Trincomalee</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">
                                            <FaLinkedin />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">LinkedIn</p>
                                        <Link href="https://www.linkedin.com/in/aadhil-muhamed/" target="_blank" className="text-xl hover:text-accent transition-all duration-500">
                                            aadhil-muhamed
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div>
                    <ProfileCard
                        name="Aadhil Muhamed"
                        title="Software Engineer"
                        handle="aadhil-muhamed"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/path/to/avatar.jpg"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
