import { Magnetic } from "@/components/ui/magnetic";
import { BorderTrail } from "@/components/ui/border-trail";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export const SocialComponent = () => {
  return (
    <Magnetic intensity={0.2} actionArea="global" range={200}>
      <div className=" flex justify-center items-center flex-wrap text-purple-500 text-3xl bg-white/10 backdrop-blur-lg rounded-xl p-6 m-2 gap-5 h-auto ">
        <BorderTrail className="bg-purple-500" />
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/alvaro-sosa1432/"
        >
          <FaLinkedin className="text-5xl" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:alvarososafrancisco1432@gmail.com"
        >
          <MdEmail className="text-5xl" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/alvaro-sosa1432"
        >
          <FaGithub className="text-5xl" />
        </motion.a>
        <motion.a
          href="/AlvaroSosa-CV(ES).pdf"
          download="/AlvaroSosa-CV(ES).pdf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-500 text-white rounded-lg px-4 py-2 text-[20px] font-semibold w-40 flex gap-5 justify-center items-center font-[bitcountGridDouble]  "
        >
          Mi CV
          <CiSaveDown2 className="text-5xl" />
        </motion.a>
      </div>
    </Magnetic>
  );
};
