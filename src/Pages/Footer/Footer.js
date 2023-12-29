import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import paymentSystem from "../../assets/image/New_Project__5_-removebg-preview.png";
import facebook from "../../assets/icon/facebook.png";
import instagram from "../../assets/icon/instagram.png";
import pinterest from "../../assets/icon/pinterest.png";
import Linkedin from "../../assets/icon/Linkedin.png";
import Twitter from "../../assets/icon/Twitter.png";
import Youtube from "../../assets/icon/Youtube.png";
import tiktok from "../../assets/icon/tiktok.png";

const Footer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };
  return (
    <div className="footer-bg my-10">
      <footer className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-3 md:mx-10">
        <div className="text-start">
          <span className="text-lg font-bold">ADDRESS</span>
          <div className="text-gray-500 text-lg mt-3">
            <p className="leading-8">H-461, Road-7, Avenue-5,</p>

            <p> Mirpur DOHS, Dhaka 1216</p>
          </div>
        </div>
        <div className=" text-start">
          <span className="text-lg font-bold">OUR PRODUCTS</span>
          <div className="text-lg text-gray-500 mt-3">
            <p>
              <Link to="/">Baby Product</Link>
            </p>
            <p className="py-3">
              <Link to="/shop">Daily Needs</Link>
            </p>
            <p>
              <Link to="/blog">Stationary</Link>
            </p>

            <p className="py-3">
              <Link to="/allProduct/clearanceSale">Hygiene Products</Link>
            </p>
          </div>
        </div>
        <div className=" text-start">
          <span className="text-lg font-bold">USEFUL LINKS</span>
          <div className="text-start text-lg text-gray-500 mt-3">
            <p>About</p>
            <p className="py-4">Contact Us</p>
            <p className="pb-4">Terms & Conditions</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className=" text-start">
          <span className="text-lg font-bold">JOIN OUR NEWSLETTER:</span>
          <p className="md:text-xl text-start text-gray-500 my-3">
            Will be used in accordance with our Privacy Policy
          </p>
          <div className="flex items-center md:w-full">
            <input
              type="text"
              placeholder="Your Email address"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white border p-3 w-full  focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="flex bg-green-700 text-white p-3 hover:bg-red-700 focus:outline-none"
            >
              <p className="mr-2">SIGN</p>
              <p>UP</p>
            </button>
          </div>
        </div>
      </footer>
      <hr />
      <div className="lg:flex mt-4  mb-5">
        <div className="lg:w-1/2 mb-7 text-left ml-4 lg:ml-16 font-semibold">
          <p>Payment System:</p>
          <div className="w-72 md:w-96">
            <img src={paymentSystem} alt="" />
          </div>
        </div>
        <div className="lg:w-1/2 font-semibold text-left ml-4 md:ml-0">
          <p>Our Social Links:</p>
          <div className="w-1/2 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 ml-4 mt-4">
            <Link to="https://www.facebook.com/" target="_blank">
              <img className="w-10 h-10" src={facebook} alt="" />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <img className="w-10 h-10" src={Linkedin} alt="" />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <img className="w-10 h-10" src={Twitter} alt="" />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <img className="w-10 h-10" src={instagram} alt="" />
            </Link>
            <Link to="https://www.pinterest.com/" target="_blank">
              <img className="w-10 h-10" src={pinterest} alt="" />
            </Link>
            <Link to="https://www.pinterest.com/" target="_blank">
              <img className="w-10 h-10" src={Youtube} alt="" />
            </Link>
            <Link to="https://www.pinterest.com/" target="_blank">
              <img className="w-10 h-10" src={tiktok} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center pt-5 pb-6">
        <p>
          <span className="font-bold">Apon-Store</span> - 2023 CREATED BY
          <span className="font-bold"> P. Cube Digital.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
