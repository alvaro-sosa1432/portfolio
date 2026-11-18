import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download, Github } from "lucide-react";
import { Title } from "./Title";
import { BorderTrail } from "../ui/border-trail";

export const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Presentación"
      className="relative flex min-h-[min(900px,100svh)] flex-col justify-center px-5 pb-28 pt-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] lg:gap-10">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/35 bg-purple-500/10 px-4 py-2 font-[family-name:var(--font-poppins)] text-xs font-medium tracking-wide text-purple-200 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-purple-400" aria-hidden="true" />
            Buscando mi primera oportunidad como Frontend Junior
          </div>

          <div className="space-y-3">
            <Title />
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Frontend <span className="text-purple-400">Developer</span>
            </h1>
            <p className="max-w-xl font-[family-name:var(--font-poppins)] text-base leading-relaxed text-zinc-300 sm:text-lg">
              Desarrollo interfaces web modernas, responsive y fáciles de usar
              con React, Next.js y TypeScript. Me gusta transformar ideas en
              experiencias claras, funcionales y cuidadas en cada detalle.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 font-[family-name:var(--font-poppins)] text-xs text-zinc-300 sm:text-sm">
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex w-full flex-col gap-3 font-[family-name:var(--font-poppins)] text-sm font-semibold sm:w-auto sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 text-white transition-colors hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Ver mis proyectos <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="/AlvaroSosa-CV(ES).pdf"
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-purple-400/40 bg-white/5 px-6 text-white transition-colors hover:bg-purple-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Descargar CV <Download size={17} aria-hidden="true" />
            </a>
          </div>

          <a
            href="https://github.com/alvaro-sosa1432"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-poppins)] text-sm text-zinc-400 transition-colors hover:text-purple-300"
          >
            <Github size={18} aria-hidden="true" />
            Ver mi código en GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[310px] sm:max-w-[360px] lg:max-w-none">
          <div className="absolute -inset-5 rounded-[2rem] bg-purple-600/10 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-white/[0.06] p-7 shadow-[0_20px_90px_rgba(0,0,0,0.3)] backdrop-blur-lg sm:p-9">
            <BorderTrail className="bg-purple-500" />
            <Image
              className="mx-auto h-auto w-full max-w-[300px] object-contain"
              alt="Ilustración del personaje del portfolio de Álvaro"
              src="/character.png"
              priority
              width={320}
              height={320}
              sizes="(max-width: 1024px) 310px, 360px"
            />
          </div>
        </div>
      </div>

      <Link
        href="#me"
        className="mt-12 inline-flex items-center justify-center gap-2 self-center font-[family-name:var(--font-poppins)] text-xs text-zinc-400 transition-colors hover:text-purple-300"
      >
        Conocé más sobre mí <ArrowDownRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
};
