import React from "react";
import FeaturedBlog from "./_components/featured-blog";
import BlogSection from "../_components/blog-section";

export default async function Blog() {
  return (
    <div>
      <FeaturedBlog />
      <BlogSection />
    </div>
  );
}
