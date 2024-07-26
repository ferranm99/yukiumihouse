"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import KamikawaTour from "./kamikawa-tour";
import FuranoTour from "./furano-tour";
import DayTours from "./day-tours";
import BookCustomTourButton from "./book-custom-tour";
// import SurfTour from "./surf-tour";
import BookTourButton from "./book-tour-button";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
}

const tabs = [
  {
    title: "Kamikawa: Hokkaido north side",
    image:
      "https://yukiumihouse.files.wordpress.com/2023/04/img_4184.jpg?w=1024",
    content: <KamikawaTour />,
    tour: Tours.Kamikawa,
    url: "/bookings/kamikawa",
  },
  {
    title: "Furano: Sea of Snow",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg?w=1024",
    content: <FuranoTour />,
    tour: Tours.Furano,
    url: "/bookings/furano",
  },
  {
    title: "Custom Day Tour",
    image:
      "https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg?w=1024",
    content: <DayTours />,
    tour: Tours.DayTours,
    url: "/bookings/day-tours",
  },
  /* {
    title: "Surf tour: Hokkaido pacífic and Okhotsk sea",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/dji_0797.jpg?w=1024",
    content: <SurfTour />,
    tour: Tours.SurfTour,
  }, */
];

const tourNames = {
  kamikawa: Tours.Kamikawa,
  furano: Tours.Furano,
  "day-tours": Tours.DayTours,
};

interface TabSwitchProps {
  tour: string;
}

export default function TabSwitch({ tour }: TabSwitchProps) {
  if (!(tour in tourNames)) {
    // Handle the error, e.g., by throwing an exception or returning early
    throw new Error("Invalid tour name");
  }
  const [selectedTab, setSelectedTab] = useState(
    tabs[tourNames[tour as keyof typeof tourNames]]
  );

  // useEffect(() => {
  //   const tourEnum = Tours[tour as keyof typeof Tours];
  //   const foundTab = tabs.find((tab) => tab.tour === tourEnum);
  //   if (foundTab) {
  //     setSelectedTab(foundTab);
  //   }
  // }, [tour]);

  useEffect(() => {
    window.history.pushState({}, "", selectedTab.url);
  }, [selectedTab]);

  return (
    <div className="w-[90%] h-full flex flex-col gap-4 overflow-auto">
      <nav className="h-80 md:h-48 xl:h-72 2xl:w-[90%] mx-auto">
        <ul className="grid grid-cols-3 w-full h-full items-center gap-2 xl:gap-8">
          {tabs.map((item) => (
            <li
              key={item.title}
              className={`${
                item === selectedTab ? "bg-[#eee]" : ""
              } w-full h-full flex flex-col rounded-lg bg-gray-200 cursor-pointer items-center min-w-0 relative select-none`}
              onClick={() => setSelectedTab(item)}
            >
              <div className="h-[72%] w-full relative">
                <Image
                  className="rounded-t-lg"
                  src={item.image}
                  alt={item.title}
                  fill
                />
              </div>
              <div className="w-full h-[28%] px-4 flex justify-center items-center text-xs md:text-sm xl:text-base 2xl:text-lg font-bold text-center">
                {item.title}
              </div>
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-orange-400"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex justify-center w-full h-full items-center select-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            className="relative w-full h-full" /* px-4 py-4 xl:px-24 xl:py-6" */
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full flex flex-col xl:gap-12 gap-[4.5rem] pb-10">
              {selectedTab.content}
              {tour === "day-tours" ? (
                <BookCustomTourButton />
              ) : (
                <BookTourButton tour={selectedTab.tour} />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
