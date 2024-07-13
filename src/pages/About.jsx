import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full min-h-[89vh]">
      <div className="w-[80vw] md:w-2/3 mx-auto pt-[40vh] md:pt-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-4/5 md:mr-44">
            <div className="uppercase text-xl md:text-2xl font-bold mb-6">
              SUMIT SHARMA.
            </div>
            <div className="text-lg md:text-xl text-gray-700">
              <h3 className="text-[4vh] md:text-xl font-bold text-gray-700 mt-6 w-full">
                Director of Celebrating Farmers Edge International Pvt Ltd
              </h3>
              <p className="mt-2 md:mt-4 leading-7 ">
                CELEBRATING FARMERS' EDGE INTERNATIONAL Pvt. Ltd. is a platform
                to enable FARMERPRENEUR across the globe which will not only
                empower the farmers but also give them ample opportunities to
                grow and explore their potential and capabilities to the
                fullest. Presenting CFEI successful team work of innovative
                sugarcane value added products at the #FarmGate and its vision
                of Implementing similar model pan india at the 86th Annual
                Convention of Indian Society of soil Science and National
                Seminar. Hosted by Mahatma Phule Krishi Vidyapeeth
                Rauri Maharastra.
              </p>
              <div className="mt-9">
                <Link
                  to="/blog"
                  className="bg-gray-800 text-white md:px-6 md:py-3 text-xl uppercase tracking-wide hover:bg-red-800"
                >
                  Read Our blogs
                </Link>
              </div>
            </div>
            <div className="flex mt-10">
              <a
                href="https://www.facebook.com/"
                className="text-blue-700 text-2xl mr-4 hover:text-gray-800"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/?lang=en"
                className="text-blue-700 text-2xl mr-4 hover:text-gray-800"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-blue-700 text-2xl hover:text-gray-800"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="absolute top-32 md:relative md:top-10 md:w-1/2 mt-10 md:mt-0 mr-6 md:mr-0">
            <img src="/sumit-sharma.jpeg" alt="Sid" className="w-[80vw] h-auto" />
          </div>
        </div>
      </div>
      <div className="border-[1px] border-grey mt-6"></div>
      <div className="vision m-auto mt-7">
        <div className="uppercase text-xl md:text-3xl font-bold mb-6 flex justify-center">
          Our vision
        </div>
        <p className="text-lg md:text-xl text-gray-700 mt-2 flex justify-center align-center m-auto w-2/3">
          Our vision is to empower farmers by creating a platform for enabling
          farmerpreneurs.
        </p>
      </div>
      <div className="border-[1px] border-grey mt-6 mx-[50vh]"></div>
      <div className="mission m-auto mt-7">
        <div className="uppercase text-xl md:text-3xl font-bold mb-6 flex justify-center">
          Our mission
        </div>
        <p className="text-lg md:text-xl text-gray-700 mt-2 flex justify-center align-center m-auto w-2/3">
          Our Mission is to maximise their potential by enabling disruptive
          technologies that are easily Adaptable, Accessible and Affordable for
          farmers. Development of Unique and Natural product lines for optimum
          utilisation of the agri produce and commercialising the products
          through the implementation of Business Models, Connecting the
          Start-ups and Creating farmers' collectives are the 5 key activities
          as part of this mission.
        </p>
      </div>

      <div className="border-[1px] border-grey mt-6"></div>
      <div className="vision m-auto mt-7 mb-32">
        <div className="uppercase text-xl md:text-3xl font-bold mb-6 flex justify-center">
          Technologies
        </div>
        <p className="text-lg md:text-xl text-gray-700 mt-2 flex justify-center align-center m-auto w-2/3">
        The first and the foremost core activity of this platform is TECHNOLOGIES. We
explore and enable technologies and co-create them according to our needs
through our collaborations and strategic alliances.
The main focus of our technologies are such that it can be easily Adaptable,
Accessible and Affordable for the farmers as our idea is to create decentralised
processing unit at the farm gate itself through collectivisation of farmers.
        </p>
      </div>
    </div>
  );
};

export default About;
