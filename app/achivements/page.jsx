"use client";
import React from "react";
import { ChromaGrid } from "@/components/ChromaGrid";

const achievements = () => {
  const certificates = [
    {
      image: "https://placehold.co/600x400/000000/FFF?text=Coursera",
      title: "Coursera Certificate",
      subtitle: "Full Stack Web Development",
      handle: "View Certificate",
      borderColor: "#0056D2",
      gradient: "linear-gradient(145deg, #0056D2, #000)",
      url: "#", // Replace with actual certificate URL
    },
    {
      image: "https://placehold.co/600x400/000000/FFF?text=FreeCodeCamp",
      title: "FreeCodeCamp",
      subtitle: "Responsive Web Design",
      handle: "View Certificate",
      borderColor: "#0a0a23",
      gradient: "linear-gradient(145deg, #0a0a23, #000)",
      url: "https://www.freecodecamp.org/certification/fcc97ef0d91-ef54-49b5-9546-1b184821f0b1/back-end-development-and-apis", // Replace with actual certificate URL
    },
    {
      image: "/resume/beckendapi.png",
      title: "FreeCodeCamp",
      subtitle: "Back End Development and APIs V8",
      handle: "View Certificate",
      borderColor: "#0a0a23",
      gradient: "linear-gradient(145deg, #0a0a23, #000)",
      url: "https://www.freecodecamp.org/certification/fcc97ef0d91-ef54-49b5-9546-1b184821f0b1/back-end-development-and-apis", // Replace with actual certificate URL
    },
    {
      image: "https://placehold.co/600x400/000000/FFF?text=Coming+Soon",
      title: "More Achievements",
      subtitle: "Learning in progress...",
      handle: "@meAadhil",
      borderColor: "#333",
      gradient: "linear-gradient(145deg, #333, #000)",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 text-center">My Achievements</h1>
      <div className="w-full max-w-6xl">
        <ChromaGrid
          items={certificates}
          columns={3}
          rows={2}
        />
      </div>
    </div>
  );
};

export default achievements;
