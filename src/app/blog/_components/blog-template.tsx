import React from "react";

type BlogContent = {
  type: "text" | "image" | "video";
  content: string;
};

interface BlogProps {
  title: string;
  content: BlogContent[];
}

const BlogTemplate: React.FC<BlogProps> = ({ title, content }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
      {content.map((item, index) => {
        if (item.type === "text") {
          return (
            <p key={index} className="mb-4 text-lg text-gray-800 leading-loose">
              {item.content}
            </p>
          );
        } else if (item.type === "image") {
          return (
            <img
              key={index}
              src={item.content}
              alt=""
              className="mb-4 w-full h-auto"
            />
          );
        } else if (item.type === "video") {
          return (
            <iframe
              key={index}
              src={item.content}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mb-4 w-full h-72 sm:h-96 2xl:h-[34rem] xl:h-[34rem]"
            ></iframe>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BlogTemplate;
