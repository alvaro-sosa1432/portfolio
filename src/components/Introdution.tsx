import { Title } from "./Title";
import { Magnetic } from "../../components/motion-primitives/magnetic";
import Image from "next/image";
import { Mail, GithubIcon, LinkedinIcon, FileUserIcon } from "lucide-react";

export const Introduction = () => {
  return (
    <div className="p-4  sm:w-xl flex flex-col  justify-center  gap-5 h-[550px]  ">
      <Title />
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <Magnetic intensity={1} actionArea="global" range={100}>
          <p className="text-left border border-cyan-500 rounded-lg p-4 ">
            <strong className="text-cyan-500 ">
              Desarrollador Full Stack{" "}
            </strong>
            con pasión por crear soluciones innovadoras y aprender tecnologías
            nuevas. Busco mi primera oportunidad profesional para crecer y
            aportar valor.
          </p>
        </Magnetic>
        <Magnetic intensity={1} actionArea="global" range={100}>
          <Image
            className="sm:w-[500px] border border-cyan-500 rounded-full m-2 "
            alt="Alvaro Sosa"
            src="/character.png"
            width={200}
            height={200}
          />
        </Magnetic>
      </div>
      <div className="flex justify-start text-cyan-500 gap-4 items-center ">
        <a className="" href="https://www.linkedin.com/in/alvaro-sosa1432/">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/alvaro-sosa1432">
          <GithubIcon />
        </a>
        <a href="mailto:alvarososafrancisco1432@gmail.com">
          <Mail />
        </a>
        <a
          className=" rounded-md my-2 hover:shadow-md hover:shadow-cyan-500/40 duration-500 ease-in-out font-bold "
          href="/AlvaroSosa-CV(ES).pdf"
          download="AlvaroSosa-CV(ES).pdf"
        >
          <FileUserIcon className="text-cyan-500 bg-white" />
        </a>
      </div>
    </div>
  );
};
