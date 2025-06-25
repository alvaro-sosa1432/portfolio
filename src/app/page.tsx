import { Hero } from "@/components/sections/Hero";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision className="  font-[poppins] bg-zinc-950 min-h-screen text-white ">
      <Hero />
    </BackgroundBeamsWithCollision>
  );
}
