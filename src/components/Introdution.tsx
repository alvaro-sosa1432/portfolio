import { Title } from "./Title";
import { Magnetic } from "../../components/motion-primitives/magnetic";
import Image from "next/image";
import { Mail, GithubIcon, LinkedinIcon } from "lucide-react";

export const Introduction = () => {
  return (
    <div className="p-4 flex flex-col  justify-center  gap-5 h-[500px]  ">
      <Title />
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <Magnetic intensity={1} actionArea="global" range={100}>
          <p className="text-left text-white border border-cyan-500 rounded-lg p-4  hover:shadow-md hover:shadow-cyan-500/40 duration-500 ease-in-out ">
            <strong className="text-cyan-500 ">
              Desarrollador Full Stack,
            </strong>
            con pasión por crear soluciones innovadoras y aprender tecnologías
            nuevas. Busco mi primera oportunidad profesional para crecer y
            aportar valor.
          </p>
        </Magnetic>
        <Magnetic intensity={1} actionArea="global" range={100}>
          <Image
            className="sm:w-[40rem] border border-cyan-500 rounded-full m-2   hover:shadow-md hover:shadow-cyan-500/40 duration-500 ease-in-out"
            alt="Alvaro Sosa"
            src="/character.png"
            width={200}
            height={200}
          />
        </Magnetic>
      </div>
      <div className="flex justify-center min-[500px]:justify-start text-cyan-500 gap-4 items-center ">
        <Magnetic>
          <a href="https://www.linkedin.com/in/alvaro-sosa1432/">
            <LinkedinIcon className=" my-2 hover:shadow-md hover:shadow-cyan-500/40 duration-500 ease-in-out font-bold size-10 p-2  rounded-md border border-cyan-500  " />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="https://github.com/alvaro-sosa1432">
            <GithubIcon className=" my-2 hover:shadow-md hover:shadow-cyan-500/40 duration-500 ease-in-out font-bold size-10 p-2  rounded-md border border-cyan-500  " />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="mailto:alvarososafrancisco1432@gmail.com">
            <Mail className=" my-2 hover:shadow-md hover:shadow-cyan-500/40 duration-500 ease-in-out font-bold size-10 p-2  rounded-md border border-cyan-500  " />
          </a>
        </Magnetic>
        <Magnetic>
          <a
            className=" rounded-md my-2 hover:shadow-md hover:shadow-cyan-500/40 duration-500 ease-in-out font-bold p-2 border border-cyan-500  "
            href="/AlvaroSosa-CV(ES).pdf"
            download="AlvaroSosa-CV(ES).pdf"
          >
            Descargar Cv
          </a>
        </Magnetic>
      </div>
    </div>
  );
};
