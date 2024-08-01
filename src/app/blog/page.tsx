import React from "react";
import FeaturedBlog from "./_components/featured-blog";
import BlogSection from "../_components/blog-section";

export default async function Blog() {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center pb-1 pt-1 lg:pt-0">
        Blog Posts
      </h1>
      <FeaturedBlog />
      <BlogSection />
    </div>
  );
}
