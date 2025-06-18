import { TextScramble } from "../../components/motion-primitives/text-scramble";

export const Title = () => {
  return (
    <div className="flex flex-wrap text-center justify-center text-4xl sm:text-5xl items-center  gap-2 py-4  ">
      <TextScramble className="font-semibold">Hola, Soy</TextScramble>
      <TextScramble className=" text-cyan-500 font-bold">
        Alvaro Sosa
      </TextScramble>
    </div>
  );
};
