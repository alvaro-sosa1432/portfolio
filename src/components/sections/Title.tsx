import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export const Title = () => {
  const words = [
    {
      text: "Hola👋,",
    },
    {
      text: "Soy",
    },
    {
      text: "Alvaro",
    },
  ];

  return (
    <div>
      <TypewriterEffectSmooth words={words} />
      <h2 className="font-[bitcountGridDouble]">Desarrolador fullstack</h2>
    </div>
  );
};
