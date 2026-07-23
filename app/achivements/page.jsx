"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SpotlightCard from "@/components/SpotlightCard";
import { withBasePath } from "@/lib/basePath";

const achievements = () => {
  const certificates = [
    {
      image:
        "https://images.credly.com/images/2700b813-82b8-4232-9b36-5dcd5cd24584/linkedin_thumb_Badges_v8-08_Co-Creator.png",
      title: "Enterprise Design Thinking Co-Creator",
      subtitle: "Issued by IBM",
      handle: "View Badge",
      url: "https://www.credly.com/badges/965f7373-9660-491e-9392-97818cea8c09/public_url",
    },
    {
      image: null,
      title: "Front End Development Libraries",
      subtitle: "Issued by freeCodeCamp",
      handle: "View Certificate",
      url: "https://www.freecodecamp.org/certification/fcc97ef0d91-ef54-49b5-9546-1b184821f0b1/front-end-development-libraries",
    },
    {
      image: "/resume/beckendapi.png",
      title: "Back End Development and APIs",
      subtitle: "Issued by freeCodeCamp",
      handle: "View Certificate",
      url: "https://www.freecodecamp.org/certification/fcc97ef0d91-ef54-49b5-9546-1b184821f0b1/back-end-development-and-apis",
    },
    {
      image: null,
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "Issued by freeCodeCamp",
      handle: "View Certificate",
      url: "https://www.freecodecamp.org/certification/fcc97ef0d91-ef54-49b5-9546-1b184821f0b1/javascript-algorithms-and-data-structures",
    },
  ];

  return (
    <div className="min-h-full bg-primary text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 text-center">My Achievements</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <SpotlightCard key={i} className="flex flex-col">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5">
              {cert.image ? (
                <Image
                  src={
                    cert.image.startsWith("http")
                      ? cert.image
                      : withBasePath(cert.image)
                  }
                  alt={cert.title}
                  fill
                  unoptimized={cert.image.startsWith("http")}
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#00ff99]/15 via-primary to-primary p-4 text-center">
                  <span className="text-3xl font-bold text-accent">
                    {cert.subtitle?.replace(/^Issued by\s*/i, "") || "Certificate"}
                  </span>
                  <span className="text-sm font-medium text-white/70">
                    {cert.title}
                  </span>
                </div>
              )}
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
