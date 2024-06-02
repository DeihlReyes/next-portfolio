'use client'

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
    <div className="flex flex-col space-y-5 items-center justify-center">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-[320px] md:w-[650px] h-full md:h-[380px]">
        <CarouselContent>
          {projectImages.map((img: any, index: any) => (
            <CarouselItem className="w-full md:w-[650px] h-full md:h-[380px]" key={index}>
              <Image
                className="w-[650px] h-full md:h-[380px] object-cover rounded-xl shadow-xl"
                src={img}
                alt={`Project Image ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-row gap-2">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={`w-4 h-5 rounded-full mx-1 ${i === current - 1 ? 'bg-black' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
