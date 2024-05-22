"use client";

import React from "react";
import Image from "next/image";

import { HoverEffect } from "@/components/ui/card-hover-effect";

const projects = [
  {
    title: "5 days Daisetsu san traverse",
    image:
      "https://yukiumihouse.files.wordpress.com/2023/04/img_4184.jpg?w=1024",
    description:
      "We decided to join our Japanese friends in the traverse south to north of the Daisetsuzan National Park! We did pack our big backpacks with food, fuel, and sleeping gear to be able to be self-sufficient for at least 6 days out in the mountains. Backpacks were heavy!! But our stoke was higher.",
    href: "/2023/04/06/315/index.html",
  },
  {
    title: "Ishimuro hut mission",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg?w=1024",
    description:
      "Early season (7-9/11/22) conditions where looking on point up high in Daisetzuzan Naional Park. Super hungry for drawing the first turns we set up ourselves and head to Ishimuro mountain hut…. Kamui no mintara blessed us!!",
    href: "/2022/12/01/mayan-history/index.html",
  },
  {
    title: "Behind the mountains: Point of view",
    image:
      "https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg?w=1024",
    description:
      "This short film is an introduction of Yukiumi House, here in north Daisetsuzan, Hokkaido. We have been working hard for the last two years to put together many things. We built up a Hostel, we explored Daisetsuzan on all its beauty and in the meanwhile we got to eat many Ramens. We are hoping you all can come to visit us so we can keep exploring and sharing with you. ",
    href: "/2022/12/01/nunnery-quadrangle/index.html",
  },
  {
    title: "Trail running Numanodaira",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/dji_0797.jpg?w=1024",
    description:
      "Hike from Aizankei onsen, filmed in Numanodaira, with snowed Asahidake at the background.",
    href: "/2022/12/01/pyramid-of-the-magician/index.html",
  },
];

export default function Landing() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col lg:flex-row items-start sm:items-center justify-between xl:pl-[6rem] xl:pr-[6rem] pb-20 bg-slate-900 h-screen">
        <div className="flex flex-col gap-4 p-4 w-full lg:w-[30%] text-white">
          <h1 className="font-bold text-xl">KAMIKAWA, DAISETSU-SAN</h1>
          <p>
            Yukimi House is the concept of the Sea of Snow, what Hokkaido
            becomes in winter time. We are a small Ski lodge in the heart of
            Daisetsuzan National Park, ready to host and guide you around one of
            the most magical places you have ever skied. We do backcountry
            guides in the Furano-Asahidake valley, Kurodake valley and north
            Hokkaido. We are experts in main and popular areas of central
            Hokkaido, also knowing many hidden gems with untouched powder snow.
            We love to keep things simple, humble and easy, providing one unique
            experience full of feelings of joy and nature power.
          </p>
        </div>
        <div className="flex w-full lg:w-[70%] h-full items-center justify-center">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-14-04h41m48s319-8.jpg?w=1024"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="max-w-4xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </section>
    </div>
  );
}
