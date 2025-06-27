"use client";

import { ClientOnly } from "@/components/sections/ClientOnly";
import { Hero } from "@/components/sections/Hero";
import { InViewContainer } from "@/components/sections/InViewContainer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AboutMe } from "@/components/sections/AboutMe";

export default function Home() {
  return (
    <ClientOnly>
      <BackgroundBeamsWithCollision className=" flex flex-col  font-[poppins] bg-zinc-950 min-h-screen text-white ">
        <div>
          <InViewContainer>
            <Hero />
          </InViewContainer>
          <InViewContainer>
            <AboutMe />
          </InViewContainer>
        </div>
      </BackgroundBeamsWithCollision>
    </ClientOnly>
  );
}
