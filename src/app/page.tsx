"use client";

import React from "react";
import Link from "next/link";
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
        <h1 className="text-4xl font-bold text-black pb-8">
          What Our Guests Say About Yukiumi House?
        </h1>
        <InfiniteMovingCards
          className="pb-8"
          items={reviews}
          direction="right"
          speed="normal"
        />
        <Link href="/reviews" className="self-end pr-20">
          Read All The Reviews
        </Link>
      </section>
    </div>
  );
}

const reviews = [
  {
    relativePublishTimeDescription: "a week ago",
    rating: 5,
    text: "Absolutely stunning stay at the house! From the moment we arrived, we were blown away by the beauty of the surroundings and the impeccable attention to detail in every aspect of the property. The accommodations were luxurious and comfortable, providing the perfect setting for a relaxing getaway. The amenities were top-notch, and the hospitality of the hosts exceeded our expectations. Overall, an unforgettable experience that we can't wait to repeat!",

    name: "angel tribaldos",
    uri: "https://www.google.com/maps/contrib/111268539421912082651/reviews",
    photoUri:
      "https://lh3.googleusercontent.com/a/ACg8ocJ3Ok4hzybod6FyMsEy-pfiR2YsVTAfaQjabUFoZEhf5J9xzDg=s128-c0x00000000-cc-rp-mo",
    publishTime: "2024-05-04T22:37:27Z",
  },
  {
    relativePublishTimeDescription: "2 months ago",
    rating: 5,
    text: "We spent an amazing week in Yukiumi house with Gerard as a guide. House is cozy and food prepared (breakfast and dinner) is delicious and very filling. Every day he found us a new spot for skiing with great conditions, always ending with an onsen as reward 😍. Thanks a lot Yukiumi team!",

    name: "Alan Goron",
    uri: "https://www.google.com/maps/contrib/116237468294531301162/reviews",
    photoUri:
      "https://lh3.googleusercontent.com/a/ACg8ocJq6vDAUIyplrenGvTUQ4nqLONb3_E_63ttohRqzAXdeWZaCA=s128-c0x00000000-cc-rp-mo-ba3",

    publishTime: "2024-03-02T09:43:30Z",
  },
  {
    relativePublishTimeDescription: "2 months ago",
    rating: 5,
    text: "We spent an amazing week in Yukiumi house with Gerard as a guide. House is cozy and food prepared (breakfast and dinner) is delicious and very filling. Every day he found us a new spot for skiing with great conditions, always ending with an onsen as reward 😍. Thanks a lot Yukiumi team!",
    name: "Alan Goron",
    uri: "https://www.google.com/maps/contrib/116237468294531301162/reviews",
    photoUri:
      "https://lh3.googleusercontent.com/a/ACg8ocJq6vDAUIyplrenGvTUQ4nqLONb3_E_63ttohRqzAXdeWZaCA=s128-c0x00000000-cc-rp-mo-ba3",

    publishTime: "2024-03-02T09:43:30Z",
  },
  {
    relativePublishTimeDescription: "2 months ago",
    rating: 5,
    text: "We spent an amazing week in Yukiumi house with Gerard as a guide. House is cozy and food prepared (breakfast and dinner) is delicious and very filling. Every day he found us a new spot for skiing with great conditions, always ending with an onsen as reward 😍. Thanks a lot Yukiumi team!",
    name: "Alan Goron",
    uri: "https://www.google.com/maps/contrib/116237468294531301162/reviews",
    photoUri:
      "https://lh3.googleusercontent.com/a/ACg8ocJq6vDAUIyplrenGvTUQ4nqLONb3_E_63ttohRqzAXdeWZaCA=s128-c0x00000000-cc-rp-mo-ba3",

    publishTime: "2024-03-02T09:43:30Z",
  },
  {
    relativePublishTimeDescription: "2 months ago",
    rating: 5,
    text: "We spent an amazing week in Yukiumi house with Gerard as a guide. House is cozy and food prepared (breakfast and dinner) is delicious and very filling. Every day he found us a new spot for skiing with great conditions, always ending with an onsen as reward 😍. Thanks a lot Yukiumi team!",
    name: "Alan Goron",
    uri: "https://www.google.com/maps/contrib/116237468294531301162/reviews",
    photoUri:
      "https://lh3.googleusercontent.com/a/ACg8ocJq6vDAUIyplrenGvTUQ4nqLONb3_E_63ttohRqzAXdeWZaCA=s128-c0x00000000-cc-rp-mo-ba3",

    publishTime: "2024-03-02T09:43:30Z",
  },
];

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
