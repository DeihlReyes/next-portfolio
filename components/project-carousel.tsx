"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselApi } from "@/components/ui/carousel";

const ProjectCarousel = ({
  projectImages,
}: {
  projectImages: StaticImageData[];
}) => {
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
        className="w-full max-w-[650px] aspect-[16/9] relative shadow-lg shadow-slate-400 rounded-lg overflow-hidden"
      >
        <CarouselContent className="h-full">
          {projectImages.map((img, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
              <Image
                className="object-contain w-full h-full"
                src={img}
                alt={`Project Image ${index + 1}`}
                quality={90}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-2 md:right-4" />
        <CarouselPrevious className="absolute left-2 md:left-4" />
      </Carousel>
      <div className="flex flex-row gap-2 justify-center items-center">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              i === current - 1 ? "bg-primary" : "border border-primary"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
