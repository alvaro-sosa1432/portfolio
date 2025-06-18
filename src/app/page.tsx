import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "../../components/motion-primitives/carousel";

import { Introduction } from "@/components/Introdution";
import { Tecnologias } from "@/components/Tecnologias";
export default function Home() {
  return (
    <div className="sm:w-xl mx-auto  ">
      <Carousel>
        <CarouselContent className=" ">
          <CarouselItem className="p-4">
            <div className="flex aspect-square items-center justify-center sm:border sm:border-cyan-500 dark:border-zinc-800 rounded-md h-full">
              <Introduction />
            </div>
          </CarouselItem>
          <CarouselItem className="p-4">
            <div className="flex  items-center justify-center sm:border border-cyan-500 dark:border-zinc-800 rounded-md ">
              <Tecnologias />
            </div>
          </CarouselItem>
          <CarouselItem className="p-4">
            <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800"></div>
          </CarouselItem>
          <CarouselItem className="p-4">
            <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
              4
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation className="hidden min-[700px]:flex" alwaysShow />
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}

// <div className="font-[Poppins] dark:bg-gray-950 relative   flex justify-center items-center mx-auto min-h-screen">
//   <Carousel>
//     <CarouselContent>
//       <CarouselItem className=" sm:border sm:border-cyan-500  rounded-lg  ">
//         <Introduction />
//       </CarouselItem>
//     </CarouselContent>
//     <CarouselContent>
//       <CarouselItem className=" sm:border sm:border-cyan-500  rounded-lg  ">
//         <Tecnologias />
//       </CarouselItem>
//     </CarouselContent>
//     <CarouselNavigation alwaysShow />
//     <CarouselIndicator />
//   </Carousel>
// </div>;
