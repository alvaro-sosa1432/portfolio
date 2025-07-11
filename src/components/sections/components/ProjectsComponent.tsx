import Image from "next/image";
import { motion } from "motion/react";
import { IProjectData } from "../Projects";
import { BorderTrail } from "@/components/ui/border-trail";

export const ProjectComponent = ({ title, image, url }: IProjectData) => {
  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl  m-2 ">
        <BorderTrail className="bg-purple-500" />

        <Image
          className="rounded-t-xl w-full h-40 "
          alt={title}
          src={image}
          width={200}
          height={200}
        />
        <div className="text-center text-purple-500 pb-4 h-40 flex flex-col items-center justify-center  ">
          <h3 className="text-2xl p-2">{title}</h3>
          <motion.a
            className="bg-purple-500 text-white rounded-lg px-4 py-2 text-[20px] font-semibold w-40 cursor-pointer "
            href={url}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Saber Mas
          </motion.a>
        </div>
      </div>
    </div>
  );
};
