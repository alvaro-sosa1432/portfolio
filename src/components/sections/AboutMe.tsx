import { SocialComponent } from "./components/SocialComponet";
import { AboutMeComponet } from "./components/AboutMeComponent";
import { Technologies } from "./components/TecnologiesComponent";
import { itemVariants, containerVariants } from "./variants/animationVariants";
import { motion } from "motion/react";

export const AboutMe = () => {
  return (
    <motion.div
      id="me"
      className="flex flex-col items-center justify-center  sm:h-screen my-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-80px 0px -80px 0px" }}
      variants={containerVariants}
    >
      <motion.h1
        className="font-bold text-2xl min-[600px]:text-6xl text-purple-500 text-center mt-15"
        variants={itemVariants}
      >
        Sobre Mi
      </motion.h1>

      <motion.div
        className="font-[poppins] grid grid-cols-1 min-[600px]:grid-cols-4 justify-center items-center grid-flow-row-dense gap-2 my-6"
        variants={containerVariants}
      >
        <motion.div className="col-span-4" variants={itemVariants}>
          <AboutMeComponet />
        </motion.div>

        <motion.div
          className="col-span-3 min-[600px]:col-span-2"
          variants={itemVariants}
        >
          <SocialComponent />
        </motion.div>

        <motion.div className="col-span-2" variants={itemVariants}>
          <Technologies />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
