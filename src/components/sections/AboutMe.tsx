import { SocialComponent } from "./components/SocialComponet";
import { AboutMeComponet } from "./components/AboutMeComponent";
import { Tecnologies } from "./components/TecnologiesComponent";

export const AboutMe = () => {
  return (
    <div>
      <h1 className="font-bold text-6xl text-purple-500 text-center ">
        Sobre Mi
      </h1>
      <div className="  grid grid-cols-1    min-[600px]:grid-cols-4 justify-center items-center  grid-flow-row-dense gap-2 my-6  ">
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
