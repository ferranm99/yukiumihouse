import React from "react";
import ReviewsSection from "./_components/reviews";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Reviews | Yukiumi House",
  description:
    "Read reviews from our guests at Yukiumi House. Discover what they have to say about their stay, the service, and the overall experience.",
  keywords: [
    "Reviews",
    "Yukiumi House",
    "Guest Reviews",
    "Service",
    "Experience",
    "Customer Feedback"
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
    canonical: "/reviews",
  },
  openGraph: {
    title: "Reviews | Yukiumi House",
    description:
      "Read reviews from our guests at Yukiumi House. Discover what they have to say about their stay, the service, and the overall experience.",
    url: "https://yukiumihouse.com/reviews",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews | Yukiumi House",
    description:
      "Read reviews from our guests at Yukiumi House. Discover what they have to say about their stay, the service, and the overall experience.",
    creator: "@ferranm99",
  },
};

export default function Page() {
  return (
    <div>
      <ReviewsSection />
    </div>
  );
}