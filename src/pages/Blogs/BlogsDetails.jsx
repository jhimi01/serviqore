import React, { useEffect } from "react";
import blogimg from "/images/details.png";
const BlogsDetails = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const blogPost = {
    _id: 1,
    image: blogimg,
    author: "John Doe",
    date: "April 7, 2024",
    title: "The Impact of Artificial Intelligence on Society",
    description:
      "Artificial intelligence (AI) is rapidly transforming various aspects of society, from healthcare to finance. This article explores the profound implications of AI on our lives.Artificial intelligence (AI) is rapidly transforming various aspects of society, from healthcare to finance. This article explores the profound implications of AI on our lives.Artificial intelligence (AI) is rapidly transforming various aspects of society, from healthcare to finance. This article explores the profound implications of AI on our lives.",
    tags: ["tag", "tag", "tag", "tag", "tag"],
  };

  return (
    <div className="my-24 md:w-9/12 w-11/12 mx-auto">
      <h2 className="font-bold text-3xl py-5">{blogPost.title}</h2>
      <div className="w-full">
        <img
          className="w-full h-full rounded hover:shadow-md"
          src={blogPost.image}
          alt={blogPost.title}
        />
      </div>
      <div>
        <p className="text-black font-semibold text-xl mt-5">
          By {blogPost.author} | {blogPost.date}
        </p>
        <p className="text-textMuted my-3">{blogPost.description}</p>
        <div>
          {blogPost.tags.map((tag, index) => (
            <span
              className="bg-gray-200 text-primary text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
