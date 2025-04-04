import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behind the mountains: Point of view | Blog",
  description:
    "An introduction to Yukiumi House in north Daisetsuzan, Hokkaido. Learn about our journey, the hostel, and our explorations.",
  keywords: [
    "Yukiumi House",
    "Daisetsuzan",
    "Hokkaido",
    "Hostel",
    "Exploration",
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
    canonical: "/blog/behind-the-mountains",
  },
  openGraph: {
    title: "Behind the mountains: Point of view | Blog",
    description:
      "An introduction to Yukiumi House in north Daisetsuzan, Hokkaido. Learn about our journey, the hostel, and our explorations.",
    url: "https://yukiumihouse.com/blog/behind-the-mountains",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/tours/dji_0072.jpg",
        width: 1200,
        height: 630,
        alt: "Behind the mountains: Point of view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Behind the mountains: Point of view | Blog",
    description:
      "An introduction to Yukiumi House in north Daisetsuzan, Hokkaido. Learn about our journey, the hostel, and our explorations.",
    creator: "@ferranm99",
    images: ["https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg"],
  },
  // Optional: If you use Google Search Console
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function BehindTheMountainsPointOfView() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Behind the mountains: Point of view</h1>
      
      <img
        src="/images/tours/dji_0072.jpg"
        alt="Behind the mountains: Point of view"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>This short film is an introduction of Yukiumi House, here in north Daisetsuzan, Hokkaido. We have been working hard for the last two years to put together many things. We built up a Hostel, we explored Daisetsuzan on all its beauty and in the meanwhile we got to eat many Ramens. We are hoping you all can come to visit us so we can keep exploring and sharing with you. Sincerely, Yukiumi House team.</p>
      </div>

      <iframe
        src="https://www.youtube.com/embed/fg3cpG6DTGE?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=es&autohide=2&wmode=transparent"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="mb-4 w-full h-72 sm:h-96 2xl:h-[34rem] xl:h-[34rem]"
      ></iframe>
    </div>
  );
}