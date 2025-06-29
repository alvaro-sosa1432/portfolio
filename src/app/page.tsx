"use client";

import { ClientOnly } from "@/components/sections/ClientOnly";
import { Hero } from "@/components/sections/Hero";
import { InViewContainer } from "@/components/sections/InViewContainer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AboutMe } from "@/components/sections/AboutMe";

export default function Home() {
  return (
    <ClientOnly>
      <div className="relative">
        <BackgroundBeamsWithCollision className=" min-h-screen flex flex-col  font-[poppins] bg-zinc-950  text-white ">
          <InViewContainer>
            <Hero />
          </InViewContainer>
          <InViewContainer>
            <AboutMe />
          </InViewContainer>
        </BackgroundBeamsWithCollision>
      </div>
    </ClientOnly>
  );
}
