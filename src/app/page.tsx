import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "../../components/motion-primitives/carousel";

import { Introduction } from "@/components/Introdution";
import { Tecnologias } from "@/components/Tecnologias";
import React from "react";

interface CarouselInter {
  id: number;
  content: React.ReactNode;
}

export default function Home() {
  const carouselItems: CarouselInter[] = [
    {
      id: 1,
      content: <Introduction />,
    },
    {
      id: 2,
      content: <Tecnologias />,
    },
  ];

  return (
    <div className="sm:w-xl mx-auto   ">
      <Carousel>
        <CarouselContent>
          {carouselItems.map((item: CarouselInter) => (
            <CarouselItem key={item.id} className="min-[700px]:p-4">
              <div className="min-[700px]:bg-zinc-950 flex  min-h-screen  min-[700px]:aspect-square items-center justify-center min-[700px]:border border-cyan-500  min-[700px]:rounded-md min-[500px]:h-full w-full">
                {item.content}
              </div>
            </CarouselItem>
          ))}
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
