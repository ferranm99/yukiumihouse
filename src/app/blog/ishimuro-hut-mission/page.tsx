import React from "react";
import type { Metadata } from "next";
import CarouselComponent from "../_components/carroussel";

export const metadata: Metadata = {
  title: "Ishimuro hut mission | Blog",
  description:
    "Early season conditions were looking on point up high in Daisetzuzan National Park. Hungry for drawing the first turns, we set up ourselves and head to Ishimuro mountain hut.",
  keywords: [
    "Ishimuro hut mission",
    "Daisetzuzan National Park",
    "skiing",
    "Japan",
    "adventure",
  ],
  authors: [{ name: "ferranm99" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  metadataBase: new URL("https://yukiumihouse.com"),
  alternates: {
    canonical: "/blog/ishimuro-hut-mission",
  },
  openGraph: {
    title: "Ishimuro hut mission | Blog",
    description:
      "Early season conditions were looking on point up high in Daisetzuzan National Park. Hungry for drawing the first turns, we set up ourselves and head to Ishimuro mountain hut.",
    url: "https://yukiumihouse.com/blog/ishimuro-hut-mission",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/blogs/blog-5/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg",
        width: 1200,
        height: 630,
        alt: "Ishimuro hut mission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishimuro hut mission | Blog",
    description:
      "Early season conditions were looking on point up high in Daisetzuzan National Park. Hungry for drawing the first turns, we set up ourselves and head to Ishimuro mountain hut.",
    creator: "@ferranm99",
    images: ["/images/blogs/blog-5/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg"],
  },
  // Optional: If you use Google Search Console
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

const images = [
  "/images/blogs/blog-5/dsc_4408-1.jpg",
  "/images/blogs/blog-5/dsc_4466-2.jpg",
  "/images/blogs/blog-5/dsc_4472.jpg",
  "/images/blogs/blog-5/vlcsnap-2022-11-14-04h41m48s319-9.jpg",
  "/images/blogs/blog-5/dsc_4396.jpg",
  "/images/blogs/blog-5/dsc_4401.jpg",
];

export default function IshimuroHutMission() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Ishimuro hut mission</h1>
      
      <img
        src="/images/blogs/blog-5/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg"
        alt="Ishimuro hut mission"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Early season (7-9/11/22) conditions where looking on point up high in Daisetzuzan Naional Park. Super hungry for drawing the first turns we set up ourselves and head to Ishimuro mountain hut…. Kamui no mintara blessed us!!</p>
      </div>

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Arigato gozaimasu:)</p>
      </div>

      <iframe
        src="https://www.youtube.com/embed/Xbs0vvkHWVs?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=es&autohide=2&wmode=transparent"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="mb-4 w-full h-72 sm:h-96 2xl:h-[34rem] xl:h-[34rem]"
      ></iframe>

      <div className="max-w-4xl mx-auto p-4 my-10">
        <CarouselComponent images={images} />
      </div>
    </div>
  );
}