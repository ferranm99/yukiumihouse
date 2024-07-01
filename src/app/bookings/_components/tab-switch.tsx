"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import KamikawaTour from "./kamikawa-tour";
import FuranoTour from "./furano-tour";
import DayTours from "./day-tours";
import SurfTour from "./surf-tour";

const tabs = [
  {
    title: "Kamikawa: Hokkaido north side",
    image:
      "https://yukiumihouse.files.wordpress.com/2023/04/img_4184.jpg?w=1024",
    content: <KamikawaTour />,
  },
  {
    title: "Furano: Sea of Snow",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg?w=1024",
    content: <FuranoTour />,
  },
  {
    title: "Day tours to all central and North Hokkaido locations",
    image:
      "https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg?w=1024",
    content: <DayTours />,
  },
  {
    title: "Surf tour: Hokkaido pacífic and Okhotsk sea",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/dji_0797.jpg?w=1024",
    content: <SurfTour />,
  },
];

export default function TabSwitch() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-[90%] h-full flex flex-col gap-4 overflow-auto">
      <nav className="h-72">
        <ul className="flex w-full h-full items-center gap-5">
          {tabs.map((item) => (
            <li
              key={item.title}
              className={`${
                item === selectedTab ? "bg-[#eee]" : ""
              } w-full h-full flex flex-col gap-4 rounded-xl bg-gray-200 cursor-pointer items-center min-w-0 relative select-none`}
              onClick={() => setSelectedTab(item)}
            >
              <div className="h-[70%] w-full relative">
                <Image
                  className="rounded-t-xl"
                  src={item.image}
                  alt={item.title}
                  fill
                />
              </div>
              <div className="w-full h-[20%] flex justify-center items-center text-lg font-bold text-center">
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
      <main className="flex justify-center w-full h-full items-center select-none bg-gray-50 dark:bg-slate-600 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            className="relative w-full h-full" /* px-4 py-4 xl:px-24 xl:py-6" */
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab.content}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
