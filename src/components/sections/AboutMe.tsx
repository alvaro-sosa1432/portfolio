import { CiCircleChevUp } from "react-icons/ci";
import { SocialComponent } from "./components/SocialComponet";
import { AboutMeComponet } from "./components/AboutMeComponent";
import { Tecnologies } from "./components/TecnologiesComponent";

export const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="flex flex-col items-center justify-center min-h-screen "
    >
      <a href="#hero" className="my-10">
        <CiCircleChevUp className="text-5xl text-purple-500 " />
      </a>
      <h1 className="font-bold text-6xl text-purple-500 text-center ">
        Sobre Mi
      </h1>
      <div className=" font-[poppins]  grid grid-cols-1    min-[600px]:grid-cols-4 justify-center items-center  grid-flow-row-dense gap-2 my-6  ">
        <div className="col-span-4  ">
          <AboutMeComponet />
        </div>
        <div className=" col-span-3 min-[600px]:col-span-2">
          <SocialComponent />
        </div>
        <div className=" col-span-2">
          <Tecnologies />
        </div>
      </div>
    </div>
  );
};
