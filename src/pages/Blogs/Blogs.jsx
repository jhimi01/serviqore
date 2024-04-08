import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import blogimg from "../../assets/blogimg.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const blogPosts = [
    {
      _id: 1,
      image: blogimg,
      author: "John Doe",
      date: "April 7, 2024",
      title: "The Impact of Artificial Intelligence on Society",
      description:
        "Artificial intelligence (AI) is rapidly transforming various aspects of society, from healthcare to finance. This article explores the profound implications of AI on our lives.Artificial intelligence (AI) is rapidly transforming various aspects of society, from healthcare to finance. This article explores the profound implications of AI on our lives.Artificial intelligence (AI) is rapidly transforming various aspects of society, from healthcare to finance. This article explores the profound implications of AI on our lives.",
      tags: ["Artificial Intelligence", "Technology", "Society"],
    },
    {
      _id: 2,
      image: blogimg,
      author: "Jane Smith",
      date: "April 5, 2024",
      title: "10 Healthy Habits to Boost Your Productivity",
      description:
        "Improving productivity isn't just about working harder; it's about working smarter. Discover ten healthy habits that can enhance your productivity and overall well-being.Improving productivity isn't just about working harder; it's about working smarter. Discover ten healthy habits that can enhance your productivity and overall well-being.Improving productivity isn't just about working harder; it's about working smarter. Discover ten healthy habits that can enhance your productivity and overall well-being.",
      tags: ["Productivity", "Health", "Lifestyle"],
    },
    {
      _id: 3,
      image: blogimg,
      author: "Alex Johnson",
      date: "April 3, 2024",
      title: "Exploring the Wonders of Space Travel",
      description:
        "Space travel has long captivated the imagination of humanity. Join us on a journey through the cosmos as we explore the wonders of space travel and its potential future.Space travel has long captivated the imagination of humanity. Join us on a journey through the cosmos as we explore the wonders of space travel and its potential future.Space travel has long captivated the imagination of humanity. Join us on a journey through the cosmos as we explore the wonders of space travel and its potential future.",
      tags: ["Space", "Science", "Exploration"],
    },
    {
      _id: 4,
      image: blogimg,
      author: "Emily Lee",
      date: "April 1, 2024",
      title: "The Art of Mindfulness: Finding Peace in a Busy World",
      description:
        "In today's fast-paced world, practicing mindfulness can bring a sense of calm and clarity to our lives. Learn about the art of mindfulness and how it can help you find peace amidst the chaos.In today's fast-paced world, practicing mindfulness can bring a sense of calm and clarity to our lives. Learn about the art of mindfulness and how it can help you find peace amidst the chaos.In today's fast-paced world, practicing mindfulness can bring a sense of calm and clarity to our lives. Learn about the art of mindfulness and how it can help you find peace amidst the chaos.",
      tags: ["Mindfulness", "Wellness", "Self-Care"],
    },
  ];

  return (
    <div className="mt-5 md:mt-20">
      <Helmet>
        <title>blogs | serviqore</title>
      </Helmet>

      <div className="bg-[#F9FDFC] py-14 px-5 md:px-20 text-center">
        <h1 className="text-primary font-semibold text-[64px] leading-[76px] ">
          Blogs
        </h1>
        <p className="text-textMuted text-[14px] font-normal mt-5">
          Our blog is where we share our expertise, insights, and latest updates
          with you. Whether you're a seasoned professional or just starting out,
          our blog is your go-to resource for valuable information, tips, and
          inspiration.
        </p>
      </div>
      <div className="lg:w-10/12 w-11/12 mx-auto my-10">
        <h1 className="text-black font-semibold text-[36px] mb-5">
          Recent Blog posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <Link to={`/blog/${post._id}`} key={post.id}>
              <div key={index} className="rounded-lg group hover:shadow-md p-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full group-hover:scale-95 group-hover:shadow-md transition ease-linear h-52 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  By {post.author} | {post.date}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  {post.description.slice(0, 250)}...
                </p>

                <div className="flex flex-wrap">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-primary text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
