import React from "react";
import type { Metadata } from "next";
import CarouselComponent from "../_components/carroussel";

export const metadata: Metadata = {
  title: "5 days Daisetsu san traverse | Blog",
  description:
    "Join our Japanese friends in the traverse south to north of the Daisetsuzan National Park!",
  keywords: [
    "Daisetsu san traverse",
    "Daisetsuzan National Park",
    "adventure",
    "skiing",
    "Japan",
    "traverse",
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
    canonical: "/blog/5-days-daisetsu-san-traverse",
  },
  openGraph: {
    title: "5 days Daisetsu san traverse | Blog",
    description:
      "Join our Japanese friends in the traverse south to north of the Daisetsuzan National Park!",
    url: "https://yukiumihouse.com/blog/5-days-daisetsu-san-traverse",
    siteName: "Yukiumi House",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/blogs/blog-4/img_20230326_103520.jpg",
        width: 1200,
        height: 630,
        alt: "5 days Daisetsu san traverse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 days Daisetsu san traverse | Blog",
    description:
      "Join our Japanese friends in the traverse south to north of the Daisetsuzan National Park!",
    creator: "@ferranm99",
    images: ["/images/blogs/blog-4/img_20230326_103520.jpg"],
  },
  // Optional: If you use Google Search Console
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

const images = [
  "/images/blogs/blog-4/img_4226.jpg",
  "/images/blogs/blog-4/img_4214.jpg",
  "/images/blogs/blog-4/img_4139.jpg",
  "/images/blogs/blog-4/img_4103.jpg",
  "/images/blogs/blog-4/img_4028.jpg",
  "/images/blogs/blog-4/img_4040.jpg",
  "/images/blogs/blog-4/img_2549.jpg",
  "/images/blogs/blog-4/img_4247-2.jpg",
  "/images/blogs/blog-4/kimg4943.jpg",
  "/images/blogs/blog-4/dji_0060.jpg",
  "/images/blogs/blog-4/img_4063.jpg",
];

export default function FiveDaysDaisetsuSanTraverse() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">5 days Daisetsu san traverse</h1>
      
      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>We decided to join our Japanese friends in the traverse south to north of the Daisetsuzan National Park!</p>
      </div>
      
      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>We packed our big backpacks with food, fuel, and sleeping gear to be able to be self-sufficient for at least 6 days out in the mountains. Backpacks were heavy!! But our stoke was higher.</p>
      </div>

      <iframe
        src="https://www.youtube.com/embed/enBzU_094n0?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=es&autohide=2&wmode=transparent"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="mb-4 w-full h-72 sm:h-96 2xl:h-[34rem] xl:h-[34rem]"
      ></iframe>

      <img
        src="/images/blogs/blog-4/img_20230326_103520.jpg"
        alt="Daisetsu san traverse"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Day1#: We start in Fukiage onsen, with quite a clear cold day, knowing that a big storm would be hitting the island on that same night. Went up to the coll, struggling with mega ice conditions and heavy loads. Once in the ridge line storm was already beginning an white out and strong winds was the ‘’kanji’’. Made it to the pic of Tokachidake, clinking on skis and starting a long travers on the ridge line. Riding on the hardest ice of the season with no visibility having to guess with GPS where to go was sketchy fun. Finally we got to the point where we dropped down off the ridge line and went down the south face of Bieidake. Time to build a shelter to sleep that stormy night. Was already snowing and we built a fast half cave half iglu, with a branched and leaves roof. Made a boom fire, cheered with the friends for the good times and set up our beds for sleep.</p>
      </div>

      <img
        src="/images/blogs/blog-4/img_20230326_164710.jpg"
        alt="Daisetsu san traverse"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Day2#: We woke up mega wet and full of snow as the shelter we built was not strong enough for a super windy and snowy night. Wet for the rest of the trip!! The weather was super raff and the group decided to build proper snow caves on the same spot overnight one more time. More than half a day of digging and the coolest snow cave I ever saw was made with 3 different rooms for two people, each room interconnected. Time to rest, cook and try to dry out our gear as much as possible. Hot Pocari sweat with whiskey was the recipe of the day.</p>
      </div>

      <img
        src="/images/blogs/blog-4/kimg4961.jpg"
        alt="Daisetsu san traverse"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Day3#: Trying to wake up like the Japanese Team….. Couldn’t make it on time but not too late. Heading out of the cave at 5:30 seeing the sunrise straight away. A long day ahead. Passing Oputateshike through the bottom, seeing great conditions in the south and east faces, deciding not to ride as we were one day late because of the big storm stuck us for an entire day. The goal was Tomuraushi standing more than 15km away. After millions of transitions, some ice, some not bad small faces we arrive at Tomuraushi North face. Some members of the group were totally exhausted, calling for a rescue and giving up mindset. Time to dig, a new snow cave was the option for the night. Putting in 2 hours of work we dug out a super fancy snow cave with a room of 4 for the Japanese team and a suit room for 2 Spanish members:)</p>
      </div>

      <img
        src="/images/blogs/blog-4/img_20230328_161552.jpg"
        alt="Daisetsu san traverse"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Day4#: The long flat!!.... A beautiful sunrise and a long day of 18 kms was ahead the stoke was high and very good weather was by our side. Leaving on the back the beautiful East face of Tomuraushi and heading to Hakun hut. Getting there for one of the most beautiful sunsets and having the pleasure of sleeping in a dry, clean and semi warm place, was so luxurious!! All the food lest was on for a great dinner and good sleep.</p>
      </div>

      <img
        src="/images/blogs/blog-4/img_4103.jpg?w=1024"
        alt="Daisetsu san traverse"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Day5#: Tadaima, The feeling of coming back home. We know we did it!! The big job was done. Get out of the hut before first lights and get to the ridge line with the pink hour to be hit by the first sun rays of the day, so magic, another type of energy and vibration was there:). We were at Kurodake summit before the ropeway operated and being able to ski the main face in this type of old pow snow made our day even better. For sure we decided to ski down to Sounkyo with super ice and a difficult crust to finish one of the best activities of this winter.</p>
      </div>

      <img
        src="/images/blogs/blog-4/img_4184.jpg"
        alt="Daisetsu san traverse"
        className="mb-4 w-full h-auto"
      />

      <div className="mb-4 text-lg text-gray-800 leading-loose">
        <p>Cheers to all friends that where there was one to remember!!</p>
      </div>

      <div className="max-w-4xl mx-auto p-4 my-10">
        <CarouselComponent images={images} />
      </div>
    </div>
  );
}