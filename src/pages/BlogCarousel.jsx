import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogCarousel = ({ blogs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-[95vw]">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={blog.profilePic}
                  alt={blog.author}
                />
                <div className="ml-4">
                  <h3 className="font-bold text-xl">{blog.title}</h3>
                  <p className="text-gray-600">by {blog.author}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              <a
                href={blog.link}
                className="text-indigo-500 hover:text-indigo-700"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
