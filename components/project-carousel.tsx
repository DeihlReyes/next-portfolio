"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselApi } from "@/components/ui/carousel";

const ProjectCarousel = ({ projectImages }: { projectImages: any[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col space-y-5 items-center justify-center w-full">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full lg:w-[650px] h-full lg:h-[380px] relative shadow-lg shadow-slate-400"
      >
        <CarouselContent>
          {projectImages.map((img: any, index: any) => (
            <CarouselItem
              className="w-full lg:w-[650px] h-full lg:h-[380px]"
              key={index}
            >
              <Image
                className=" lg:w-[650px] h-full lg:h-[380px] object-cover rounded-lg "
                src={img}
                alt={`Project Image ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-5" />
        <CarouselPrevious className="absolute left-5" />
      </Carousel>
      <div className="flex flex-row gap-2 justify-center items-center">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full mx-1 ${
              i === current - 1 ? "bg-[#161616]" : "border border-[#161616]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
