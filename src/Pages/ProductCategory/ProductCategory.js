import React, { useEffect, useState } from "react";
import "./ProductCategory.css";
import ProductCategoryBg from "../../assets/image/premium product bg.png";
import { useLoaderData } from "react-router-dom";

import SingleProductCategory from "./SingleProductCategory/SingleProductCategory";

const ProductCategory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = useLoaderData([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12; // Adjust this as needed
  const TOTAL_PAGES = Math.ceil(products.length / ITEMS_PER_PAGE);
  const productsToShow = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // refetch();
  return (
    <div className="-mt-2">
      {/* product banner */}
      <div className="relative mb-20">
        <div className="">
          <img
            className=" md:h-72 w-screen"
            src={ProductCategoryBg}
            //   src={allProductDetails[0]?.BannerImg}
            alt=""
          />
        </div>
        <div className="text-center absolute top-1/3 right-1/4 md:right-1/3 2xl:right-0 2xl:left-0  text-white">
          <h1 className="capitalize font-semibold text-xl md:text-3xl lg:text-5xl xl:text-6xl">
            {/* {allProductDetails[0]?.category} */}
            PREMIUM PRODUCTS
          </h1>
          <p>
            Home/
            <span className="capitalize">
              PREMIUM PRODUCTS
              {/* {allProductDetails[0]?.category} */}
            </span>
          </p>
        </div>
      </div>
      {/*Call the  product 9 12 18 24 */}
      <div className="AP-container flex justify-between">
        <div>
          <p>
            Home /
            <span className="ml-4 font-semibold capitalize">
              PREMIUM PRODUCTS
              {/* {allProductDetails[0]?.category} */}
            </span>
          </p>
        </div>
        <div className="xl:flex items-center hidden">
          <div className="flex items-center">
            <h3 className="font-semibold">Show</h3>
            <h3 className="font-semibold ml-1">Items</h3>
            <span className="mx-1">:</span>
          </div>
          <div className="flex items-center active:text-black">
            <button className="mx-2 text-gray-400 hover:text-black">9</button>
            <span className="text-gray-400">/</span>
            <button className="mx-2 text-gray-400 hover:text-black">12</button>
            <span className="text-gray-400">/</span>
            <button className="mx-2 text-gray-400 hover:text-black">18</button>
            <span className="text-gray-400">/</span>
            <button className="mx-2 text-gray-400 hover:text-black">24</button>
          </div>
          <select className="ml-3 select shadow border-0 bg-white w-full max-w-xs">
            <option defaultValue="selected">Normal</option>
            <option>Normal Apple</option>
            <option>Normal Orange</option>
            <option>Normal Tomato</option>
          </select>
        </div>
      </div>

      {/* product to show per page  */}
      <div className="mt-10">
        {/* Display products for the current page */}
        <div className="AP-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {productsToShow.map((product) => (
            <SingleProductCategory
              key={product._id}
              product={product}
            ></SingleProductCategory>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="mt-6">
          {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
            <button
              key={index + 1}
              className={`mx-1 px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
