import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export const Title = () => {
  const words = [
    {
      text: "Hola👋",
    },
    {
      text: "Soy",
    },
    {
      text: "Alvaro",
    },
    {
      text: "Desarrollador",
    },
    {
      text: "FullStack",
    },
  ];

  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};
