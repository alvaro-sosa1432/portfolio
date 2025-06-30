import { SocialComponent } from "./components/SocialComponet";
import { AboutMeComponet } from "./components/AboutMeComponent";
import { Tecnologies } from "./components/TecnologiesComponent";

export const AboutMe = () => {
  return (
    <div className="  grid grid-cols-1   min-[600px]:grid-cols-4 justify-center items-center  grid-flow-row-dense gap-2 my-6 ">
      <div className="col-span-2 row-span-2 ">
        <AboutMeComponet />
      </div>
      <div className=" col-span-2">
        <SocialComponent />
      </div>
      <div className="row-span-4 col-span-2">
        <Tecnologies />
      </div>
    </div>
  );
};
