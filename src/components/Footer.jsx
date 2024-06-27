import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer bg-gradient-to-b from-pink-200 to-pink-50 pt-10">
      <footer className="pb-1">
        <div className="container mx-auto px-2 mb-4 ">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/4 p-2 ml-12">
              <span className="links-head font-bold block mb-2">Features</span>
              <ul className="footer-links list-none p-0">
                <li className="mb-2"><a href="/products" className="text-black hover:text-blue-800">Business Directory</a></li>
                <li className="mb-2"><a href="/" className="text-black hover:text-blue-800">Company Search</a></li>
                <li className="mb-2"><a href="/about" className="text-black hover:text-blue-800">Director Profile</a></li>
                <li className="mb-2"><a href="/about" className="text-black hover:text-blue-800">Company Directory</a></li>
                <li className="mb-2"><a href="/about" className="text-black hover:text-blue-800">Director Directory</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/4 p-2">
              <span className="links-head font-bold block mb-2">Quick Links</span>
              <ul className="footer-links list-none p-0">
                <li className="mb-2"><a href="/about" className="text-black hover:text-blue-800">About Us</a></li>
                <li className="mb-2"><a href="/" className="text-black hover:text-blue-800">Terms &amp; Conditions</a></li>
                <li className="mb-2"><a href="/" className="text-black hover:text-blue-800">Privacy Policy</a></li>
                <li className="mb-2"><a href="/contact" className="text-black hover:text-blue-800">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/4 p-2 mr-12">
              <img src="../../public/Footer.jpg" alt="theCompanyCheck" className="w-12" />
              <div className="clearfix"></div><br />
              <p>We love getting feedback from our customers. Connect with The Company Check on social media today.</p>
              <ul className="footer-social-flex flex justify-center mt-2">
                <li className="mr-2">
                  <a href="//www.facebook.com/The-Company-Check-104898894321356" aria-label="facebook" target="_blank" rel="nofollow noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="mr-2">
                  <a href="//twitter.com/TheCompanyCheck" aria-label="twitter" target="_blank" rel="nofollow noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                    <FaTwitter />
                  </a>
                </li>
                <li className="mr-2">
                  <a href="//www.linkedin.com/company/the-company-check/" aria-label="linkedin" target="_blank" rel="nofollow noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="//www.youtube.com/channel/UCUtj-H5uYewlHCuJMSzI8bQ" aria-label="youtube" target="_blank" rel="nofollow noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full mt-4 ml-12 mr-12">
              <span className="font-bold block mb-2">Disclaimer</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                The Company Check is a registered information and data resource technology platform developed, owned and maintained solely by Celebrating Farmers Edge International private limited. The data we provide on The Company Check is sourced from reliable portals and we have greatly endeavoured to verify its authenticity and have made certain of its security. We, The Company Check, do not take any responsibility, express or implied, with regards to the quality, accuracy, timeliness, completeness, performance, fitness for a particular purpose of the data we provide and The Company Check is not liable for the same. Any information found on the platform of The Company Check cannot be sold, licensed, rented or redistributed by any person or entity in any form whatsoever.
              </p>
            </div>
          </div>
          
        </div>
      </footer>
      <div className="map mb-0">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.4148591643407!2d74.48635857445366!3d20.033058721232866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc39159b38bc53%3A0x6c21e5ef3d9dabf4!2sFARMEDGE%20INTERNATIONAL%20EXPORT%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1718623221212!5m2!1sen!2sin" width="100%" height="350"loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="copyright bg-gray-800 text-white text-center py-2 mt-4">
        <p>© 2024 The Company Check. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
