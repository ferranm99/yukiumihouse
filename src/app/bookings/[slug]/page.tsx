import React from "react";
import TabSwitch from "./_components/tab-switch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings | Yukiumi House",
  description:
    "Book your stay at Yukiumi House. Experience the best hospitality and enjoy the beautiful surroundings.",
  keywords: [
    "Bookings",
    "Yukiumi House",
    "Book Now",
    "Accommodation",
    "Hospitality",
    "Stay",
    "Reservations"
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
    canonical: "/bookings",
  },
  openGraph: {
    title: "Bookings | Yukiumi House",
    description:
      "Book your stay at Yukiumi House. Experience the best hospitality and enjoy the beautiful surroundings.",
    url: "https://yukiumihouse.com/bookings",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookings | Yukiumi House",
    description:
      "Book your stay at Yukiumi House. Experience the best hospitality and enjoy the beautiful surroundings.",
    creator: "@ferranm99",
  },
};

const BookingsPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full pt-10">
      <h1 className="text-4xl font-bold text-center pb-8">Choose your tour!</h1>
      <TabSwitch tour={params.slug} />
    </div>
  );
};

export default BookingsPage;
