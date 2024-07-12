"use client";

import React from "react";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HeroLayoutGrid } from "@app/_components/hero-layout-grid";
import { HeroInfo } from "@app/_components/hero-info";
import BlogSection from "@app/_components/blog-section";
import { HoverEffect } from "@/components/ui/card-hover-effect";

import { useQuery } from "react-query";

type Review = [
  string, // name
  string, // date
  number, // rating
  number | null, // serviceRating
  number | null, // roomRating
  number | null, // locationRating
  string | null // reviewText
];

const fetchReviews = async (): Promise<Review[]> => {
  const res = await fetch("/api/reviews");
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  return res.json();
};

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
  const { data, error, isLoading } = useQuery<Review[], Error>(
    "reviews",
    fetchReviews
  );

  const reviews = data || [];
  const numOfReviews = reviews.length;
  const ratingAvg =
    Math.round(
      (reviews.reduce((acc: number, review: Review) => acc + review[2], 0) /
        reviews.length) *
        100
    ) / 100;

  return (
    <div className="flex flex-col">
      <section className="flex flex-col md:flex-row h-[85rem] xs:h-[60rem] md:h-[90vh] p-6 md:p-8 gap-4">
        <div className="w-full md:w-[45%] flex items-start md:items-center mt-4 md:mt-0">
          <HeroInfo
            rating={!isLoading && !error ? ratingAvg : 4.8}
            numOfReviews={!isLoading && !error ? numOfReviews : 25}
          />
        </div>
        <div className="w-full md:w-[55%] h-full">
          <HeroLayoutGrid />
        </div>
      </section>
      <section
        id="about us"
        className="bg-slate-200 flex justify-center items-center h-[50rem]"
      >
        <div className="bg-white w-[80%] h-[80%] flex items-center justify-center text-xl">
          Video goes here
        </div>
      </section>
      <section
        id="tours"
        className="flex flex-col items-center w-full px-8 pt-12"
      >
        <h1 className="text-4xl font-bold text-black">Our Tours</h1>
        <HoverEffect className="max-w-4xl" items={tours} />
      </section>
      <section
        id="testimonials"
        className="pb-8 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
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
          className="self-end mr-10 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
        >
          Read All The Reviews {">>"}
        </Link>
      </section>
      <section id="blogs" className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-black">Blogs</h1>
        <BlogSection />
        <Link
          href="/reviews"
          className="self-end mr-20 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
        >
          See all Blogs {">>"}
        </Link>
      </section>
    </div>
  );
}
