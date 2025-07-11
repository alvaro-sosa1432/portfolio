import { ProjectComponent } from "./components/ProjectsComponent";

export interface IProjectData {
  id?: string;
  title: string;
  image: string;
  url: string;
}

const ProjectData: IProjectData[] = [
  {
    id: "1",
    title: "Rick And Morty APP",
    image: "/rickandmorty.jpeg",
    url: "https://rick-and-morty-app-two-tau.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className=" text-3xl min-[600px]:text-6xl text-purple-500">
        Projectos
      </h1>
      {ProjectData.map((project) => (
        <div className="my-10" key={project.id}>
          <ProjectComponent
            title={project.title}
            image={project.image}
            url={project.url}
          />
        </div>
      ))}
    </div>
  );
};
