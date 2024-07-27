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
    src: "https://yukiumihouse.files.wordpress.com/2023/04/img_1295.jpg?w=1024",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Food",
  },
  {
    src: "https://yukiumihouse.files.wordpress.com/2023/04/3ca62ad6-e5f4-41a0-920e-896274ef7aeb-11652-000006f1bb25cb8c.jpg?w=1024",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Garden",
  },
  {
    src: "https://yukiumihouse.files.wordpress.com/2023/04/01d2e1cf-0ffe-45b9-bd34-a0f4ef1e2c6b-11652-000006f1393297a1.jpg?w=1024",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Garden",
  },
  {
    src: "https://yukiumihouse.files.wordpress.com/2023/04/img_0995.jpg?w=1024",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Food",
  },
  {
    src: "https://yukiumihouse.files.wordpress.com/2023/04/879741ce-7375-4d33-8e0a-ac8033155760-11652-000006f1844ba7ce.jpg?w=1024",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Garden",
  },
  {
    src: "https://yukiumihouse.files.wordpress.com/2023/04/60aed1b7-f377-4b46-abc4-68aac5973cd1-11652-000006f1b0992cea.jpg?w=1024",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Food",
  },
  {
    src: "https://yukiumihouse.files.wordpress.com/2023/04/6f045cf2-e9c8-4e1e-9e37-4e1080e784e0-11652-000006f0c248a4f2.jpg?w=1024",
    width: 1024,
    height: 682,
    alt: "Yukiumi House Kamikawa Garden",
  },
];

const Page = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  /*   const [calculatedWidth, setCalculatedWidth] = useState(0);
  const [calculatedHeight, setCalculatedHeight] = useState(0);

  useEffect(() => {
    if (selectedPhotoIndex) {
      const handleResize = () => {
        const aspectRatio =
          photos[selectedPhotoIndex].width / photos[selectedPhotoIndex].height;
        console.log(window.innerWidth);
        console.log(window.innerHeight);
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

      // Initial calculation
      handleResize();

      // Recalculate on window resize
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [selectedPhotoIndex]); */
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">
        Yukiumi House Kamikawa
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
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9cZ3P-4jDV8Rma89S85o4eU&key=${process.env.GOOGLE_EMBED_MAP_API_KEY}`}
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

export default Page;
