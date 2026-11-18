import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { IProjectData } from "../Projects";

const actionClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 py-2 text-center text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400";

export const ProjectComponent = ({
  title,
  description,
  image,
  imageAlt,
  demoUrl,
  codeUrl,
  technologies,
}: IProjectData) => {
  return (
    <article className="group flex min-w-0 flex-col rounded-3xl border border-purple-500/25 bg-white/[0.04] transition-colors hover:border-purple-400/60 focus-within:border-purple-400/60 motion-safe:transition-[border-color,transform] motion-safe:hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden rounded-t-[inherit] border-b border-purple-500/20 bg-zinc-900">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1152px) 516px, (min-width: 1024px) calc((100vw - 120px) / 2), (min-width: 768px) calc((100vw - 84px) / 2), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
          className="object-cover object-top motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.025]"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="text-2xl font-bold leading-tight text-white lg:text-3xl">
          {title}
        </h3>

        <div className="flex flex-1 flex-col font-[family-name:var(--font-poppins)]">
          <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
            {description}
          </p>

          <ul aria-label="Tecnologías" className="mb-5 mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-purple-400/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-200"
              >
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-auto grid grid-cols-2 gap-2 border-t border-white/10 pt-4 sm:gap-3">
            <a
              href={demoUrl}
              aria-label={`Ver demo de ${title}`}
              className={`${actionClasses} bg-purple-600 text-white hover:bg-purple-500`}
            >
              <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
              Ver demo
            </a>
            <a
              href={codeUrl}
              aria-label={`Ver código de ${title}`}
              className={`${actionClasses} border border-purple-400/40 bg-purple-500/5 text-purple-100 hover:bg-purple-500/15`}
            >
              <Github className="size-4 shrink-0" aria-hidden="true" />
              Ver código
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
