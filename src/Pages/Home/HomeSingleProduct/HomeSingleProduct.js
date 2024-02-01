import React, { useState } from "react";
import "./HomeSingleProduct.css";
import Heart from "../../../assets/icon/Youtube.png";
import Love from "../../../assets/icon/Twitter.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const HomeSingleProduct = ({ product }) => {
  const [wishList, setWishList] = useState(Heart);
  const { sellPrice, images, name, weight, _id, subcategories } = product;
  const words = name?.split(" ");
  // Slice the words array to get the first 4 words
  const slicedText = words?.slice(0, 4)?.join(" ");

  const handleAddToCart = (id) => {
    const productId = id;
    const Price = sellPrice;
    // const value = 1;
    const addToCartList = {
      name,
      weight,
      Price,
      images,
      productId,
      // value,
    };
    console.log(addToCartList);
    // add Data to localStorage
    // const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    // const cart = [...prevCartData, addToCartList];
    // localStorage.setItem("cartData", JSON.stringify(cart));
    // window.dispatchEvent(new Event("storage"));
    // toast.success("Add To Cart Successful");

    // const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    // const Data = prevCartData.filter((product) => {
    //   if (product.productId === id) {
    //     product.value = product.value + 1;
    //     return product.value;
    //   }
    // else {
    //   console.log("else");
    //   const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    //   console.log("in else");
    //   const cart = [...Data, addToCartList];
    //   localStorage.setItem("cartData", JSON.stringify(cart));
    // }
    // });

    // localStorage.setItem("cartData", JSON.stringify(Data));
    // window.dispatchEvent(new Event("storage"));
    // toast.success("Add To Cart Successful");

    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const existingProduct = prevCartData.find((item) => item.productId === id);
    if (existingProduct) {
      const updatedCart = prevCartData.map((item) =>
        item.productId === id ? { ...item, value: item.value + 1 } : item
      );
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("storage"));
      toast.success("Add To Cart Successful");
    } else {
      const updatedCart = [...prevCartData, { ...addToCartList, value: 1 }];
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("storage"));
      toast.success("Add To Cart Successful");
    }
  };

  const handleAddToWishList = (id) => {
    let value = wishList;
    const productId = id;
    const Price = parseInt(sellPrice);
    const AddToWishList = {
      name,
      Price,
      weight,
      images,
      productId,
    };
    if (value === Heart) {
      setWishList(Love);
      const prevWishData = JSON.parse(localStorage.getItem("wishData")) || [];
      const wish = [...prevWishData, AddToWishList];
      localStorage.setItem("wishData", JSON.stringify(wish));
      window.dispatchEvent(new Event("storage"));
      // toast.success("Add To Wish Successful");
    } else {
      setWishList(Heart);
      const prevWishData = JSON.parse(localStorage.getItem("wishData")) || [];
      const wishData = prevWishData.filter(
        (product) => product.productId !== id
      );
      localStorage.setItem("wishData", JSON.stringify(wishData));
      window.dispatchEvent(new Event("storage"));
      // toast.error("Delete To Wish Successful");
    }
  };
  return (
    <Link
      to={`/productDetails/${_id}`}
      className="totalProductTS relative group hover:bg-gray-200  mx-auto bg-white overflow-hidden"
    >
      {/* Card Image */}
      <img
        className="productImageTS mx-auto"
        src={images}
        alt=""
        title="ACI Pure Chickpea Flour"
      />
      {/* hover button */}

      <div className="absolute top-1/3 TS-button-position xl:invisible group-hover:visible">
        <object className="flex items-center  bg-gray-100 shadow-lg">
          <Link className="m-2" onClick={() => handleAddToCart(_id)}>
            <svg
              fill="#000000"
              width="25px"
              height="25px"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 20.0079 39.6485 L 47.3596 39.6485 C 48.2735 39.6485 49.0703 38.8985 49.0703 37.8907 C 49.0703 36.8829 48.2735 36.1328 47.3596 36.1328 L 20.4063 36.1328 C 19.0704 36.1328 18.2501 35.1953 18.0391 33.7656 L 17.6641 31.3047 L 47.4062 31.3047 C 50.8281 31.3047 52.5859 29.1953 53.0783 25.8438 L 54.9532 13.4453 C 55.0003 13.1407 55.0468 12.7656 55.0468 12.5547 C 55.0468 11.4297 54.2030 10.6563 52.9142 10.6563 L 14.6407 10.6563 L 14.1954 7.6797 C 13.9610 5.8750 13.3048 4.9609 10.9141 4.9609 L 2.6876 4.9609 C 1.7501 4.9609 .9532 5.7813 .9532 6.7188 C .9532 7.6797 1.7501 8.5000 2.6876 8.5000 L 10.6094 8.5000 L 14.3594 34.2344 C 14.8516 37.5625 16.6094 39.6485 20.0079 39.6485 Z M 51.0623 14.1953 L 49.3987 25.4219 C 49.2110 26.8750 48.4377 27.7656 47.0548 27.7656 L 17.1485 27.7891 L 15.1563 14.1953 Z M 21.8594 51.0391 C 23.9688 51.0391 25.6563 49.375 25.6563 47.2422 C 25.6563 45.1328 23.9688 43.4453 21.8594 43.4453 C 19.7266 43.4453 18.0391 45.1328 18.0391 47.2422 C 18.0391 49.375 19.7266 51.0391 21.8594 51.0391 Z M 43.7735 51.0391 C 45.9062 51.0391 47.5939 49.375 47.5939 47.2422 C 47.5939 45.1328 45.9062 43.4453 43.7735 43.4453 C 41.6641 43.4453 39.9532 45.1328 39.9532 47.2422 C 39.9532 49.375 41.6641 51.0391 43.7735 51.0391 Z" />
            </svg>
          </Link>
          <Link>
            <svg
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
            </svg>
          </Link>
          <Link className="m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9v40h16c35.3 0 64-28.7 64-64V153.3C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128H320v40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9V128H176c-35.3 0-64 28.7-64 64V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
            </svg>
          </Link>
          <Link className="mr-2">
            <svg
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z" />
            </svg>
          </Link>
        </object>
      </div>
      {/* Card Content */}
      <div className="">
        <p className="truncate font-bold w-44 mx-auto">{name}</p>
        <p className="text-gray-400 my-2 xl:my-1">
          {subcategories || " Daily Needs, Salt"}
        </p>
        <p className="text-orange-900">{sellPrice}.00৳ </p>
      </div>
    </Link>
  );
};

export default HomeSingleProduct;
