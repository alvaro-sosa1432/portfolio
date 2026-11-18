import { FaCss3, FaHtml5 } from "react-icons/fa6";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const technologies = [
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3 },
  { name: "JavaScript", Icon: RiJavascriptFill },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: RiReactjsFill },
  { name: "Next.js", Icon: RiNextjsFill },
  { name: "Tailwind CSS", Icon: RiTailwindCssFill },
];

export const Technologies = () => {
  return (
    <div className="border-t border-purple-400/15 pt-5">
      <h3 id="about-technologies" className="mb-3 text-2xl font-bold text-white">
        Tecnologías
      </h3>
      <ul
        aria-labelledby="about-technologies"
        className="flex flex-wrap gap-2 font-[family-name:var(--font-poppins)] text-sm text-zinc-200"
      >
        {technologies.map(({ name, Icon }) => (
          <li
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"
          >
            <Icon className="size-4 shrink-0 text-purple-300" aria-hidden="true" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
