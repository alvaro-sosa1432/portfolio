import Image from "next/image";
import { Title } from "./Title";
import { BorderTrail } from "../ui/border-trail";
import { Magnetic } from "../ui/magnetic";

export const Hero = () => {
  return (
    <div className="flex flex-col min-[600px]:p-4  items-center justify-center gap-6 h-screen ">
      <Title />
      <Magnetic intensity={0.2} actionArea="global" range={200}>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 my-6 ">
          <BorderTrail className="bg-purple-500" />
          <Image
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
