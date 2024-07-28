import React from "react";

type BlogContent = {
  type: "text" | "image";
  content: string;
};

interface BlogProps {
  title: string;
  content: BlogContent[];
}

const BlogTemplate: React.FC<BlogProps> = ({ title, content }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {content.map((item, index) => {
        if (item.type === "text") {
          return (
            <p key={index} className="mb-4 text-gray-700">
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
        }
        return null;
      })}
    </div>
  );
};

export default BlogTemplate;
