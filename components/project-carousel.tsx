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
  projectTitle,
}: {
  projectImages: StaticImageData[];
  projectTitle: string;
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
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full aspect-[16/10] relative overflow-hidden"
      >
        <CarouselContent className="h-full">
          {projectImages.map((img, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src={img}
                alt={`${projectTitle} screenshot ${index + 1}`}
                quality={90}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Only show on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 border-0 shadow-lg backdrop-blur-sm" />
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 border-0 shadow-lg backdrop-blur-sm" />
        </div>

        {/* Image Counter */}
        {count > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
            {current} / {count}
          </div>
        )}
      </Carousel>

      {/* Dots Indicator - Only show if multiple images */}
      {count > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === current - 1
                  ? "bg-gray-900 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
