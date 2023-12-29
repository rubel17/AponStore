import React, { useState } from "react";
import "./ProductCategory.css";
import ProductCategoryBg from "../../assets/image/premium product bg.png";
import { Link } from "react-router-dom";

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

const ITEMS_PER_PAGE = 15; // Adjust this as needed
const TOTAL_PAGES = Math.ceil(products.length / ITEMS_PER_PAGE);

const ProductCategory = ({ text = "ACI Pure Chickpea Flour" }) => {
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
    <div className="-mt-2">
      {/* product banner */}
      <div className="relative">
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
      <div className="flex justify-between m-8">
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
            <option selected>Normal</option>
            <option>Normal Apple</option>
            <option>Normal Orange</option>
            <option>Normal Tomato</option>
          </select>
        </div>
      </div>

      {/* product to show per page  */}

      <div className="container mx-auto">
        {/* Display products for the current page */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-4">
          {productsToShow.map((product) => (
            <div
              key={product.id}
              className="productCategory mx-auto shadow  rounded  hover:bg-gray-100"
            >
              <Link
                to={`/productDetails/${product.id}`}
                className=" relative group bg-white shadow-md overflow-hidden"
              >
                {/* Card Image */}
                <img
                  className="productCategoryImage mx-auto p-1 md:p-3 xl:p-3"
                  src={product?.img}
                  alt=""
                  title="ACI Pure Chickpea Flour"
                />
                {/* hover button */}
                <div className="absolute top-1/3 right-2 md:right-1/2  invisible group-hover:visible">
                  <div className="flex  bg-gray-300">
                    <button className="m-2">
                      <svg
                        fill="#000000"
                        width="25px"
                        height="25px"
                        viewBox="0 0 56 56"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M 20.0079 39.6485 L 47.3596 39.6485 C 48.2735 39.6485 49.0703 38.8985 49.0703 37.8907 C 49.0703 36.8829 48.2735 36.1328 47.3596 36.1328 L 20.4063 36.1328 C 19.0704 36.1328 18.2501 35.1953 18.0391 33.7656 L 17.6641 31.3047 L 47.4062 31.3047 C 50.8281 31.3047 52.5859 29.1953 53.0783 25.8438 L 54.9532 13.4453 C 55.0003 13.1407 55.0468 12.7656 55.0468 12.5547 C 55.0468 11.4297 54.2030 10.6563 52.9142 10.6563 L 14.6407 10.6563 L 14.1954 7.6797 C 13.9610 5.8750 13.3048 4.9609 10.9141 4.9609 L 2.6876 4.9609 C 1.7501 4.9609 .9532 5.7813 .9532 6.7188 C .9532 7.6797 1.7501 8.5000 2.6876 8.5000 L 10.6094 8.5000 L 14.3594 34.2344 C 14.8516 37.5625 16.6094 39.6485 20.0079 39.6485 Z M 51.0623 14.1953 L 49.3987 25.4219 C 49.2110 26.8750 48.4377 27.7656 47.0548 27.7656 L 17.1485 27.7891 L 15.1563 14.1953 Z M 21.8594 51.0391 C 23.9688 51.0391 25.6563 49.375 25.6563 47.2422 C 25.6563 45.1328 23.9688 43.4453 21.8594 43.4453 C 19.7266 43.4453 18.0391 45.1328 18.0391 47.2422 C 18.0391 49.375 19.7266 51.0391 21.8594 51.0391 Z M 43.7735 51.0391 C 45.9062 51.0391 47.5939 49.375 47.5939 47.2422 C 47.5939 45.1328 45.9062 43.4453 43.7735 43.4453 C 41.6641 43.4453 39.9532 45.1328 39.9532 47.2422 C 39.9532 49.375 41.6641 51.0391 43.7735 51.0391 Z" />
                      </svg>
                    </button>
                    <button>
                      <svg
                        fill="#000000"
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                      </svg>
                    </button>
                    <button className="m-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9v40h16c35.3 0 64-28.7 64-64V153.3C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128H320v40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9V128H176c-35.3 0-64 28.7-64 64V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
                      </svg>
                    </button>
                    <button className="mr-2">
                      <svg
                        fill="#000000"
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Card Content */}
                <div className="">
                  <p className="truncate font-bold">{slicedText}</p>
                  {/* <h2 className="text-lg font-semibold">{product.name}</h2> */}
                  <p className="text-gray-400 my-2 xl:my-1">
                    Daily Needs, Salt
                  </p>
                  {/* <p>{product.description}</p> */}
                  <p className="text-orange-900">85.00৳ </p>
                </div>
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
    </div>
  );
};

export default ProductCategory;
