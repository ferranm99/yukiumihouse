import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurodake Ropeway Hokkaido's freeride Paradise | Blog",
  description:
    "Kurodake Ropeway is one of the best ski attractions Hokkaido has to offer. For the lovers of steep, fast skiing and deep alpine powder.",
  keywords: [
    "Kurodake Ropeway",
    "Hokkaido",
    "freeride",
    "skiing",
    "Japan",
    "ski attractions",
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
    canonical: "/blog/kurodake-ropeway-hokkaido",
  },
  openGraph: {
    title: "Kurodake Ropeway Hokkaido's freeride Paradise | Blog",
    description:
      "Kurodake Ropeway is one of the best ski attractions Hokkaido has to offer. For the lovers of steep, fast skiing and deep alpine powder.",
    url: "https://yukiumihouse.com/blog/kurodake-ropeway-hokkaido",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://yukiumihouse.com/images/blogs/blog-3/IMG_20240101_215715_233.jpg",
        width: 1200,
        height: 630,
        alt: "Kurodake Ropeway Hokkaido's freeride Paradise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurodake Ropeway Hokkaido's freeride Paradise | Blog",
    description:
      "Kurodake Ropeway is one of the best ski attractions Hokkaido has to offer. For the lovers of steep, fast skiing and deep alpine powder.",
    creator: "@ferranm99",
    images: ["https://yukiumihouse.com/images/blogs/blog-3/IMG_20240101_215715_233.jpg"],
  },
};

export default function KurodakeRopewayHokkaidoFreerideParadise() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Kurodake Ropeway Hokkaido's freeride Paradise
      </h1>

      <img
        src="/images/blogs/blog-3/IMG_20240101_215715_233.jpg"
        alt="Kurodake Ropeway Hokkaido's freeride Paradise"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          Kurodake Ropeway is one of the best ski attractions Hokkaido has to
          offer. For the lovers of steep, fast skiing and deep alpine powder.
        </p>
      </div>

      <img
        src="/images/blogs/blog-3/IMG-20240305-WA0010.jpg"
        alt="Kurodake Ropeway Descent"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          Kurodake Ropeway is located in the Sounkyo gorge. On the foot of
          Kurodake mountain and already inside of the Disetsuzan National Park.
          It's a funicular tram that saves about 750m plus one little chairlift
          on the top that saves 200m extra. From there we can start skiing and
          hiking to some of the best lines of Hokkaido.
        </p>
      </div>

      <img
        src="/images/blogs/blog-3/JMT_20230226_3400.jpg"
        alt="Kurodake Ropeway Terrain"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          The terrain we can expect there is a very narrow and steep treeline,
          where only highly advanced skiers will feel comfortable with. Then
          higher in the alpine above the treeline we find wide open steep faces,
          shoots and deep gullies that will make us think we are not in Hokkaido
          anymore. Nonetheless it's always well filled with that dry, light and
          deep Central Hokkaido powder snow.
        </p>
      </div>

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>
          It's best moment of the season is from mid February to mid April
          providing a very long season to ride.
        </p>
      </div>
    </div>
  );
}