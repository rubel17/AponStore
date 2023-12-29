import React, { useState } from "react";
import PremiumProductIcon from "../../assets/icon/best seller icon.png";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import rightArrow from "../../assets/icon/rightArrow.png";
import BabyProductIcon from "../../assets/icon/Diapers.H03.2k.png";
import DailyProductIcon from "../../assets/icon/plastic-red-flying-basket-isolated-white-background-empty-shopping-cart-3d-rendering.png";
import DryProductIcon from "../../assets/icon/Cookie Jars.H03.2k.png";
import StationeryIcon from "../../assets/icon/Pencil Cup.H03.2k.png";
import ShoppingCart from "../../assets/icon/shopping-bag.png";
import calling from "../../assets/icon/phone.svg";
import HygieneProductIcon from "../../assets/icon/different-soap-bars-pump-bottle-liquid-soap-isolated-white-background.png";
import CartList from "../Header/CartList/CartList";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const CategoriesInfo = () => {
  const [cartModal, setCartModal] = useState(false);
  const [babyProduct, setBabyProduct] = useState(false);
  const [dailyNeeds, setDailyNeeds] = useState(false);
  // const [account, setAccount] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };

  const babyProductList = () => {
    setBabyProduct(!babyProduct);
  };
  const dailyNeedsList = () => {
    setDailyNeeds(!dailyNeeds);
  };
  // const accountList = () => {
  //   setAccount(!account);
  // };

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 dark:bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center">
                {/* BROWSE CATEGORIES */}
                <div className="w-1/5 hidden xl:block z-20">
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="bg-orange-900 text-white w-72 py-3 flex items-center"
                    >
                      <Bars3Icon
                        className="block h-6 w-6 mx-4"
                        aria-hidden="true"
                      />
                      <p className="text-sm"> BROWSE CATEGORIES</p>

                      <svg
                        className="ml-12  w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="770"
                        height="392"
                        viewBox="0 0 770 392"
                        fill="none"
                      >
                        <path
                          d="M6.40446 33.1082L371.536 385.724C372.769 386.862 374.096 387.81 375.519 388.664C382.724 393.025 392.111 392.172 398.464 386.104L763.596 33.4874C771.276 26.0918 771.37 13.6711 763.596 6.18073C756.2 -1.02519 744.253 -0.645921 736.858 6.56001L385.095 346.187C385.095 346.187 385.095 346.187 385 346.187L33.0474 6.18076C25.6519 -1.02516 13.7052 -1.30962 6.30964 5.80149C-1.37036 13.2919 -1.27554 25.7126 6.40446 33.1082Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content shadow bg-white  border w-72"
                    >
                      {/* Sidebar content here */}

                      <li className="flex items-center text-xs font-semibold product-border py-4 pl-5 hover:bg-gray-100">
                        <img
                          className="h-5 w-5 mr-2"
                          src={PremiumProductIcon}
                          alt=""
                        />
                        <Link to="/allProduct/premiumProducts">
                          PREMIUM PRODUCTS
                        </Link>
                      </li>
                      <li className="product-border text-xs font-semibold">
                        <div className="relative group">
                          <div className="flex justify-between py-3.5 pl-5 hover:bg-gray-100">
                            <div className="flex">
                              <img
                                className="h-5 w-5 mr-2"
                                src={BabyProductIcon}
                                alt=""
                              />
                              <Link>BABY PRODUCT</Link>
                            </div>
                            <p aria-hidden="true">
                              <img
                                className="w-3 h-3 mr-2"
                                src={rightArrow}
                                alt=""
                              />
                            </p>
                          </div>

                          <ul className="absolute border w-64 top-2 left-72 invisible group-hover:visible bg-white text-gray-500 text-start">
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
                        <div class="relative group">
                          <div className="flex justify-between py-3.5 pl-5 hover:bg-gray-100">
                            <div className="flex">
                              <img
                                className="h-5 w-5 mr-2"
                                src={DailyProductIcon}
                                alt=""
                              />
                              <Link>DAILY NEEDS</Link>
                            </div>
                            <p aria-hidden="true">
                              <img
                                className="w-3 h-3 mr-2"
                                src={rightArrow}
                                alt=""
                              />
                            </p>
                          </div>

                          <ul className="absolute border w-64 -top-36 left-72 invisible group-hover:visible bg-white text-gray-500 text-start ">
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
                      <li className="flex items-center  text-xs font-semibold product-border py-4 pl-5 hover:bg-gray-100">
                        <img
                          className="h-5 w-5 mr-2"
                          src={DryProductIcon}
                          alt=""
                        />
                        <Link>DRY FOODS</Link>
                      </li>
                      <li className="flex items-center text-xs font-semibold product-border py-4 pl-5 hover:bg-gray-100">
                        <img
                          className="h-5 w-5 mr-2"
                          src={StationeryIcon}
                          alt=""
                        />
                        <Link>STATIONERY</Link>
                      </li>
                      <li className="flex items-center text-xs font-semibold product-border py-4 pl-5 hover:bg-gray-100">
                        <img
                          className="h-5 w-5 mr-2"
                          src={HygieneProductIcon}
                          alt=""
                        />
                        <Link>HYGIENE PRODUCTS</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* search button and cart */}
                <div className="w-full xl:w-4/5 2xl:w-full">
                  <div className="flex items-center">
                    {/* search button */}
                    <div className="flex items-center  xl:ml-16 w-full xl:w-9/12 ">
                      <input
                        type="text"
                        placeholder="Search for products"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white border p-2 w-full  focus:outline-none"
                      />
                      <button
                        onClick={handleSearch}
                        className="bg-orange-900 text-white py-2 px-2 hover:bg-red-700 focus:outline-none"
                      >
                        {/* Search */}
                        <svg
                          fill="#ffffff"
                          width="26px"
                          height="26px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          // {...props}
                        >
                          <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                        </svg>
                      </button>
                    </div>

                    <div className="hidden xl:flex items-center  w-4/12  ml-4">
                      <div className="flex mx-2">
                        <img
                          className="h-8 w-8 mr-2"
                          src={calling}
                          alt=""
                          srcSet=""
                        />
                        <Link className="text-start">
                          <p className="text-xs font-bold text-orange-900">
                            24/7 SUPPORT
                          </p>
                          <p className="text-xs">+8801811-360463</p>
                        </Link>
                      </div>
                      <label
                        htmlFor="my-drawer-4"
                        className="drawer-button flex"
                      >
                        <p className="hidden lg:block ml-2">
                          <img
                            className="h-7 w-7"
                            src={ShoppingCart}
                            alt=""
                            srcSet=""
                          />
                        </p>
                      </label>
                      <label
                        htmlFor="my-drawer-4"
                        className="drawer-button border-s-2 ml-2"
                      >
                        <p className=" text-orange-900 ml-2">620.0tk</p>
                        <p className="text-xs text-gray-400">
                          <span> 5 </span>items
                        </p>
                      </label>
                    </div>

                    <CartList
                      cartModal={cartModal}
                      setCartModal={setCartModal}
                    ></CartList>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default CategoriesInfo;
