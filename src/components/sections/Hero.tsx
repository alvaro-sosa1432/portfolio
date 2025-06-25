import Image from "next/image";
import { Title } from "./Title";

export const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col min-[600px]:p-4 items-center gap-6 ">
        <Title />
        <div className="blur-md">
          <Image
            className="w-50  "
            src={"/character.png"}
            alt="alvaro sosa"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
