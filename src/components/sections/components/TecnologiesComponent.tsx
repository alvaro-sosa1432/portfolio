import { BorderTrail } from "@/components/ui/border-trail";
import { Magnetic } from "@/components/ui/magnetic";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNodejsFill,
  RiReactjsFill,
  RiNextjsFill,
} from "react-icons/ri";
import { FaGithub, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiTypescript, SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";

export const Tecnologies = () => {
  return (
    <Magnetic intensity={0.2} actionArea="global" range={200}>
      <div className=" text-purple-500 text-3xl bg-white/10 backdrop-blur-lg rounded-xl p-4  ">
        <BorderTrail className="bg-purple-500" />
        <h1 className="text-purple-500 font-bold text-center ">Tecnologias</h1>
        <div className="flex justify-center flex-wrap items-center gap-4 py-4">
          <FaHtml5 />
          <FaCss3 />
          <RiJavascriptFill />
          <SiTypescript />
          <RiReactjsFill />
          <RiNextjsFill />
          <RiTailwindCssFill />
          <RiNodejsFill />
          <SiExpress />
          <DiMysql />
          <FaGithub />
        </div>
      </div>
    </Magnetic>
  );
};
