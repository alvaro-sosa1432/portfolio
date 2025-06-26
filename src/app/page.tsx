"use client";

import { ClientOnly } from "@/components/sections/ClientOnly";
import { Hero } from "@/components/sections/Hero";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <ClientOnly>
      <BackgroundBeamsWithCollision className="  font-[poppins] bg-zinc-950 min-h-screen text-white ">
        <Hero />
      </BackgroundBeamsWithCollision>
    </ClientOnly>
  );
}
