// BlogPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from API when component mounts
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data); // Assuming API returns an array of blogs
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Blogs</h1>
            <Link
              to="/blog-create"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create New Blog
            </Link>
          </div>
          <div className="blog-page">
            <h1 className="text-4xl font-bold mb-4">Latest Blogs</h1>
            <div className="flex flex-wrap md:w-full justify-start md:mx-[15vh]">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  title={blog.title}
                  content={blog.content}
                  authorName={blog.authorName}
                  authorImageUrl={blog.authorImageUrl}
                  bannerImgUrl={blog.bannerImgUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
