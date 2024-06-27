import React from "react";
import BlogCarousel from "./BlogCarousel";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Blog Post 1",
    excerpt: "This is a short description of blog post 1.",
    profilePic: "https://via.placeholder.com/150",
    author: "Author 1",
    link: "#",
  },
  {
    title: "Blog Post 2",
    excerpt: "This is a short description of blog post 2.",
    profilePic: "https://via.placeholder.com/150",
    author: "Author 2",
    link: "#",
  },
  {
    title: "Blog Post 3",
    excerpt: "This is a short description of blog post 3.",
    profilePic: "https://via.placeholder.com/150",
    author: "Author 3",
    link: "#",
  },
  // Add more blog posts as needed
];

const Home = () => {
  return (
    <>
      <div className="relative h-[90vh] text-center">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-50"
          style={{ backgroundImage: "url(../../public/Sugarcane.jpg)" }}
        ></div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-black text-center w-1/2">
            <h1 className="mb-4 text-2xl md:text-5xl font-semibold">
              Celebrating Farmers Edge International Pvt. Ltd.
            </h1>
            <h4 className="mb-6 text-lg md:text-xl font-semibold">
              Ghana Khava Khush Rahava
            </h4>
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                className="rounded border-2 bg-slate-800 border-slate-50 px-4 py-2 text-sm font-medium uppercase leading-normal text-slate-50 transition duration-150 ease-in-out hover:bg-slate-700 hover:font-bold focus:outline-none focus:ring-0 w-1/2 md:w-auto"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About
                </Link>
              </button>
              <button
                type="button"
                className="rounded border-2 bg-slate-800 border-slate-50 px-4 py-2 text-sm font-medium uppercase leading-normal text-slate-50 transition duration-150 ease-in-out hover:bg-slate-700 hover:font-bold focus:outline-none focus:ring-0 w-1/2 md:w-auto"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact
                </Link>
              </button>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              className="border-2 w-20 md:w-40 border-white rounded-full"
              src="../../public/Sugarcane.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <div className="corousel">
        <BlogCarousel blogs={blogs} />
      </div>
      <div className="keyfacts relative overflow-y-hidden">
        <div
          className="section keyfactsvideo-n1 key-facts overflow-y-hidden md:max-w-full h-screen md:h-[50vh]"
          id="Key-Facts"
        >
          {/* Desktop video */}
          <video
            className="hidden md:block absolute inset-0 h-[55vh]  w-[100%] max-w-none"
            muted
            autoPlay
            loop
          >
            <source src="../../public/agri-desktop.mp4" type="video/mp4" />
          </video>

          {/* Mobile video */}
          <video
            className="block md:hidden absolute inset-0 w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src="path-to-your-video/agri-mobile.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 h-full flex items-center justify-center md:h-[55vh] bg-black bg-opacity-50">
            <div className="text-center text-white  md:max-h-[100vw]">
              <h3 className="text-xl md:text-5xl font-semibold mb-8">
                KEY FACTS
              </h3>
              <div className="flex flex-col md:flex-row gap-12 mx-8 md:mx-60">
                <div className="col-md-3 col-sm-6">
                  <div className="fact-details">
                    <p className="text-xl md:text-4xl font-bold">
                      <span>7</span>
                    </p>
                    <p>Sugar Manufacturing Units</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="fact-details">
                    <p className="text-xl md:text-4xl font-bold">
                      <span>210</span>&nbsp;K
                    </p>
                    <p>Hectares Area under Sugarcane</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="fact-details">
                    <p className="text-xl md:text-4xl font-bold">
                      <span>~335</span> K
                    </p>
                    <p>Farmer Network</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="fact-details">
                    <p className="text-xl md:text-4xl font-bold">
                      <span>~61000</span>
                    </p>
                    <p>Tonnes per day crushing capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
