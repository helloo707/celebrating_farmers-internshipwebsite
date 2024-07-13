import React from "react";
import BlogCarousel from "./BlogCarousel";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "A climate action roadmap for sustainable sugarcane",
    excerpt:
      "Sugarcane is a great source of renewable energy in the form of bioethanol, biogas, biomass and as a raw material for bioplastics and biomaterials.",
    profilePic: "https://via.placeholder.com/150",
    author: "Aditya",
    link: "#",
  },
  {
    title: "Sustainability of sugarcane production",
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
];

const companies = [
  {
    name: "IIT Bombay",
    id: "1",
    imgSrc: "/iit-bombay.png",
    location: "Powai, Mumbai, India",
  },
  {
    name: "CFTRI",
    id: "2",
    imgSrc: "/ctfri.png",
    location: "Andheri, Mumbai, India",
  },
  {
    name: "ICAR - CIAE Bhopal",
    id: "3",
    imgSrc: "/icar.png",
    location: "Bhopal, Madhyapradesh, India",
  },
  {
    name: "Sugarcane Breeding Institution",
    id: "4",
    imgSrc: "/sugarcane-breeding.png",
    location: "Chettipalayam, Tamil Nadu, India",
  },
  {
    name: "Punjab Agricultural University",
    id: "5",
    imgSrc: "/punjab.png",
    location: "Ludiana, Punjab, India",
  },
  {
    name: "IIP",
    id: "6",
    imgSrc: "/iip.png",
    location: "Andheri, Mumbai, India",
  },
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
              Platform for Enabling " FARMERPRENEURS "
            </h4>
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                className="rounded border-2 bg-slate-800 border-slate-50 px-4 py-2 text-sm font-medium uppercase leading-normal text-slate-50 transition duration-150 ease-in-out hover:bg-slate-700 hover:font-bold focus:outline-none focus:ring-0 w-1/2 md:w-auto"
                // data-twe-ripple-init
                // data-twe-ripple-color="light"
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
          {/* <div className="mt-8 md:mt-0">
            <img
              className="border-2 w-20 md:w-40 border-white rounded-full"
              src="../../public/Sugarcane.jpg"
              alt="Profile"
            />
          </div> */}
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
      <section id="Power-Transmission-Sales-Query" className="p-5 bg-gray-100">
        <div className="container mx-auto p-5 max-w-screen-2xl">
          <div className="mb-10">
            <div className="w-full">
              <h5 className="text-2xl font-medium mb-7 flex justify-center ">
                Our team
              </h5>
            </div>
          </div>
          <div className="flex flex-wrap justify-around">
            <div className="flex-1 max-w-md m-3">
              <div className="bg-white p-5 border border-gray-300 rounded shadow-sm">
                <p className="text-lg font-bold">Vipan Sarin</p>
                <p className="border-b border-gray-400 pb-2 mb-2">Director</p>
                <div className="text-blue-600">
                  <p>
                    <a href="mailto:siddharthshah160606@gmail.com">
                      vipinsarin09@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+918928867696">+91 9769677033</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md m-3">
              <div className="bg-white p-5 border border-gray-300 rounded shadow-sm">
                <p className="text-lg font-bold">Swati Sonar</p>
                <p className="border-b border-gray-400 pb-2 mb-2">
                  Account Manager
                </p>
                <div className="text-blue-600">
                  <p>
                    <a href="mailto:siddharthshah160606@gmail.com">
                      swatisonar707@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+918928867696">+91 7025163891</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md m-3">
              <div className="bg-white p-5 border border-gray-300 rounded shadow-sm">
                <p className="text-lg font-bold">V . Doraisamy</p>
                <p className="border-b border-gray-400 pb-2 mb-2">
                  Tecnical advisor
                </p>
                <div className="text-blue-600">
                  <p>
                    <a href="mailto:siddharthshah160606@gmail.com">
                      vdorasamay707@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+918928867696">+91 9385773210</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5">
        <div className="mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-xl text-gray-800 font-medium mb-4">
                Similar Companies Based on Agricultural Services
              </h3>
              <ul className="flex flex-wrap justify-between flex-col md:flex-row w-2xl md:max-w-unset m-auto">
                {companies.map((company, index) => (
                  <li key={index} className="w-1/3 mb-5 text-center px-2">
                    <div
                      className="inline-block mb-2 cursor-pointer"
                    >
                      <img
                        width="34"
                        height="34"
                        src={company.imgSrc}
                        alt={company.name}
                        className="w-40 h-36 max-w-xs rounded-full"
                      />
                    </div>
                    <p>
                      <button
                        className="text-blue-500 font-bold"
                      >
                        {company.name}
                      </button>
                      <span className="block text-sm text-gray-600">
                        {company.location}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
