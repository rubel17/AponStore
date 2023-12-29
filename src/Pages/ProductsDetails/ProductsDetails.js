import React, { useState } from "react";
import "./ProductsDetails.css";
import cocola from "../../assets/image/cocola-chicken.webp";
import cocola2 from "../../assets/image/cocola-chicken2.webp";
import downArrow from "../../assets/icon/dwonArrow.png";
import mrNoodles from "../../assets/image/mr-noodles.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import { Carousel } from "react-responsive-carousel";
import Description from "./Description/Description";
import Reviews from "./Reviews/Reviews";
import ShippingAndDelivery from "./ShippingAndDelivery/ShippingAndDelivery";

const products = [
  // List of products
  // Each product can be an object with properties like id, name, description, image, etc.
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    img: "https://i0.wp.com/www.farmersbestbd.com/wp-content/uploads/2020/08/WESS01-500-.png?w=386&ssl=1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    img: "https://chaldn.com/_mpimage/nestle-nido-1-growing-up-milk-powder-1-3-y-350-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D112646&q=best&v=1&m=400&webp=1",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description 3",
    img: "https://chaldn.com/_mpimage/nestle-cerelac-4-apple-corn-flakes-12-m-350-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D139068&q=best&v=1&m=400&webp=1",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description 4",
    img: "https://chaldn.com/_mpimage/heinz-parsnip-carrot-sweet-potato-4-6-months-110-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D98203&q=best&v=1&m=400&m=400&webp=1",
  },
  {
    id: 5,
    name: "Product 4",
    description: "Description 4",
    img: "https://chaldn.com/_mpimage/ensure-plus-drink-powder-vanilla-flavour-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D108646&q=best&v=1&m=400&m=400&webp=1",
  },
  { id: 6, name: "Product 4", description: "Description 4" },
  { id: 7, name: "Product 4", description: "Description 4" },
  { id: 8, name: "Product 4", description: "Description 4" },
  { id: 9, name: "Product 4", description: "Description 4" },
  { id: 10, name: "Product 4", description: "Description 4" },
  { id: 11, name: "Product 4", description: "Description 4" },
  { id: 12, name: "Product 4", description: "Description 4" },
  { id: 13, name: "Product 4", description: "Description 4" },
  { id: 14, name: "Product 4", description: "Description 4" },
  { id: 15, name: "Product 4", description: "Description 4" },
  {
    id: 16,
    name: "Product 4",
    description: "Description 4",
    img: "https://chaldn.com/_mpimage/rohs-fingertip-pulse-oximeter-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D60782&q=best&v=1&m=400&webp=1",
  },
  {
    id: 17,
    name: "Product 4",
    description: "Description 4",
    img: "https://chaldn.com/_mpimage/fogg-body-spray-fresh-fougere-120-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D71842&q=best&v=1&m=400&webp=1",
  },
  { id: 18, name: "Product 4", description: "Description 4" },
  { id: 19, name: "Product 4", description: "Description 4" },
  { id: 20, name: "Product 4", description: "Description 4" },
  { id: 21, name: "Product 4", description: "Description 4" },
  { id: 22, name: "Product 4", description: "Description 4" },
  { id: 23, name: "Product 4", description: "Description 4" },
  { id: 24, name: "Product 4", description: "Description 4" },
  { id: 25, name: "Product 4", description: "Description 4" },
  { id: 26, name: "Product 4", description: "Description 4" },
  { id: 27, name: "Product 4", description: "Description 4" },
  { id: 28, name: "Product 4", description: "Description 4" },
  { id: 29, name: "Product 4", description: "Description 4" },
  {
    id: 30,
    name: "Product 4",
    description: "Description 4",
    img: "https://chaldn.com/_mpimage/ensure-plus-drink-powder-vanilla-flavour-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D108646&q=best&v=1&m=400&m=400&webp=1",
  },
  {
    id: 31,
    name: "Product 4",
    description: "Description 4",
    img: "https://chaldn.com/_mpimage/m2-sensation-strawberry-dotted-condoms-3-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61668&q=best&v=1&m=400&webp=1",
  },
  // ... add more products
];

