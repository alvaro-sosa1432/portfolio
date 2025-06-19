import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  RiNextjsLine,
  RiTailwindCssLine,
  RiJavascriptLine,
  RiFirebaseLine,
} from "react-icons/ri";
import { SiExpress, SiShadcnui } from "react-icons/si";

export const Tecnologias = () => {
  return (
    <div className="h-[550px] flex flex-col justify-center    ">
      <div>
        <h1 className="text-4xl text-center text-cyan-500">Tecnologias</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center text-cyan-500 gap-6 my-10 text-4xl min-[500px]:w-[500px] ">
        <FaHtml5 />
        <FaCss3 />
        <RiJavascriptLine />
        <FaBootstrap />
        <FaNodeJs />
        <FaGithub />
        <FaReact />
        <RiNextjsLine />
        <RiTailwindCssLine />
        <RiFirebaseLine />
        <SiExpress />
        <SiShadcnui />
      </div>
    </div>
  );
};
