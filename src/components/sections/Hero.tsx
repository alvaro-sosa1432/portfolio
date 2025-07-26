import Image from "next/image";
import { Title } from "./Title";

import { BorderTrail } from "../ui/border-trail";
import { Magnetic } from "../ui/magnetic";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="  sm:h-screen flex flex-col min-[600px]:p-4  items-center justify-center gap-6 mt-10  "
    >
      <Title />
      <div className=" text-center  ">
        <h2 className="font-[bitcountGridDouble]  text-purple-500 min-[600px]:text-3xl ">
          Desarrolador fullstack
        </h2>
      </div>
      <Magnetic intensity={0.2} actionArea="global" range={200}>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 my-6   ">
          <BorderTrail className="bg-purple-500" />
          <Image
            className="w-40  min-[300]:w-60 md:w-[300px]"
            alt="alvaro sosa "
            src="/character.png"
            priority
            width={200}
            height={200}
          />
        </div>
      </Magnetic>
    </div>
  );
};
