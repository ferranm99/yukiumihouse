"use client";
import React, { useState } from "react";
import PhotoAlbum from "./photo-album";
import ImageCarousel from "./image-carousel";
import {
  Modal,
  ModalBody,
  ModalTrigger,
} from "@components/ui/animated-photos-modal";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

const photos: Photo[] = [
  {
    src: "/images/yukihouse_furano/IMG_20240801_195409_246.jpg",
    width: 5952,
    height: 3968,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20231121_044756527.jpg",
    width: 4080,
    height: 3072,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240228_065718007.jpg",
    width: 2268,
    height: 4032,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240228_065740961.jpg",
    width: 4032,
    height: 2268,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240228_085203058.jpg",
    width: 4032,
    height: 2268,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240228_085225584.jpg",
    width: 4032,
    height: 2268,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240228_085516543.jpg",
    width: 4032,
    height: 2268,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240628_021348623.jpg",
    width: 4080,
    height: 3072,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240628_021441364.jpg",
    width: 4080,
    height: 3072,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240628_021646584.jpg",
    width: 4080,
    height: 3072,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240628_021729175.MP.jpg",
    width: 4080,
    height: 3072,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/PXL_20240628_023217839.jpg",
    width: 4080,
    height: 3072,
    alt: "Yukiumi House Furano Room",
  },
];

const FuranoContent: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">
        Yukiumi House Furano
      </h1>
      <h3 className="text-center mt-8 text-lg w-[90%] md:w-[80%] 2xl:w-[65%] mx-auto">
        Located 10min out of Furano city center in a rural neighborhood where
        peace, tranquility and nature can be felt. With good access to the ski
        slopes, big supermarkets and good restaurants make for a perfect combo
        of disconnection while we still have the best services a big town has to
        offer. Not to mention in front of our lodge there is this beautiful
        ancient Japanese temple, where we can delight its magic culture.
      </h3>
      <div className="my-8 w-[90%] md:w-[80%] 2xl:w-[65%] mx-auto">
        <iframe
          width="600"
          height="500"
          className="border-0 w-full"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.5335192667!2d142.3937433767666!3d43.28214767112204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f7351005a9eb0bf%3A0x5167d78955ffbcfe!2sYukiumi%20Furano!5e0!3m2!1sca!2ses!4v1722187841805!5m2!1sca!2ses"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-2xl font-bold text-center mt-16">House Photos</h2>
      <div className="my-8 w-[90%] md:w-[80%] 2xl:w-[65%] mx-auto">
        <Modal>
          <ModalTrigger className="p-0">
            <PhotoAlbum
              photos={photos}
              handlePhotoClick={(idx: number) => setSelectedPhotoIndex(idx)}
            />
          </ModalTrigger>
          <ModalBody className="">
            <ImageCarousel
              images={photos}
              selectedIndex={selectedPhotoIndex || 0}
            />
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default FuranoContent;