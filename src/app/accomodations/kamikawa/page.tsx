import React from "react";
import type { Metadata } from "next";
import KamikawaContent from "../_components/kamikawa";

export const metadata: Metadata = {
  title: "Accommodation in Kamikawa | Yukiumi House",
  description:
    "Discover the best accommodations in Kamikawa at Yukiumi House. Enjoy serene surroundings, close proximity to natural attractions, and top-notch amenities.",
  keywords: [
    "Accommodations",
    "Kamikawa",
    "Yukiumi House",
    "Stay",
    "Hospitality",
    "Natural Attractions",
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
    canonical: "/accomodations/kamikawa",
  },
  openGraph: {
    title: "Accommodations in Kamikawa | Yukiumi House",
    description:
      "Discover the best accommodations in Kamikawa at Yukiumi House. Enjoy serene surroundings, close proximity to natural attractions, and top-notch amenities.",
    url: "https://yukiumihouse.com/accomodations/kamikawa",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yukiumihouse.com/images/yukihouse_kamikawa/IMG-20240717-WA0035.jpg",
        width: 1200,
        height: 630,
        alt: "Accommodations in Kamikawa at Yukiumi House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accommodations in Kamikawa | Yukiumi House",
    description:
      "Discover the best accommodations in Kamikawa at Yukiumi House. Enjoy serene surroundings, close proximity to natural attractions, and top-notch amenities.",
    creator: "@ferranm99",
    images: ["https://yukiumihouse.com/images/yukihouse_kamikawa/IMG-20240717-WA0035.jpg"],
  },
};

const Page: React.FC = () => {
  return <KamikawaContent />;
};

export default Page;