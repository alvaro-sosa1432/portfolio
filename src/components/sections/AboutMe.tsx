import { SocialComponent } from "./components/SocialComponet";
import { AboutMeComponet } from "./components/AboutMeComponent";
import { HoverEffect } from "../ui/card-hover-effect";
import { renderToString } from "react-dom/server";

export const AboutMe = () => {
  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center md:grid-rows-4">
      <div className="col-span-2 row-span-2 ">
        <AboutMeComponet />
      </div>
      <div className=" col-span-2">
        <SocialComponent />
      </div>
    </div>
  );
};
