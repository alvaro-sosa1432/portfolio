"use client";

import { ClientOnly } from "@/components/sections/ClientOnly";
import { Hero } from "@/components/sections/Hero";
import { InViewContainer } from "@/components/sections/InViewContainer";
import { AboutMe } from "@/components/sections/AboutMe";

export default function Home() {
  return (
    <ClientOnly>
      <Hero />
      <InViewContainer>
        <AboutMe />
      </InViewContainer>
    </ClientOnly>
  );
}
