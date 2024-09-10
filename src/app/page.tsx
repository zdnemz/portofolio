"use client";

import GridBackground from "@/components/backgrounds/GridBackground";
import Navbar from "@/components/bars/Navbar";
import ShimmerButton from "@/components/buttons/ShimmerButton";
import HyperText from "@/components/texts/HyperText";
import RevealText from "@/components/texts/RevealText";
import { cn } from "@/lib/utils/cn";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <div className="absolute inset-x-0 h-[100%] overflow-hidden saturate-[25%]">
        <GridBackground
          numSquares={100}
          maxOpacity={0.5}
          duration={1}
          strokeDasharray={10}
          className={cn(
            "[mask-image:radial-gradient(75vw_circle_at_center,white,transparent)]",
            "skew-y-12 scale-125"
          )}
        />
      </div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div>
            <h1 className="text-4xl font-bold">
              <HyperText text="Hello! I am " />
              <Typewriter
                words={[
                  "Zidane",
                  "Backend Engineer",
                  "Frontend Engineer",
                  "Tech Enthusiast",
                  "Student",
                ]}
                loop
                typeSpeed={75}
                delaySpeed={3000}
                cursor
              />
            </h1>
            <ShimmerButton className="mt-8">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                Get Started
              </span>
            </ShimmerButton>
          </div>
        </div>
      </main>
      <section className="relative flex min-h-screen flex-col p-24 font-mono">
        <RevealText
          title="About Me"
          className="text-2xl"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente aliquam doloribus magnam, soluta dicta, aspernatur dignissimos nihil, cupiditate eligendi reprehenderit voluptatibus praesentium odit ipsum dolorem aperiam exercitationem inventore corporis."
        />
      </section>
    </>
  );
}
