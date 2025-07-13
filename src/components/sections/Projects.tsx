import { motion } from "motion/react";
import { ProjectComponent } from "./components/ProjectsComponent";
import { itemVariants, containerVariants } from "./variants/animationVariants";

export interface IProjectData {
  id?: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

const ProjectData: IProjectData[] = [
  {
    id: "1",
    title: "Rick And Morty APP",
    image: "/rickandmorty.jpeg",
    description: "App creada utilizando la API de rick y morty",
    url: "https://rick-and-morty-app-two-tau.vercel.app/",
  },
  {
    id: "2",
    title: "Proyecto en proceso",
    description: "Proyecto en proceso ",
    image: "/inProgress.png",
    url: "",
  },
];

export const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-80px 0px -80px 0px" }}
      className="flex flex-col items-center justify-center min-h-screen "
    >
      <motion.h1
        className=" text-3xl min-[600px]:text-6xl text-purple-500"
        variants={itemVariants}
      >
        Projectos
      </motion.h1>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 min-[600px]:grid-cols-4"
      >
        {ProjectData.map((project) => (
          <motion.div
            variants={itemVariants}
            className=" col-span-2 "
            key={project.id}
          >
            <ProjectComponent
              title={project.title}
              image={project.image}
              url={project.url}
              description={project.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
