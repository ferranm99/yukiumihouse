import React from "react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    title: "Ishimuro hut mission",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg?w=1024",
    alt: "Ishimuro hut mission",
    category: "Mountain huts",
    date: "April 6, 2023",
    url: "/blog/1",
  },
  {
    title: "Beyond the mountains",
    image:
      "https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg?w=1024",
    alt: "Beyond the mountains",
    category: "Short film",
    date: "April 6, 2023",
    url: "/blog/2",
  },
  {
    title: "Trail running Numanodaira",
    image:
      "https://yukiumihouse.files.wordpress.com/2022/12/dji_0797.jpg?w=1024",
    alt: "Trail running Numanodaira",
    category: "Trail running",
    date: "April 6, 2023",
    url: "blog/3",
  },
];

const BlogSection = () => {
  return (
    <div className="relative px-8 mb-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="">
          <div className="grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <Link href={post.url} key={idx}>
                <div className="flex-col group mb-8 md:mb-0">
                  <div className="relative h-64 w-full overflow-clip">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className="object-cover object-center rounded-t-lg w-full"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="bg-slate-200 p-8 border-2 border-t-0 rounded-b-lg">
                    <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                      {post.category}
                    </div>
                    <div className="border-b-2 border-primary-500 w-8"></div>
                    {/* <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                      {post.date}
                    </div> */}
                    <h2 className="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                      {post.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
