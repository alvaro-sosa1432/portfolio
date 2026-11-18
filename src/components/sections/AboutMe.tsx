import { SocialComponent } from "./components/SocialComponet";
import { AboutMeComponet } from "./components/AboutMeComponent";
import { Technologies } from "./components/TecnologiesComponent";

export const AboutMe = () => {
  return (
    <section
      id="me"
      aria-labelledby="about-heading"
      className="scroll-mt-6 border-t border-white/10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-heading"
          className="mb-5 text-4xl font-bold tracking-tight text-white sm:mb-7 sm:text-5xl"
        >
          Sobre <span className="text-purple-400">mí</span>
        </h2>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] lg:gap-6">
          <div className="space-y-6 rounded-3xl border border-purple-500/25 bg-purple-500/5 p-5 sm:p-8">
            <AboutMeComponet />
            <Technologies />
          </div>
          <SocialComponent />
        </div>
      </div>
    </section>
  );
};
