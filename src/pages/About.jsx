import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import SidImage from '../../public/Sid.jpg';
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="w-full min-h-[89vh] bg-gradient-to-b from-[#ffdad5] to-[#fff7f9]">
      <div className="w-4/5 mx-auto pt-24 md:pt-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/5 mr-44">
            <div className="uppercase text-2xl md:text-4xl font-bold mb-6">About Us</div>
            <div className="text-lg md:text-xl text-gray-700">
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <p className="mt-4 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odit eius repellat voluptatibus velit aut quam nihil ipsam rerum incidunt possimus, ab nesciunt provident dignissimos labore quaerat iure eos illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quaerat id corporis quo nesciunt vero tempore quis. Sunt voluptates illum laudantium maiores alias impedit doloremque rem nam vero, omnis rerum! Dolor vitae nulla laborum quidem animi excepturi consectetur reiciendis vel repellendus, mollitia assumenda molestias eum quaerat ex adipisci dicta.
              </p>
              <div className="mt-9">
                <Link to="/blog" className="bg-gray-800 text-white px-6 py-3 text-xl uppercase tracking-wide hover:bg-red-800">Read Our blogs</Link>
              </div>
            </div>
            <div className="flex mt-10">
              <a href="https://www.facebook.com/" className="text-blue-700 text-2xl mr-4 hover:text-gray-800"><FaFacebookF /></a>
              <a href="https://x.com/?lang=en" className="text-blue-700 text-2xl mr-4 hover:text-gray-800"><FaTwitter /></a>
              <a href="https://www.instagram.com/" className="text-blue-700 text-2xl hover:text-gray-800"><FaInstagram /></a>
            </div>
          </div>
          <div className="md:w-2/5 mt-10 md:mt-0">
            <img src={SidImage} alt="Sid" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
