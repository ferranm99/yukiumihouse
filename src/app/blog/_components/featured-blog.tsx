import Link from "next/link";
import Image from "next/image";

const featuredBlog = {
  title: "Asahidake Ropeway, deepest snow of Hokkaido?",
  image: "/images/blogs/blog-0-1.jpg",
  alt: "asahidake ropeway",
  description:
    "Asahidake is the highest peak of Hokkaido with 2290m, and it's and active volcano. At its foot lies the Asahidake Ropeway, becoming one of the best highlights of the Hokkaido powder hunters.",
  href: "/blog/0",
  // date: "April 6, 2023",
  category: "Place Insights",
};

const FeaturedBlog = async () => {
  return (
    <div className="relative px-8 mb-8">
      <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
        <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
          <Link href={featuredBlog.href} className="cursor-pointer">
            <div className="h-64 sm:h-96 relative w-full ">
              <Image
                src={featuredBlog.image}
                fill
                className="object-cover object-center w-full h-full rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                priority
                alt={featuredBlog.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 70vw"
              />
            </div>
          </Link>
        </div>
        <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
          <Link href={featuredBlog.href} className="cursor-pointer">
            <div className="font-display uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
              {featuredBlog.category}
            </div>
            <div className="border-b-2 border-primary-500 w-8"></div>
            {/* <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
              {featuredBlog.date}
            </div> */}
            <h2 className="font-display text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
              {featuredBlog.title}
            </h2>
            <p className="text-sm mt-3 leading-loose text-gray-600 font-medium line-clamp-4">
              {featuredBlog.description}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
