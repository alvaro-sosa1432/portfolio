import { AnimatedBackground } from "@/components/ui/animated-background";
import { Home, User, BriefcaseBusiness } from "lucide-react";

export function Navbar() {
  const TABS = [
    {
      label: "Home",
      icon: (
        <a href="#hero">
          <Home className="h-5 w-5" />
        </a>
      ),
    },
    {
      label: "aboutme",
      icon: (
        <a href="#me">
          <User className="h-5 w-5" />
        </a>
      ),
    },
    {
      label: "projects",
      icon: (
        <a href="#projects">
          <BriefcaseBusiness className="h-5 w-4" />
        </a>
      ),
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-max">
      <div className="flex w-full space-x-2 rounded-xl border border-purple-500 bg-white/10 backdrop-blur-lg p-2">
        <AnimatedBackground
          defaultValue={TABS[0].label}
          className="rounded-lg bg-purple-500/50"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.label}
              data-id={tab.label}
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center text-white transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-white hover:text-white"
            >
              {tab.icon}
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
}
