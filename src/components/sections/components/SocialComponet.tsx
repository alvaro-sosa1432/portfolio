import { Magnetic } from "@/components/ui/magnetic";
import { BorderTrail } from "@/components/ui/border-trail";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export const SocialComponent = () => {
  return (
    <Magnetic intensity={0.2} actionArea="global" range={200}>
      <div className=" flex justify-center items-center flex-wrap text-purple-500 text-3xl bg-white/10 backdrop-blur-lg rounded-xl p-6 m-2 gap-5 min-[600px]:h-60 ">
        <motion.h1 className=" text-2xl sm:text-3xl font-[bitcountGridDouble]">
          Contactame
        </motion.h1>
        <BorderTrail className="bg-purple-500" />
        <div className="flex justify-center items-center flex-wrap  gap-5">
          <motion.a
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/alvaro-sosa1432/"
          >
            <FaLinkedin className="min-[600px]:text-5xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:alvarososafrancisco1432@gmail.com"
          >
            <MdEmail className="min-[600px]:text-5xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/alvaro-sosa1432"
          >
            <FaGithub className="min-[600px]:text-5xl" />
          </motion.a>
          <motion.a
            href="/AlvaroSosa-CV(ES).pdf"
            download="/AlvaroSosa-CV(ES).pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white rounded-lg px-2 sm:px-4 py-2 text-[20px] font-semibold w-40 flex gap-5 justify-center items-center font-[bitcountGridDouble]  "
          >
            Mi CV
            <CiSaveDown2 className=" text-2xl min-[600px]:text-5xl" />
          </motion.a>
        </div>
      </div>
    </Magnetic>
  );
};
