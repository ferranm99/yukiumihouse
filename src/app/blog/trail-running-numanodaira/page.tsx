import React from "react";
import type { Metadata } from "next";
import CarouselComponent from "../_components/carroussel";

export const metadata: Metadata = {
  title: "Trail running Numanodaira | Blog",
  description:
    "Hike from Aizankei onsen, filmed in Numanodaira, with snowed Asahidake in the background. 13/10/2022",
  keywords: [
    "Trail running",
    "Numanodaira",
    "Aizankei onsen",
    "Asahidake",
    "Hokkaido",
    "Japan",
    "Hiking",
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
    canonical: "/blog/trail-running-numanodaira",
  },
  openGraph: {
    title: "Trail running Numanodaira | Blog",
    description:
      "Hike from Aizankei onsen, filmed in Numanodaira, with snowed Asahidake in the background. 13/10/2022",
    url: "https://yukiumihouse.com/blog/trail-running-numanodaira",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://yukiumihouse.com/images/blogs/blog-7/dji_0786.jpg",
        width: 1200,
        height: 630,
        alt: "Trail running Numanodaira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trail running Numanodaira | Blog",
    description:
      "Hike from Aizankei onsen, filmed in Numanodaira, with snowed Asahidake in the background. 13/10/2022",
    creator: "@ferranm99",
    images: ["https://yukiumihouse.com/images/blogs/blog-7/dji_0786.jpg"],
  },
  // Optional: If you use Google Search Console
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

const images = [
  "/images/blogs/blog-7/dji_0786.jpg",
  "/images/blogs/blog-7/dji_0798.jpg",
  "/images/blogs/blog-7/dji_0805.jpg",
  "/images/blogs/blog-7/dji_0828-2.jpg",
];

export default function TrailRunningNumanodaira() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Trail running Numanodaira</h1>
      
      <img
        src="/images/tours/dji_0797.jpg"
        alt="Trail running Numanodaira"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Hike from Aizankei onsen, filmed in Numanodaira, with snowed Asahidake at the background. 13/10/2022</p>
      </div>

      <iframe
        src="https://www.youtube.com/embed/yiOGINmN35k?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=es&autohide=2&wmode=transparent"
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