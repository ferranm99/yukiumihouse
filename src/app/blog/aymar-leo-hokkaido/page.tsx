import React from "react";
import type { Metadata } from "next";
import CarouselComponent from "../_components/carroussel";

export const metadata: Metadata = {
  title: "Aymar Navarro & Leo Slemett visit Hokkaido and Yukiumi house | Blog",
  description:
    "Aymar Navarro and Leo Slemett visit Hokkaido and stay at Yukiumi house to experience the famous snow of Central Hokkaido.",
  keywords: [
    "Aymar Navarro",
    "Leo Slemett",
    "Hokkaido",
    "Yukiumi house",
    "skiing",
    "freeride",
    "Japan",
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
    canonical: "/blog/aymar-leo-hokkaido",
  },
  openGraph: {
    title: "Aymar Navarro & Leo Slemett visit Hokkaido and Yukiumi house | Blog",
    description:
      "Aymar Navarro and Leo Slemett visit Hokkaido and stay at Yukiumi house to experience the famous snow of Central Hokkaido.",
    url: "https://yukiumihouse.com/blog/aymar-leo-hokkaido",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://yukiumihouse.com/images/blogs/blog-1/team_firmas.jpg",
        width: 1200,
        height: 630,
        alt: "Aymar Navarro & Leo Slemett visit Hokkaido",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aymar Navarro & Leo Slemett visit Hokkaido and Yukiumi house | Blog",
    description:
      "Aymar Navarro and Leo Slemett visit Hokkaido and stay at Yukiumi house to experience the famous snow of Central Hokkaido.",
    creator: "@ferranm99",
    images: ["https://yukiumihouse.com/images/blogs/blog-1/team_firmas.jpg"],
  },
  // Optional: If you use Google Search Console
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function AymarLeoHokkaido() {
  const images = [
    "/images/blogs/blog-1/gallery/1.jpg",
    "/images/blogs/blog-1/gallery/2.jpg",
    "/images/blogs/blog-1/gallery/3.jpg",
    "/images/blogs/blog-1/gallery/4.jpg",
    "/images/blogs/blog-1/gallery/5.jpg",
    "/images/blogs/blog-1/gallery/6.jpg",
    "/images/blogs/blog-1/gallery/7.jpg",
    "/images/blogs/blog-1/gallery/8.jpg",
    "/images/blogs/blog-1/gallery/9.jpg",
    "/images/blogs/blog-1/gallery/10.jpg",
    "/images/blogs/blog-1/gallery/11.jpg",
    "/images/blogs/blog-1/gallery/13.jpg",
    "/images/blogs/blog-1/gallery/14.jpg",
    "/images/blogs/blog-1/gallery/15.jpg",
    "/images/blogs/blog-1/gallery/16.jpg",
    "/images/blogs/blog-1/gallery/17.jpg"
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Aymar Navarro & Leo Slemett visit Hokkaido and Yukiumi house</h1>
      
      <img
        src="/images/blogs/blog-1/team_firmas.jpg"
        alt="Team Firmas"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Aymar Navarro, Spanish freeride legend and freeride world tour competitor for many years convinced his best Chamonix ski buddy Leo Slemett, Freeride world tour champion to go check the famous snow of Central Hokkaido on January 2024. They choose Yukiumi house to stay, get the best food and be shown around.</p>
      </div>

      <img
        src="/images/blogs/blog-1/PXL_20240109_040435195.jpg"
        alt="Aymar and Leo"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>They stayed in Furano valley for 10 days of endless Powder snow. They came to shoot a short film project with their cameraman Jaime Varela an authentic machine in his field.</p>
      </div>

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>They got epic conditions with more than 2 meters of snow fallen in those two days. They could ski typical central Hokkaido terrain, tide trees, avy barriers, active volcanoes like Asahidake and all in all with the sublime powder snow that this region of the planet gets.</p>
      </div>

      <img
        src="/images/blogs/blog-1/PXL_20240109_012814504.jpg"
        alt="Skiing in Hokkaido"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>We were beyond stoked to have them and offer our very best product to them. We squeeze all we have, cook our best food, take them to the best ski spots and show the best of Japanese culture has to offer, like food and onsens. Overall, them and us cultivate a short but intense relationship that we all remember with pride as everyone had the feeling that everything went much better and smoother than specter. For those 10 days we all become a freeride Family and we all learn from each other. We would love to have them back anytime to keep improving our riding skills and learning from the best. We can be more thankful for the opportunity they gave us to have them home. Cheers to those dream days riding with our heroes🤟🫶</p>
      </div>

      <img
        src="/images/blogs/blog-1/PXL_20240113_034726830.jpg"
        alt="Sunset skiing"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p><br /><b>Gallery</b><br /></p>
      </div>

      <div className="max-w-4xl mx-auto p-4 my-10">
        <CarouselComponent images={images} />
      </div>
    </div>
  );
}