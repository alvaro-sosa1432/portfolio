import { InView } from "@/components/ui/in-view";
import { PropsWithChildren } from "react";
import { Hero } from "./Hero";
import { AboutMe } from "./AboutMe";

export const InViewContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col flex-wrap bg-zinc-950 text-white overflow-auto h-auto font-[poppins] ">
      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <Hero />
      </InView>
      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <AboutMe />
      </InView>
    </div>
  );
};
