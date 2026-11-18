import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const contactLinks = [
  { label: "Enviar correo", href: "mailto:alvarososafrancisco1432@gmail.com", Icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alvaro-sosa1432/", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/alvaro-sosa1432", Icon: FaGithub },
  { label: "Descargar CV", href: "/AlvaroSosa-CV(ES).pdf", Icon: Download, download: true },
];

export const SocialComponent = () => {
  return (
    <div className="rounded-3xl border border-purple-500/25 bg-white/[0.04] p-5 sm:p-8">
      <h3 id="about-contact" className="mb-4 text-2xl font-bold text-white">
        Contacto
      </h3>
      <ul
        aria-labelledby="about-contact"
        className="grid gap-2 font-[family-name:var(--font-poppins)] sm:grid-cols-2 lg:grid-cols-1"
      >
        {contactLinks.map(({ label, href, Icon, download }) => (
          <li key={href}>
            <a
              href={href}
              download={download}
              className="flex min-h-12 items-center gap-3 rounded-xl border border-purple-400/25 bg-purple-500/5 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-purple-400/60 hover:bg-purple-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              <Icon className="size-5 shrink-0 text-purple-300" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
