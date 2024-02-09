import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import PremiumProductIcon from "../../../assets/icon/best seller icon.png";
import rightArrow from "../../../assets/icon/rightArrow.png";
import BabyProductIcon from "../../../assets/icon/Diapers.H03.2k.png";
import DailyProductIcon from "../../../assets/icon/plastic-red-flying-basket-isolated-white-background-empty-shopping-cart-3d-rendering.png";
import DryProductIcon from "../../../assets/icon/Cookie Jars.H03.2k.png";
import StationeryIcon from "../../../assets/icon/Pencil Cup.H03.2k.png";
import HygieneProductIcon from "../../../assets/icon/different-soap-bars-pump-bottle-liquid-soap-isolated-white-background.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import orderToRelax from "../../../assets/image/banner/Order to relax.png";
import Sotejota from "../../../assets/image/banner/sotejota.jpeg";
import discount from "../../../assets/image/banner/discount.png";
import freeDelivery from "../../../assets/image/banner/rsz_free_delevery.jpg";

const Banner = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Simulate an auto-animation effect by toggling the button's active state at regular intervals
    const intervalId = setInterval(() => {
      setIsActive((prevIsActive) => !prevIsActive);
    }, 1000); // Change the interval duration as needed

    return () => {
      // Cleanup the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="">
        <div className="relative flex  items-center">
          <div className="flex">
            {/* BROWSE CATEGORIES */}
            <div className="w-1/5 hidden xl:block  xl:mr-6 2xl:mr-0">
              <div className="hidden xl:block">
                <ul tabIndex={0} className="-mt-2 border  w-72">
                  {/* Sidebar content here */}

                  <Link
                    to="/Shop/Premium-Products"
                    className="flex items-center text-xs font-semibold product-border py-4 pl-5 hover:bg-gray-100"
                  >
                    <img
                      className="h-5 w-5 mr-2"
                      src={PremiumProductIcon}
                      alt=""
                    />
                    <p>PREMIUM PRODUCTS</p>
                  </Link>
                  <li className="product-border text-xs font-semibold">
                    <div className="relative group">
                      <Link
                        to="/Shop/Baby-Products"
                        className="flex justify-between py-3.5 pl-5 hover:bg-gray-100"
                      >
                        <div className="flex">
                          <img
                            className="h-5 w-5 mr-2"
                            src={BabyProductIcon}
                            alt=""
                          />
                          <p>BABY PRODUCT</p>
                        </div>
                        <p aria-hidden="true">
                          <img
                            className="w-3 h-3 mr-2"
                            src={rightArrow}
                            alt=""
                          />
                        </p>
                      </Link>

                      <ul className="absolute border w-64 top-2 left-72 -ml-0.5 invisible group-hover:visible bg-white text-gray-500 text-start z-10">
                        <li className="text-xs  font-medium product-border hover:bg-gray-500 hover:text-white  py-3 pl-5">
                          <Link>Baby Accessories</Link>
                        </li>
                        <li className="text-xs  font-medium product-border py-3 pl-5 hover:bg-gray-500 hover:text-white">
                          <Link>Baby Food</Link>
                        </li>
                        <li className="text-xs  font-medium product-border py-3 pl-5 hover:bg-gray-500 hover:text-white">
                          <Link>Baby Oral Care</Link>
                        </li>
                        <li className="text-xs  font-medium product-border py-3 pl-5 hover:bg-gray-500 hover:text-white">
                          <Link>Baby Skincare</Link>
                        </li>
                        <li className="text-xs  font-medium product-border py-3 pl-5 hover:bg-gray-500 hover:text-white">
                          <Link>Diapers</Link>
                        </li>
                        <li className="text-xs  font-medium product-border py-3 pl-5 hover:bg-gray-500 hover:text-white">
                          <Link>Feeders</Link>
                        </li>
                        <li className="text-xs  font-medium product-border py-3 pl-5 hover:bg-gray-500 hover:text-white">
                          <Link>Newborn Essentials</Link>
                        </li>
                        <li className="text-xs  font-medium product-border py-3 pl-5 hover:bg-gray-500 hover:text-white">
                          <Link>Wipes</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="product-border text-xs font-semibold">
                    <div className="relative group">
                      <Link
                        to="/Shop/Daily-Needs"
                        className="flex justify-between py-3.5 pl-5 hover:bg-gray-100"
                      >
                        <div className="flex">
                          <img
                            className="h-5 w-5 mr-2"
                            src={DailyProductIcon}
                            alt=""
                          />
                          <p>DAILY NEEDS</p>
                        </div>
                        <p aria-hidden="true">
                          <img
                            className="w-3 h-3 mr-2"
                            src={rightArrow}
                            alt=""
                          />
                        </p>
                      </Link>

                      <ul className="absolute border w-64 -top-36 left-72 -ml-0.5 invisible group-hover:visible bg-white text-gray-500 text-start z-10">
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white  py-3 pl-5">
                          <Link>Cool drinks</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white   py-3 pl-5">
                          <Link>Energy Biscuits</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white  py-3 pl-5">
                          <Link>Flour</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white  py-3 pl-5">
                          <Link>Lays Chips</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white py-3 pl-5">
                          <Link>Liquid Soap</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white  py-3 pl-5">
                          <Link>Lux Soap</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white  py-3 pl-5">
                          <Link>Noodles</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white  py-3 pl-5">
                          <Link>Powder Milk</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white py-3 pl-5">
                          <Link>Rice</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white py-3 pl-5">
                          <Link>salt</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white py-3 pl-5">
                          <Link>Shampoo</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white py-3 pl-5">
                          <Link>Sugar</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white py-3 pl-5">
                          <Link>Tea</Link>
                        </li>
                        <li className="text-xs font-medium product-border hover:bg-gray-500 hover:text-white py-3 pl-5">
                          <Link>Washing Powder</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Link
                    to="/Shop/Dry-Product"
                    className="flex items-center  text-xs font-semibold product-border py-4 pl-5 hover:bg-gray-100"
                  >
                    <img className="h-5 w-5 mr-2" src={DryProductIcon} alt="" />
                    <p>DRY FOODS</p>
                  </Link>
                  <Link
                    to="/Shop/Stationery"
                    className="flex items-center text-xs font-semibold product-border py-4 pl-5 hover:bg-gray-100"
                  >
                    <img className="h-5 w-5 mr-2" src={StationeryIcon} alt="" />
                    <p>STATIONERY</p>
                  </Link>
                  <Link
                    to="/Shop/Hygiene-Product"
                    className="flex items-center text-xs font-semibold product-border py-4 pl-5 hover:bg-gray-100"
                  >
                    <img
                      className="h-5 w-5 mr-2"
                      src={HygieneProductIcon}
                      alt=""
                    />
                    <p>HYGIENE PRODUCTS</p>
                  </Link>
                </ul>
              </div>
            </div>

            {/* banner */}
            <div className="xl:mx-5">
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={true}
                showStatus={false}
              >
                <div>
                  <img className="h-72" src={orderToRelax} alt="" />
                </div>
                <div>
                  <img className="h-72" src={Sotejota} alt="" />
                </div>
                <div>
                  <img className="h-72" src={discount} alt="" />
                </div>
                <div>
                  <img className="h-72" src={freeDelivery} alt="" />
                </div>

                {/* Add more slides as needed */}
              </Carousel>
            </div>

            {/* Upload Bazar List */}
            <div className="border hidden xl:block">
              <div className="w-80">
                <h4 className="text-xl font-bold  py-4">
                  Upload Your Bazar List
                </h4>
                <input type="file" className="w-64 text-gray-400 border mb-4" />
                <button className="btn btn-wide bg-orange-900 text-white rounded-none mb-4">
                  Send
                </button>
                <div>
                  <button
                    className={`addToCart-btn glow-on-hover relative px-4 py-2 bg-white text-black text-sm shadow-md focus:outline-none ${
                      isActive ? "border-orange-900" : "border-transparent"
                    }`}
                  >
                    <span
                      className={`absolute inset-0 ${
                        isActive ? "border" : "border-0"
                      } border-orange-900  transition-transform`}
                    ></span>
                    <div className="flex items-center">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="white"
                        className="bg-orange-900 "
                        width="12px"
                        height="12px"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                      >
                        <path d="M23,16L9,26V6L23,16z" />
                      </svg>
                      <span className="ml-2 font-semibold">
                        Online Medicine Delivery
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
