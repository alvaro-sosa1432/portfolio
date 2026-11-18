import { ProjectComponent } from "./components/ProjectsComponent";

export interface IProjectData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  demoUrl: string;
  codeUrl: string;
  technologies: readonly string[];
}

const projects: IProjectData[] = [
  {
    title: "Rick and Morty App",
    description: "Explorador de personajes con búsqueda por nombre y fichas individuales.",
    image: "/rickandmorty.jpeg",
    imageAlt: "Página de inicio con tarjetas de los personajes principales de Rick and Morty",
    demoUrl: "https://rick-and-morty-app-two-tau.vercel.app/",
    codeUrl: "https://github.com/alvaro-sosa1432/rick-and-morty-app",
    technologies: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Rick and Morty API"],
  },
  {
    title: "My Ecommerce",
    description: "Tienda con catálogo y fichas de producto de la Fake Store API.",
    image: "/my-eccommerce.png",
    imageAlt: "Página de inicio de la tienda con su catálogo de productos",
    demoUrl: "https://my-eccormmerce.vercel.app/",
    codeUrl: "https://github.com/alvaro-sosa1432/my-eccormmerce",
    technologies: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Fake Store API"],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-6 border-t border-white/10 px-5 pb-28 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="projects-heading"
          className="mb-5 text-4xl font-bold tracking-tight text-purple-400 sm:mb-7 sm:text-5xl"
        >
          Proyectos
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <ProjectComponent key={project.codeUrl} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
