import React from "react";
import BlogTemplate from "../_components/blog-template";

type BlogContent = {
  type: "text" | "image";
  content: string;
};

interface BlogProps {
  title: string;
  content: BlogContent[];
}

const blogData: BlogProps[] = [
  {
    title: "Asahidake Ropeway, deepest snow of Hokkaido?",
    content: [
      {
        type: "text",
        content:
          "Asahidake is the highest peak of Hokkaido with 2290m, and it's and active volcano. At its foot lies the Asahidake Ropeway, becoming one of the best highlights of the Hokkaido powder hunters.",
      },
      { type: "image", content: "/images/blogs/blog-0-1.jpg" },
      {
        type: "text",
        content:
          "It's a Ropeway that saves you 650m vertical. And accés you to a Plato where you can contemplate, the beauty of the volcano with it's smoky fumaroles making you feel small and in a living earth. Either climb to the top or loop the Ropeway in search of the deepest of deepest snows will end in an unforgettable day out! The fact that the base of the ropeway lays on a 1000m elevation, which is very high for Hokkaido basis give to it extremely unic snow conditions.",
      },
      /* { type: "image", content: "/path/to/image2.jpg" },
    { type: "text", content: "This is the final paragraph of my blog." }, */
    ],
  },
  {
    title: "My First Blog Post",
    content: [
      { type: "text", content: "This is the first paragraph of my blog." },
      { type: "image", content: "/path/to/image1.jpg" },
      {
        type: "text",
        content: "Here is some more text after the first image.",
      },
      { type: "image", content: "/path/to/image2.jpg" },
      { type: "text", content: "This is the final paragraph of my blog." },
    ],
  },
];

export default function Page({ params }: { params: { id: number } }) {
  if (params.id >= blogData.length) {
    return (
      <h1 className="my-20 font-bold text-2xl text-center">Blog not found</h1>
    );
  }
  return (
    <div>
      <BlogTemplate
        title={blogData[params.id].title}
        content={blogData[params.id].content}
      />
    </div>
  );
}
