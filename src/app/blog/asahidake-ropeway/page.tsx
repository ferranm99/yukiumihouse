// app/blog/asahidake-ropeway/page.tsx
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asahidake Ropeway, deepest snow of Hokkaido? | Blog",
  description:
    "Explore the Asahidake Ropeway, gateway to the deepest snow and incredible volcanic landscapes in Hokkaido, Japan. A must for ski lovers and powder hunters.",
  keywords: [
    "Asahidake",
    "Hokkaido",
    "skiing",
    "Japan",
    "powder snow",
    "volcano",
    "Asahidake Ropeway",
    "deep snow",
  ],
  authors: [{ name: "ferranm99" }],
  openGraph: {
    title: "Asahidake Ropeway, deepest snow of Hokkaido? | Blog",
    description:
      "Explore the Asahidake Ropeway, gateway to the deepest snow and incredible volcanic landscapes in Hokkaido, Japan.",
    url: "https://yukiumihouse.com/blog/asahidake-ropeway",
    type: "article",
    images: [
      {
        url: "/images/blogs/blog-0/PXL_20240104_063155802.jpg",
        width: 1200,
        height: 630,
        alt: "Asahidake Ropeway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asahidake Ropeway, deepest snow of Hokkaido? | Blog",
    description:
      "Discover Asahidake, Hokkaido's highest peak, and ski its legendary deep powder snow from the ropeway base.",
    images: ["/images/blogs/blog-0/PXL_20240104_063155802.jpg"],
    creator: "@ferranm99",
  },
  metadataBase: new URL("https://yukiumihouse.com"),
  alternates: {
    canonical: "/blog/asahidake-ropeway",
  },
};

export default function AsahidakeRopeway() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Asahidake Ropeway, deepest snow of Hokkaido?
      </h1>

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          Asahidake is the highest peak of Hokkaido with 2290m, and it's an active volcano. At its foot lies the Asahidake Ropeway, becoming one of the best highlights of the Hokkaido powder hunters.
        </p>
      </div>

      <img
        src="/images/blogs/blog-0/PXL_20240104_063155802.jpg"
        alt="Asahidake Ropeway"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          It's a Ropeway that saves you 650m vertical. And accesses you to a plateau where you can contemplate the beauty of the volcano with its smoky fumaroles, making you feel small and on a living earth. Either climb to the top or loop the Ropeway in search of the deepest of deep snows—an unforgettable day out! The fact that the base of the ropeway lays on a 1000m elevation, which is very high for Hokkaido, gives it extremely unique snow conditions.
        </p>
      </div>

      <img
        src="/images/blogs/blog-0/IMG-20240104-WA0015.jpg"
        alt="Snowy landscape"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          Ski terrain under the Ropeway is quite easy to guess on a sunny day, but those deep stormy days when the snow is fresh at its prime, the terrain can become more difficult to navigate and dangerous. Going for the summit—even though it may look reasonable—can become more difficult than expected. Its freezing temperatures, high-speed wind, and very unpredictable weather make it a no-mistake mission. That said, if you are able to enjoy the sunset from the crater, it may be the best ski day of your life. All in all, we highly recommend hiring a well-educated and terrain-knowledgeable ski guide to make the experience a pleasure at its fullest.
        </p>
      </div>

      <img
        src="/images/blogs/blog-0/IMG_20240106_230353_471.jpg"
        alt="Sunset at the crater"
        className="mb-4 w-full h-auto"
      />
    </div>
  );
}
