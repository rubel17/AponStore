import React from "react";
import "./Advertisement.css";
import adv from "../../../assets/image/banner-1.jpg";
import adv2 from "../../../assets/image/banner-2.jpg";
import adv3 from "../../../assets/image/banner-3.jpg";
import adv4 from "../../../assets/image/banner/rsz_free_delevery.jpg";
import adv5 from "../../../assets/image/banner/discount.png";
import adv6 from "../../../assets/image/banner/Order to relax.png";
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
      <div className="my-20">
        <Slider {...settings}>
          {/* Your carousel items */}
          <div className="relative overflow-hidden img-group">
            <img className="h-52 w-full" src={adv} alt="" />
            <img
              className="absolute secondary-img  h-52 w-full"
              src={adv4}
              alt=""
            />
          </div>
          <div className="relative overflow-hidden img-group2">
            <img className="h-52 w-full ml-3" src={adv2} alt="" />
            <img
              className="absolute secondary-img2 h-52 w-full ml-3"
              src={adv5}
              alt=""
            />
          </div>
          <div className="relative overflow-hidden img-group3 ml-3">
            <img className="h-52 w-full " src={adv3} alt="" />
            <img
              className="absolute secondary-img3  h-52 w-full"
              src={adv6}
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Advertisement;
