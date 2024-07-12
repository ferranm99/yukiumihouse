"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/star-rating";

interface HeroInfoProps {
  rating: number;
  numOfReviews: number;
}

export function HeroInfo({ rating, numOfReviews }: HeroInfoProps) {
  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-relaxed lg:leading-snug text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center max-auto">
          Yukiumi House
        </h1>
        <h2 className="text-lg font-normal text-gray-500 lg:text-2xl dark:text-gray-400">
          Located in the Heart of Daisetsuzan National Park it offers {""}
          <Highlight className="text-lg font-normal text-gray-500 lg:text-2xl dark:text-gray-400">
            Cozy Accommodations and Year-Round Adventures
          </Highlight>
        </h2>
        <div className="flex flex-col mt-8 mb-4 md:mt-16 lg:mb-14 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </Link>
          <Link
            href="/bookings"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Book now
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="flex gap-5 items-center text-lg">
          <div className="relative rounded-full w-28 h-28">
            <Image
              src="/logos/logo_circular.JPG"
              alt="Yukiumi House logo"
              fill
              className="rounded-full"
            />
          </div>
          <button
            className="flex flex-col cursor-pointer mb-2"
            onClick={() => {
              const testimonialsSection =
                document.getElementById("testimonials");
              testimonialsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="flex items-center gap-2">
              <StarRating rating={rating} />
              <div>{rating}</div>
            </div>
            <div className="flex">
              Rated Best Over&nbsp;
              <span className="font-bold">{numOfReviews}</span>
              &nbsp;Reviews
            </div>
          </button>
        </div>
      </motion.div>
    </HeroHighlight>
  );
}
