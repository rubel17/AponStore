import React from "react";
import "./Advertisement.css";
import adv from "../../../assets/image/banner-1.jpg";
import adv2 from "../../../assets/image/banner-2.jpg";
import adv3 from "../../../assets/image/banner-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Advertisement = () => {
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mx-5 my-20">
        <Slider {...settings}>
          {/* Your carousel items */}
          <div className="">
            <img className="h-52 w-full" src={adv} alt="" />
          </div>
          <div className="">
            <img className="h-52 w-full ml-3" src={adv2} alt="" />
          </div>
          <div>
            <img className="h-52 w-full ml-6" src={adv3} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Advertisement;
