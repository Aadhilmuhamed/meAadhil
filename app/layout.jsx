import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import PageTransition from "./../components/PageTransition";
import StairEffect from "./../components/stairEffect";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "---font-JetBrainsMono",
});

export const metadata = {
  title: "Aadhil",
  description:
    "I'm Aadhil Muhamed, a Software Engineer specializing in front-end development. I build dynamic and efficient web experiences using a stack that includes React, Next.js, and Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${JetBrainsMono.variable} h-screen flex flex-col overflow-hidden`}>
        <Header />
        <StairEffect />
        <main className="flex-1 min-h-0 overflow-y-auto">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
