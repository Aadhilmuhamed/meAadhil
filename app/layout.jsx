import { Instrument_Serif, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Aadhil Muhamed — Full-Stack Software Engineer",
  description:
    "I'm Aadhil Muhamed, a full-stack software engineer building fast, scalable and SEO-optimized web applications with Next.js, React and Node.js.",
};

export const viewport = {
  themeColor: "#eaf4ee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
