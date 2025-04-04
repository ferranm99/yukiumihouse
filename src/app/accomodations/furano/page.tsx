import React from "react";
import FuranoContent from "../_components/furano";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accommodation in Furano | Yukiumi House",
  description:
    "Discover the best accommodations in Furano at Yukiumi House. Enjoy peaceful surroundings, close proximity to ski slopes, and top-notch amenities.",
  keywords: [
    "Accommodations",
    "Furano",
    "Yukiumi House",
    "Stay",
    "Hospitality",
    "Ski Slopes",
    "Amenities"
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
    canonical: "/accomodations/furano",
  },
  openGraph: {
    title: "Accommodations in Furano | Yukiumi House",
    description:
      "Discover the best accommodations in Furano at Yukiumi House. Enjoy peaceful surroundings, close proximity to ski slopes, and top-notch amenities.",
    url: "https://yukiumihouse.com/accomodations/furano",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yukiumihouse.com/images/yukihouse_furano/IMG_20240106_230353_471.jpg",
        width: 1200,
        height: 630,
        alt: "Accommodations in Furano at Yukiumi House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accommodations in Furano | Yukiumi House",
    description:
      "Discover the best accommodations in Furano at Yukiumi House. Enjoy peaceful surroundings, close proximity to ski slopes, and top-notch amenities.",
    creator: "@ferranm99",
    images: ["https://yukiumihouse.com/images/yukihouse_furano/IMG_20240106_230353_471.jpg"],
  },
};

const Page: React.FC = () => {
  return <FuranoContent />;
};

export default Page;