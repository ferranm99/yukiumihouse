"use client";

import React from "react";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HeroLayoutGrid } from "@app/_components/hero-layout-grid";
import { HeroInfo } from "@app/_components/hero-info";
import BlogSection from "@app/_components/blog-section";
import { HoverEffect } from "@/components/ui/card-hover-effect";

  const tours = [
    {
      title: "Kamikawa: Hokkaido north side",
      image:
        "https://yukiumihouse.files.wordpress.com/2023/04/img_4184.jpg?w=1024",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      href: "/2023/04/06/315/index.html",
    },
    {
      title: "Furano: Sea of Snow",
      image:
        "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg?w=1024",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      href: "/2022/12/01/mayan-history/index.html",
    },
    {
      title: "Day tours to all central and North Hokkaido locations",
      image:
        "https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg?w=1024",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      href: "/2022/12/01/nunnery-quadrangle/index.html",
    },
    {
      title: "Surf tour: Hokkaido pacífic and Okhotsk sea",
      image:
        "https://yukiumihouse.files.wordpress.com/2022/12/dji_0797.jpg?w=1024",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
      <section id="about us" className="bg-slate-200 flex justify-center items-center h-[50rem]">
        <div className="bg-white w-[80%] h-[80%] flex items-center justify-center text-xl">
          Video goes here
        </div>
      </section>
      <section id="tours" className="flex flex-col items-center w-full px-8 pt-12">
      <h1 className="text-4xl font-bold text-black">
          Our Tours
        </h1>
        <HoverEffect className="max-w-4xl" items={tours} />
      </section>
      <section
        id="testimonials"
        className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
      >
        <h1 className="text-4xl font-bold text-black pb-8">
          What Our Guests Say About Yukiumi House?
        </h1>
        <InfiniteMovingCards
          className="pb-8"
          items={reviews}
          direction="right"
          speed="normal"
        />
        <Link
          href="/reviews"
          className="self-end mr-20 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Read All The Reviews {">>"}
        </Link>
      </section>
      <section id="blogs" className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-black">
          Blogs
        </h1>
        <BlogSection />
        <Link
          href="/reviews"
          className="self-end mr-20 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          See all Blogs {">>"}
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
