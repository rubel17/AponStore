import React from "react";
import "./MainCategories.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import PremiumProductIcon from "../../../assets/icon/best seller icon.png";
import BabyProductIcon from "../../../assets/icon/Diapers.H03.2k.png";
import DailyProductIcon from "../../../assets/icon/plastic-red-flying-basket-isolated-white-background-empty-shopping-cart-3d-rendering.png";
import DryProductIcon from "../../../assets/icon/Cookie Jars.H03.2k.png";
import StationeryIcon from "../../../assets/icon/Pencil Cup.H03.2k.png";
import ShoppingCart from "../../../assets/icon/shopping-bag.png";
import HygieneProductIcon from "../../../assets/icon/different-soap-bars-pump-bottle-liquid-soap-isolated-white-background.png";

const MainCategories = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2,
    },
  };
  return (
    <div className="bg-gray-50">
      <div>
        <h1 className="text-2xl font-bold text-start pb-3 m-3 border-b-2">
          <span className="border-b-2 border-orange-900 pb-3.5"> CATEGORY</span>
        </h1>
      </div>
      {/* slider */}
      <div>
        <Carousel
          className="h-52 mb-5"
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // Server Side Rendering
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={6000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerclassName="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop"
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
        >
          {/* Add carousel items here */}
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={PremiumProductIcon} alt="" />
            <Link className="text-medium font-semibold">PREMIUM PRODUCTS</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={BabyProductIcon} alt="" />
            <Link className="text-medium font-semibold">BABY PRODUCTS</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={DailyProductIcon} alt="" />
            <Link className="text-medium font-semibold">DAILY NEEDS</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={DryProductIcon} alt="" />
            <Link className="text-medium font-semibold">DRY FOODS</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={StationeryIcon} alt="" />
            <Link className="text-medium font-semibold">STATIONERY</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={ShoppingCart} alt="" />
            <Link className="text-medium font-semibold">Shopping Cart</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={PremiumProductIcon} alt="" />
            <Link className="text-medium font-semibold">PREMIUM PRODUCTS</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={HygieneProductIcon} alt="" />
            <Link className="text-medium font-semibold">HYGIENE PRODUCTS</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={PremiumProductIcon} alt="" />
            <Link className="text-medium font-semibold">PREMIUM PRODUCTS</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>
          <div className=" flex  flex-col items-center">
            <img className="h-20 w-20" src={HygieneProductIcon} alt="" />
            <Link className="text-medium font-semibold">PREMIUM PRODUCTS</Link>
            <p className="text-gray-400 text-sm">
              <span>28</span> products
            </p>
          </div>

          {/* Add more items as needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default MainCategories;
