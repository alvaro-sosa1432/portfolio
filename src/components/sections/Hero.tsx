import Image from "next/image";
import { CiCircleChevDown } from "react-icons/ci";
import { Title } from "./Title";

import { BorderTrail } from "../ui/border-trail";
import { Magnetic } from "../ui/magnetic";

export const Hero = () => {
  return (
    <div
      id="hero"
      className=" min-h-screen flex flex-col min-[600px]:p-4  items-center justify-center gap-6 mt-16 "
    >
      <Title />
      <div className="flex text-center  ">
        <h2 className="font-[bitcountGridDouble]  text-purple-500 text-3xl ">
          Desarrolador fullstack
        </h2>
      </div>
      <Magnetic intensity={0.2} actionArea="global" range={200}>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 my-6   ">
          <BorderTrail className="bg-purple-500" />
          <Image
            className="w-30 md:w-[250px]"
            alt="alvaro sosa "
            src="/character.png"
            priority
            width={200}
            height={200}
          />
        </div>
      </Magnetic>
      <a href="#aboutMe">
        <CiCircleChevDown className="text-5xl text-purple-500" />
      </a>
    </div>
  );
};
