"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HeroLayoutGrid } from "@/components/hero-layout-grid";
import { HeroInfo } from "@/components/hero-info";

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
      <section className="flex flex-col md:flex-row h-[85rem] xs:h-[60rem] md:h-[90vh] p-6 md:p-8 gap-4">
        <div className="w-full md:w-[45%] flex items-start md:items-center mt-4 md:mt-0">
          <HeroInfo />
        </div>
        <div className="w-full md:w-[55%] h-full">
          <HeroLayoutGrid />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8">
        <HoverEffect items={projects} />
      </section>
      <section className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </section>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
