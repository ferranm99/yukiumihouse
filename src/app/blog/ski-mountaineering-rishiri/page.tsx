import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ski mountaineering in Rishiri | Blog",
  description:
    "Experience the thrilling adventure of ski mountaineering in Rishiri, the lonely island with the pointing volcano rising 1721 m above the sea.",
  keywords: [
    "Rishiri",
    "ski mountaineering",
    "adventure",
    "skiing",
    "Japan",
    "volcano",
    "Rishiri Fuji",
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
    canonical: "/blog/ski-mountaineering-rishiri",
  },
  openGraph: {
    title: "Ski mountaineering in Rishiri | Blog",
    description:
      "Experience the thrilling adventure of ski mountaineering in Rishiri, the lonely island with the pointing volcano rising 1721 m above the sea.",
    url: "https://yukiumihouse.com/blog/ski-mountaineering-rishiri",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://yukiumihouse.com/images/blogs/blog-2/island.jpg",
        width: 1200,
        height: 630,
        alt: "Ski mountaineering in Rishiri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ski mountaineering in Rishiri | Blog",
    description:
      "Experience the thrilling adventure of ski mountaineering in Rishiri, the lonely island with the pointing volcano rising 1721 m above the sea.",
    creator: "@ferranm99",
    images: ["https://yukiumihouse.com/images/blogs/blog-2/island.jpg"],
  },
  // Optional: If you use Google Search Console
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function SkiMountaineeringRishiri() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Ski mountaineering in Rishiri
      </h1>

      <img
        src="/images/blogs/blog-2/island.jpg"
        alt="Rishiri Island"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          Since we arrived in Japan and before we knew about the existence of
          Rishiri Fuji. The lonely island, the pointing volcano that rises 1721
          m above the sea. Located in the most north side of Japan is a
          difficult access place, where you could go to it from Wakkanain port
          with the ferry that every day goes twice. The most challenging part is
          to spot the correct weather window. It's location is very prompt to be
          all time under storms. Once you get your weather window pretty clear,
          the best is to commit and head up north.
        </p>
      </div>

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          Once you are on the island there are very few places to host yourself
          and most montanierus people will decide to camp or viuvac before
          climbing it. A long climb ahead from 0 to 1721m.
        </p>
      </div>

      <img
        src="/images/blogs/blog-2/PXL_20240321_050510665.jpg"
        alt="Climbing Rishiri"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          Early start and maybe for most skiers the normal route through the
          north ridge would be the easiest. Middle way there is this little hut
          where you can shelter, or overnight depending on your necessities and
          activities plan.
        </p>
      </div>

      <img
        src="/images/blogs/blog-2/PXL_20240322_023509564.jpg"
        alt="Hut on Rishiri"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          About skiing there are plenty of possibilities and the summit will
          become secondary if we prioritize ski! The famous Aftaromamai is the
          line that links all the east face from top to bottom Then in the West
          we have a more safe talking gully/face that usually is not super
          loaded. Though nothing or NE there are some hidden gems with just
          pleasant ski on it pretty much full of pow. Finally on the south side
          of the island for those early months. Probably well loaded after any
          nothly storm.
        </p>
      </div>

      <img
        src="/images/blogs/blog-2/PXL_20240322_024047477.jpg"
        alt="Skiing on Rishiri"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          Any time of the winter is special there, but the most recommended time
          is about mid to late March. Each time we head there we feel like we
          would like to spend more and more time on the Island. Let's hope for
          more!!!
        </p>
      </div>
    </div>
  );
}
