"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SpotlightCard from "@/components/SpotlightCard";

const achievements = () => {
  const certificates = [
    {
      image: "https://placehold.co/600x400/000000/FFF?text=Coursera",
      title: "Coursera Certificate",
      subtitle: "Full Stack Web Development",
      handle: "View Certificate",
      url: "#", // Replace with actual certificate URL
    },
    {
      image: "https://placehold.co/600x400/000000/FFF?text=FreeCodeCamp",
      title: "FreeCodeCamp",
      subtitle: "Responsive Web Design",
      handle: "View Certificate",
      url: "https://www.freecodecamp.org/certification/fcc97ef0d91-ef54-49b5-9546-1b184821f0b1/back-end-development-and-apis", // Replace with actual certificate URL
    },
    {
      image: "/resume/beckendapi.png",
      title: "FreeCodeCamp",
      subtitle: "Back End Development and APIs V8",
      handle: "View Certificate",
      url: "https://www.freecodecamp.org/certification/fcc97ef0d91-ef54-49b5-9546-1b184821f0b1/back-end-development-and-apis", // Replace with actual certificate URL
    },
    {
      image: "https://placehold.co/600x400/000000/FFF?text=Coming+Soon",
      title: "More Achievements",
      subtitle: "Learning in progress...",
      handle: "@meAadhil",
      url: "#",
    },
  ];

  return (
    <div className="min-h-full bg-primary text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 text-center">My Achievements</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <SpotlightCard key={i} className="flex flex-col">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                unoptimized={cert.image.startsWith("http")}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
            <p className="text-white/60 mt-1">{cert.subtitle}</p>
            <Link
              href={cert.url}
              target={cert.url.startsWith("http") ? "_blank" : undefined}
              className="mt-4 text-accent font-medium hover:underline"
            >
              {cert.handle}
            </Link>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default achievements;
