import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function HeroLayoutGrid() {
  return (
    <div className="h-full w-full relative">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-3xl xl:text-4xl text-white">Yukiumi House</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This is where you will be staying! A place where you can relax and
        unwind, and enjoy the beauty of nature.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-3xl xl:text-4xl text-white ">Skiing</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Yukiumi we are snow lovers! We know the best spots for the greatests
        descends that will pump your adrenaline to the max.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-3xl xl:text-4xl text-white">Snowboarding</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Yukiumi we are snow lovers! We know the best spots for the greatests
        descends that will pump your adrenaline to the max.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-3xl xl:text-4xl text-white">Trail Running</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Trail running is a great way to stay fit and enjoy the outdoors. At
        Yukiumi House we have a variety of trails that are perfect for runners
        of all levels.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail:
      "https://yukiumihouse.files.wordpress.com/2023/04/psx_20230225_053505.jpg?w=2000&h=",
    fitX: 0,
    fitY: 25,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-2",
    thumbnail: "/images/JMT_20230226_3400-2.jpg",
    fitX: 25,
    fitY: 10,
  },

  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-2",
    thumbnail: "/images/JMT_20230227_3635.jpg",
    fitX: 75,
    fitY: 10,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail:
      "https://yukiumihouse.files.wordpress.com/2023/04/copia-de-dsc05392-edited-4.jpg",
    fitX: 25,
    fitY: 0,
  },
];
