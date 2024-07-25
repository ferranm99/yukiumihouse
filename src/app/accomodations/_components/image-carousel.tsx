"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

type ImageCarouselProps = {
  images: Photo[];
  selectedIndex: number;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  selectedIndex,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(selectedIndex);
  const [count, setCount] = useState(images.length);
  const [calculatedWidth, setCalculatedWidth] = useState(0);
  const [calculatedHeight, setCalculatedHeight] = useState(0);

  const calculateDimensions = (index: number) => {
    const aspectRatio = images[index].width / images[index].height;
    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.9;

    let width, height;
    if (maxWidth / aspectRatio <= maxHeight) {
      width = maxWidth;
      height = maxWidth / aspectRatio;
    } else {
      width = maxHeight * aspectRatio;
      height = maxHeight;
    }

    setCalculatedWidth(width);
    setCalculatedHeight(height);
  };

  useEffect(() => {
    console.log("selected index", selectedIndex);
    console.log("current", current);
    const handleResize = () => {
      calculateDimensions(current);
    };

    // Initial calculation
    handleResize();

    // Recalculate on window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [current]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-[100vw] max-h-[100vh]">
      <Carousel
        setApi={setApi}
        opts={{ startIndex: current, align: "center" }}
        className="w-full h-full"
      >
        <CarouselContent className="max-w-[90vw] max-h-[90vh]">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt || "Photo " + index}
                width={calculatedWidth}
                height={calculatedHeight}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="invisible md:visible" />
        <CarouselNext className="invisible md:visible" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground font-medium text-white">
        Slide {current + 1} of {count}
      </div>
    </div>
  );
};

export default ImageCarousel;
