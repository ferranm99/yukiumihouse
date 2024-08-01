"use client";

import React from "react";
import Link from "next/link";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
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
      "Get to  discover the endless untrack powder fields of Kurodake and central Hokkaido. Visit the deepest of depth.",
    href: "bookings/kamikawa",
  },
  {
    title: "Furano: Sea of Snow",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg?w=1024",
    description:
      "Come meet the champany snow Furano valey has to offer.All that combined with all the comfort and commodities  resort town has to offer.",
    href: "bookings/furano",
  },
  {
    title: "Custom Day Tours",
    image:
      "https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg?w=1024",
    description:
      "Explore central and North Hokkaido your way. Choose when and where you want to go and we take care of the rest!",
    href: "bookings/day-tours",
  },
  /*   {
    title: "Surf tour: Hokkaido pacífic and Okhotsk sea",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/dji_0797.jpg?w=1024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    href: "/2022/12/01/pyramid-of-the-magician/index.html",
  }, */
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
      <section id="tours" className="flex flex-col items-center w-full px-8">
        <h1 className="text-4xl font-bold text-black">Our Tours</h1>
        <HoverEffect items={tours} />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-center mt-2">
          Our Accomodations
        </h1>
        <h3 className="text-center mt-8 text-lg w-[95%] md:w-[80%] xl:w-[70%] mx-auto">
          Yukiumi has two lodges, one in Furano town and one in Kamikawa
          village. Both places are at the bed of the biggest National park in
          Japan, Daisetsusan National Park. Both of the lodges are cataloged as
          Japanese Ryokan, being just simply austere cozy and comfortable
          japanese houses opened for our guests. During winter we operate our
          Backcountry tours in these two locations, and in summer the guest
          houses are open to receive all the guests and travelers that come
          through.
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto h-fit my-16">
          <Link
            className="h-fit relative  flex items-center justify-center cursor-pointer"
            href="/accomodations/kamikawa"
          >
            <DirectionAwareHover
              imageUrl={
                "https://yukiumihouse.files.wordpress.com/2023/04/psx_20230225_053505.jpg"
              }
            >
              <p className="font-bold text-xl">Yukiumi House Kamikawa</p>
              <p className="font-semibold text-sm">¥12.000 / night</p>
            </DirectionAwareHover>
          </Link>
          <Link
            className="h-fit relative  flex items-center justify-center cursor-pointer"
            href="/accomodations/furano"
          >
            <DirectionAwareHover
              imageUrl={"/images/landing/photo_2024-08-01_13-27-14.jpg"}
            >
              <p className="font-bold text-xl">Yukiumi House Furano</p>
              <p className="font-semibold text-sm">¥12.000 / night</p>
            </DirectionAwareHover>
          </Link>
        </div>
      </section>
      <section
        id="testimonials"
        className="pt-4 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
      >
        <h1 className="text-4xl font-bold text-black pb-8">
          What Our Guests Say About Yukiumi House?
        </h1>
        <InfiniteMovingCards
          className="pb-8 pt-4"
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
      <section id="blogs" className="py-8 flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-black pb-4 ">Blogs</h1>
        <BlogSection />
        <Link
          href="/blog"
          className="self-end mr-20 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
        >
          See all Blogs {">>"}
        </Link>
      </section>
    </div>
  );
}
