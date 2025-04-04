"use client";

import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Carousel 
      showThumbs={true} 
      infiniteLoop 
      autoPlay={true}
      centerMode={true}
      dynamicHeight={true}
      useKeyboardArrows>
      {images.map((src, idx) => (
        <div key={idx}>
          <img src={src} alt={`Gallery image ${idx + 1}`} className="max-h-full object-contain" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;