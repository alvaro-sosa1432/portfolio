"use client";

import { ClientOnly } from "@/components/sections/ClientOnly";
import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <ClientOnly>
      <BackgroundBeamsWithCollision className="bg-inherit flex flex-col min-h-screen items-center justify-center scroll-smooth">
        <div className="sm:w-2xl">
          <Hero />
          <AboutMe />
        </div>
      </BackgroundBeamsWithCollision>
    </ClientOnly>
  );
}
