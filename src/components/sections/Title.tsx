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
      text: "Sosa",
    },
  ];

  return (
    <div className="">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};