const ProductsDetails = () => {
  //   const { user } = useContext(AuthContext);
  // const productDetail = useLoaderData({});
  //   const { data: relatedProducts = [], refetch } = useQuery({
  //     queryKey: [`allProduct/category`],
  //     queryFn: () =>
  //       fetch(
  //         `https://y-rubelrk.vercel.app/allProduct/${productDetail?.category}`
  //       ).then((res) => res.json()),
  //   });

  const [isDescription, setIsDescription] = useState(false);
  const [isReviews, setIsReviews] = useState(false);
  const [isShippingDelivery, setIsShippingDelivery] = useState(false);
  const [descriptionColor, setDescriptionColor] = useState(false);
  return (
    <div>
      {/* product information */}
      <div className="xl:flex">
        <div className="xl:w-1/3 mx-auto">
          <div className="">
            <Carousel
              showArrows={true}
              showThumbs={true}
              infiniteLoop={false}
              autoPlay={true}
              interval={5000}
              stopOnHover={true}
              showStatus={false}
            >
              <div>
                <img src={cocola} alt="" />
              </div>
              <div>
                <img src={cocola2} alt="" />
              </div>
              <div>
                <img src={mrNoodles} alt="" />
              </div>
              {/* Add more slides as needed */}
            </Carousel>
          </div>
        </div>
        <div className="xl:w-1/2 ml-4 mb-6">
          <div className="text-start">
            <h1 className="text-3xl font-medium my-5">
              Mr. Noodles Korean Super Spicy 496 gm
            </h1>
            <h3 className="text-orange-900 text-2xl font-semibold mb-4">
              180.00৳
            </h3>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Link className="border p-2">-</Link>
                <span className="mx-2">1</span>
                <Link className="border p-2">+</Link>
              </div>
              <div>
                <Link className="ml-4 px-4 py-3 bg-green-600 text-white">
                  ADD TO CART
                </Link>
              </div>
            </div>
            <div className="flex border-b items-center pb-5">
              <Link className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9v40h16c35.3 0 64-28.7 64-64V153.3C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128H320v40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9V128H176c-35.3 0-64 28.7-64 64V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
                </svg>
                <p className="ml-1 pr-4 font-medium">Compare</p>
              </Link>
              <Link className="flex items-center">
                <svg
                  fill="#000000"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z" />
                </svg>
                <p className="font-medium">Add to wishlist</p>
              </Link>
            </div>
            <div className="flex items-center mt-5">
              <h3 className="font-semibold">Categories:</h3>
              <p className="text-gray-400 ml-1">Noodles</p>
              <p className="text-gray-400 ml-1">, Daily Needs</p>
            </div>
            <div className="flex items-center">
              <h3 className="font-semibold my-2">Tags:</h3>
              <p className="text-gray-400 ml-1"> Daily Needs , </p>
              <p className="text-gray-400 ml-1"> Noodles</p>
            </div>
            <div className="flex items-center">
              <h3 className="font-semibold">Share: </h3>
              <div className="">
                <Link to="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon className="ml-5" icon={faFacebookF} />
                </Link>
                <Link to="https://www.linkedin.com/" target="_blank">
                  <FontAwesomeIcon className=" ml-5" icon={faLinkedinIn} />
                </Link>
                <Link to="https://twitter.com/" target="_blank">
                  <FontAwesomeIcon className="ml-5" icon={faTwitter} />
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <FontAwesomeIcon className="ml-5" icon={faInstagram} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* phone view
          product information
      */}
      {/* Description */}
      <div
        onClick={() => setDescriptionColor(!descriptionColor)}
        className="xl:hidden border-b border-t py-3"
      >
        <div
          className="flex justify-between items-center cursor-pointer mx-10"
          onClick={() => setIsDescription(!isDescription)}
        >
          <h2
            className={`text-lg font-semibold  ${
              descriptionColor ? "text-orange-800" : ""
            }`}
          >
            {descriptionColor ? "Description" : "Description"}
          </h2>
          <span className="text-sm">
            {isDescription ? (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                <path
                  d="M13 30L25 18L37 30"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                <path
                  d="M37 18L25 30L13 18"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
        <Description isDescription={isDescription}></Description>
      </div>
      {/* Reviews */}
      <div className="xl:hidden border-b py-3">
        <div
          className="flex justify-between items-center cursor-pointer mx-10"
          onClick={() => setIsReviews(!isReviews)}
        >
          <h2 className="text-lg font-semibold">Reviews</h2>
          <span className="text-sm">
            {isReviews ? (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                <path
                  d="M13 30L25 18L37 30"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                <path
                  d="M37 18L25 30L13 18"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
        <Reviews isReviews={isReviews}></Reviews>
      </div>
      {/* Shipping & Delivery */}
      <div className="xl:hidden border-b py-3 mb-10">
        <div
          className="flex justify-between items-center cursor-pointer mx-10"
          onClick={() => setIsShippingDelivery(!isShippingDelivery)}
        >
          <h2 className="text-lg font-semibold">Shipping & Delivery</h2>
          <span className="text-sm">
            {isShippingDelivery ? (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                <path
                  d="M13 30L25 18L37 30"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                <path
                  d="M37 18L25 30L13 18"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
        <ShippingAndDelivery
          isShippingDelivery={isShippingDelivery}
        ></ShippingAndDelivery>
      </div>

      {/* desktop view
          product information
      */}
      <div className="my-10 hidden xl:block">
        <div className="xl:border-b-2">
          <div className="lg:flex justify-center mb-2  ml-5 lg:ml-0">
            <p>
              <Link
                to={`/productDetails/${products[1]?.id}`}
                className=" xl:mr-28 pr-2 hover:border-b-2 xl:pb-2.5 hover:border-b-orange-900 border-b-2 xl:border-b-0"
              >
                Description
              </Link>
            </p>

            <p className="mb-3 lg:mb-0">
              <Link
                to={`/productDetails/${products[1]}/reviews`}
                className="xl:mr-28 pr-2 hover:border-b-2 xl:pb-2.5 hover:border-b-orange-900 border-b-2 lg:border-b-0 active:border-b-2"
              >
                Reviews
              </Link>
            </p>

            <p>
              <Link
                to={`/productDetails/${products[1]}/shipping`}
                className="hover:border-b-2 xl:pb-2.5 hover:border-b-orange-900 border-b-2 lg:border-b-0"
              >
                Shipping & Delivery
              </Link>
            </p>
          </div>
        </div>

        <Outlet></Outlet>
        <hr className="mt-8" />
      </div>
      {/* Related Products */}
      <div className="bg-gray-50">
        <div>
          <h1 className="text-2xl font-bold text-start pb-3 m-3 border-b-2">
            <span className="border-b-2 border-orange-900 pb-3.5">
              Related Products
            </span>
          </h1>
        </div>
        {/* slider */}
        <RelatedProduct></RelatedProduct>
      </div>
    </div>
  );
};

export default ProductsDetails;
