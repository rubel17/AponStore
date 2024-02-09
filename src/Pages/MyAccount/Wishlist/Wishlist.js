import React, { useState } from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";
const rk = [{}];

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

const ITEMS_PER_PAGE = 6; // Adjust this as needed
const TOTAL_PAGES = Math.ceil(products.length / ITEMS_PER_PAGE);
const Wishlist = ({ text = "ACI Pure Chickpea Flour" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsToShow = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  // Split the text into words
  const words = text.split(" ");
  // Slice the words array to get the first 4 words
  const slicedText = words.slice(0, 4).join(" ");
  return (
    <div className="w-full mb-20">
      {rk?.length === 0 ? (
        <div className="w-full">
          <div className="w-full">
            <svg
              style={{
                width: "30%",
                height: "30%",
              }}
              className="mx-auto"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="3"
              stroke="#bbb"
              fill="none"
            >
              <path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z" />
            </svg>
            <h1 className="text-2xl xl:text-5xl font-bold">
              This wishlist is empty.
            </h1>
            <p className="my-5 w-2/5 mx-auto text-gray-400">
              You don't have any products in the wishlist yet. You will find a
              lot of interesting products on our "Shop" page.
            </p>
            <Link
              to="/"
              className="bg-green-700 hover:bg-green-800 p-4 text-white"
            >
              RETURN TO SHOP
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10">
          {/* Display products for the current page */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  md:gap-2  2xl:mx-20">
            {productsToShow.map((product) => (
              <div key={product.id}>
                <Link
                  to={`/productDetails/${product.id}`}
                  className="bg-white shadow-md overflow-hidden"
                >
                  <object className="wishlistProduct mx-auto shadow  rounded  hover:bg-gray-100">
                    {/* Card Image */}
                    <div className="relative">
                      <img
                        className="wishlistProductImage mx-auto p-1 md:p-3 xl:p-3"
                        src={product?.img}
                        alt=""
                        title="ACI Pure Chickpea Flour"
                      />
                      <Link className="text-gray-700 absolute top-0 left-2 text-sm font-semibold">
                        X Remove
                      </Link>
                    </div>
                    {/* Card Content */}
                    <div className="">
                      <p className="truncate font-bold">{slicedText}</p>
                      {/* <h2 className="text-lg font-semibold">{product.name}</h2> */}
                      <p className="text-gray-400 my-2 xl:my-1">
                        Daily Needs, Salt
                      </p>
                      {/* <p>{product.description}</p> */}
                      <p className="text-orange-900 mb-3">85.00৳ </p>
                      <Link className="bg-green-700 hover:bg-green-800 py-3 px-8 text-white font-medium">
                        Add To Cart
                      </Link>
                    </div>
                  </object>
                </Link>
              </div>
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
      )}
    </div>
  );
};

export default Wishlist;
