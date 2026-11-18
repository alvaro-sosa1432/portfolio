"use client";

import { ClientOnly } from "@/components/sections/ClientOnly";
import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Projects } from "@/components/sections/Projects";
import { Navbar } from "@/components/sections/components/Navbar";

export default function Home() {
  return (
    <ClientOnly>
      <BackgroundBeamsWithCollision className="bg-inherit flex">
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
          <div className="w-full max-w-6xl scroll-smooth bg-zinc-950">
            <Navbar />
            <Hero />
            <AboutMe />
            <Projects />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </ClientOnly>
  );
}
