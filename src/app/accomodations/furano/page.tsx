"use client";
import React, { useState } from "react";
import PhotoAlbum from "../_components/photo-album";
import ImageCarousel from "../_components/image-carousel";
import { Modal, ModalBody, ModalTrigger } from "@/components/ui/animated-modal";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

const photos: Photo[] = [
  /*  {
    src: "/images/yukihouse_furano/IMG_4397.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4398.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4399.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4401.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4402.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4403.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4404.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4405.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4407.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4414.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4415.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4424.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4426.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Living Room",
  },
  {
    src: "/images/yukihouse_furano/IMG_4432.HEIC",
    width: 512,
    height: 512,
    alt: "Yukiumi House Furano Terrace",
  }, */
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
    alt: "Yukiumi House Furano Room View",
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
    alt: "Yukiumi House Furano  Room",
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
];

const Page = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">
        Yukiumi House Furano
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
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv7CeWgBRc18R_rz_VYnXZ1E&key=${process.env.GOOGLE_EMBED_MAP_API_KEY}`}
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

export default Page;
