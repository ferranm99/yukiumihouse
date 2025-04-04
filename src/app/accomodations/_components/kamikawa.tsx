"use client";
import React, { useState } from "react";
import PhotoAlbum from "./photo-album";
import ImageCarousel from "./image-carousel";
import {
  Modal,
  ModalBody,
  ModalTrigger,
} from "@/components/ui/animated-photos-modal";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

const interiorPhotos: Photo[] = [
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0000.jpg",
    width: 4160,
    height: 3120,
    alt: "Yukiumi House Kamikawa Room",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0006.jpg",
    width: 1600,
    height: 1200,
    alt: "Yukiumi House Kamikawa Room",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0015.jpg",
    width: 3120,
    height: 4160,
    alt: "Yukiumi House Kamikawa Room",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0016.jpg",
    width: 3872,
    height: 2903,
    alt: "Yukiumi House Kamikawa Room",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0018.jpg",
    width: 4160,
    height: 3120,
    alt: "Yukiumi House Kamikawa Room",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0019.jpg",
    width: 2894,
    height: 3880,
    alt: "Yukiumi House Kamikawa Bathroom",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0020.jpg",
    width: 4160,
    height: 3120,
    alt: "Yukiumi House Kamikawa Bathroom",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0021.jpg",
    width: 3120,
    height: 4160,
    alt: "Yukiumi House Kamikawa Stairs",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0022.jpg",
    width: 4160,
    height: 3120,
    alt: "Yukiumi House Kamikawa Living Room",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0024.jpg",
    width: 4160,
    height: 3120,
    alt: "Yukiumi House Kamikawa Kitchen",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0025.jpg",
    width: 2957,
    height: 2928,
    alt: "Yukiumi House Kamikawa Kitchen",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0026.jpg",
    width: 4160,
    height: 3120,
    alt: "Yukiumi House Kamikawa Living Room",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0027.jpg",
    width: 3120,
    height: 4160,
    alt: "Yukiumi House Kamikawa Hall",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0028.jpg",
    width: 4160,
    height: 3120,
    alt: "Yukiumi House Kamikawa Kitchen",
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0034.jpg",
    width: 3120,
    height: 4160,
    alt: "Yukiumi House Kamikawa Toilet",
  },
  {
    src: "/images/yukihouse_kamikawa/PXL_20240130_024019134.jpg",
    width: 2268,
    height: 4032,
    alt: "Yukiumi House Kamikawa Room",
  },
];

const exteriorPhotos: Photo[] = [
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0035.jpg",
    width: 4160,
    height: 3120,
    alt: "Yukiumi House Kamikawa Exterior",
  },
  {
    src: "/images/yukihouse_kamikawa/img_1295.jpg",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Food",
  },
  {
    src: "/images/yukihouse_kamikawa/tomato.jpg",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Garden",
  },
  {
    src: "/images/yukihouse_kamikawa/garden.jpg",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Garden",
  },
  {
    src: "/images/yukihouse_kamikawa/img_0995.jpg",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Food",
  },
  {
    src: "/images/yukihouse_kamikawa/garden2.jpg",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Garden",
  },
  {
    src: "/images/yukihouse_kamikawa/veggies.jpg",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Food",
  },
  {
    src: "/images/yukihouse_kamikawa/garden3.jpg",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Garden",
  },
];

const KamikawaContent: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">
        Yukiumi House Kamikawa
      </h1>
      <h3 className="text-center mt-8 text-lg w-[90%] md:w-[80%] 2xl:w-[65%] mx-auto">
        In the center of the little village of Kamikawa in the deep heart of
        Hokkaido. Here is where our project originally was born. The Lodge is 7
        minutes walking from the train station of this remote town inside of the
        natural environment of Hokkaido. In Kamikawa town there are few cafes to
        visit, one supermarket with the most essential and a couple of
        convenient stores. The place itself is well known to have one of the
        best accés to different points of Daisetsusan National Park like
        Sounkyo, Kogen onsens and Aizankei would be the most popular ones. Our
        lodge offer the possibility to access one of the most remote areas of
        Hokkaido with the tranquility and recommendations we got for you all
        year round.
      </h3>
      <div className="my-8 w-[90%] md:w-[80%] 2xl:w-[65%] mx-auto">
        <iframe
          width="600"
          height="500"
          className="border-0 w-full"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.2192431745266!2d142.77352677679087!3d43.851284271093384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0d23ee3f77c6f5%3A0xe5e168ce4b3daf99!2sYukiumi%20House!5e0!3m2!1sca!2ses!4v1722187708128!5m2!1sca!2ses"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-2xl font-bold text-center mt-16">House Interior</h2>
      <div className="my-8 w-[90%] md:w-[80%] 2xl:w-[65%] mx-auto">
        <Modal>
          <ModalTrigger className="p-0">
            <PhotoAlbum
              photos={interiorPhotos}
              handlePhotoClick={(idx: number) => setSelectedPhotoIndex(idx)}
            />
          </ModalTrigger>
          <ModalBody className="">
            <ImageCarousel
              images={interiorPhotos}
              selectedIndex={selectedPhotoIndex || 0}
            />
          </ModalBody>
        </Modal>
      </div>
      <h2 className="text-2xl font-bold text-center mt-16">
        House Exterior and Food
      </h2>
      <h3 className="text-center mt-8 text-lg w-[90%] md:w-[80%] 2xl:w-[65%] mx-auto">
        We are offering the service of breakfast and dinner. We have previous
        experience working as chefs in restaurants back in the time. We do a
        fusion of Japanse cuisine and overseas food. This will turn out to be
        such a nice experience and pleasant time, as you will be eating all
        local products with much love and experience. During summer and autumn
        time we would be having fresh products from our own vegetable garden.
        Meals need to be ordered with some time in advance to have time to
        prepare it.
      </h3>
      <div className="my-8 w-[90%] md:w-[80%] 2xl:w-[65%] mx-auto">
        <Modal>
          <ModalTrigger className="p-0">
            <PhotoAlbum
              photos={exteriorPhotos}
              handlePhotoClick={(idx: number) => setSelectedPhotoIndex(idx)}
            />
          </ModalTrigger>
          <ModalBody className="">
            <ImageCarousel
              images={exteriorPhotos}
              selectedIndex={selectedPhotoIndex || 0}
            />
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default KamikawaContent;
