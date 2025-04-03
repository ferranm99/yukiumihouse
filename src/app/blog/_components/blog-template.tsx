'use client'
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type BlogContent = {
  type: "text" | "image" | "video" | "carroussel";
  content: string | string[];
  alt?: string;
};

interface BlogProps {
  title: string;
  content: BlogContent[];
}

const BlogTemplate: React.FC<BlogProps> = ({ title, content }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
      {content.map((item, index) => {
        if (item.type === "text") {
          return (
            <div key={index} className="mb-4 text-lg text-gray-800 leading-loose">
              <div dangerouslySetInnerHTML={{ __html: item.content as string }} />
            </div>
          );
        } else if (item.type === "image") {
          return (
            <img
              key={index}
              src={item.content as string}
              alt={item.alt || ""}
              className="mb-4 w-full h-auto"
            />
          );
        } else if (item.type === "video") {
          return (
            <iframe
              key={index}
              src={item.content as string}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mb-4 w-full h-72 sm:h-96 2xl:h-[34rem] xl:h-[34rem]"
            ></iframe>
          );
        } else if (item.type === "carroussel") {
          return (
            <Carousel 
            key={index} 
            showThumbs={true} 
            infiniteLoop 
            autoPlay={true}
            centerMode={true}
            dynamicHeight={true}
            useKeyboardArrows>
              {(item.content as string[]).map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt={item.alt || `carousel-image-${idx}`} />
                </div>
              ))}
            </Carousel>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BlogTemplate;