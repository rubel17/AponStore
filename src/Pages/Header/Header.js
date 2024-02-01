import { useContext, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import AponStoreIcon from "../../assets/image/apon_store_logo.png";
import rightArrow from "../../assets/icon/rightArrow.png";
import { Link } from "react-router-dom";
import "./Header.css";
import CartList from "./CartList/CartList";
import PremiumProductIcon from "../../assets/icon/best seller icon.png";
import BabyProductIcon from "../../assets/icon/Diapers.H03.2k.png";
import DailyProductIcon from "../../assets/icon/plastic-red-flying-basket-isolated-white-background-empty-shopping-cart-3d-rendering.png";
import DryProductIcon from "../../assets/icon/Cookie Jars.H03.2k.png";
import StationeryIcon from "../../assets/icon/Pencil Cup.H03.2k.png";
import ShoppingCart from "../../assets/icon/shopping-bag.svg";
import HygieneProductIcon from "../../assets/icon/different-soap-bars-pump-bottle-liquid-soap-isolated-white-background.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import DrawerLogin from "./DrawerLogin/DrawerLogin";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showModalR, setShowModalR] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const [cartModal, setCartModal] = useState(false);
  const [babyProduct, setBabyProduct] = useState(false);
  const [dailyNeeds, setDailyNeeds] = useState(false);
  const [account, setAccount] = useState(false);

  const babyProductList = () => {
    setBabyProduct(!babyProduct);
  };
  const dailyNeedsList = () => {
    setDailyNeeds(!dailyNeeds);
  };
  const accountList = () => {
    setAccount(!account);
  };
  return (
    <Disclosure
      as="nav"
      className="bg-white text-black dark:bg-white dark:text-black AP-container"
    >
      {({ open }) => (
        <>
          <div className="mx-3 md:mx-4 lg:mx-5 xl:mx-0">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                {/* drawer Start */}
                <div className="drawer z-50">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="drawer-button flex">
                      <Bars3Icon
                        className="block h-6 w-6 mr-2"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold">MENU</span>
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>

                    <ul className="text-left w-10/12 min-h-full bg-white">
                      {/* Sidebar content here */}

                      <li className="relative">
                        <input
                          placeholder="Search for products"
                          type="text"
                          className="mt-2 w-full bg-white text-black text-sm font-semibold shadow-lg outline-none py-7 pl-4"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                          className="absolute top-9 right-4"
                        >
                          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                      </li>
                      <Link
                        to="/Shop/Premium-Products"
                        className="flex items-center text-xs font-medium product-border py-5 pl-5 hover:bg-gray-100"
                      >
                        <img
                          className="h-5 w-5 mr-2"
                          src={PremiumProductIcon}
                          alt=""
                        />
                        <p>PREMIUM PRODUCTS</p>
                      </Link>
                      <Link
                        to="/Shop/Baby-Products"
                        className="flex items-center text-xs font-medium product-border  pl-5 hover:bg-gray-100"
                      >
                        <img
                          className="h-5 w-5 mr-2"
                          src={BabyProductIcon}
                          alt=""
                        />
                        <p className="w-9/12">BABY PRODUCT</p>
                        <Disclosure.Button onClick={babyProductList}>
                          {babyProduct ? (
                            <p className="border-s py-4 bg-arrow">
                              <svg
                                className="mx-4 w-6 h-6"
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
                            </p>
                          ) : (
                            <p aria-hidden="true" className="border-s py-4">
                              <img
                                className="w-6 h-6 mx-5"
                                src={rightArrow}
                                alt=""
                              />
                            </p>
                          )}
                        </Disclosure.Button>
                      </Link>
                      <li>
                        <div className="relative">
                          {babyProduct && (
                            <ul className="text-gray-500">
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Baby Accessories</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Baby Food</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Baby Oral Care</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Baby Skincare</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Diapers</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Feeders</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Newborn Essentials</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Wipes</Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                      <Link
                        to="/Shop/Daily-Needs"
                        className="flex items-center text-xs font-medium product-border  pl-5 hover:bg-gray-100"
                      >
                        <img
                          className="h-5 w-5 mr-2"
                          src={DailyProductIcon}
                          alt=""
                        />
                        <p className="w-9/12">DAILY NEEDS</p>
                        <Disclosure.Button onClick={dailyNeedsList}>
                          {dailyNeeds ? (
                            <p className="border-s py-4 bg-arrow">
                              <svg
                                className="mx-4 w-6 h-6"
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
                            </p>
                          ) : (
                            <p aria-hidden="true" className="border-s py-4">
                              <img
                                className="w-6 h-6 mx-5"
                                src={rightArrow}
                                alt=""
                              />
                            </p>
                          )}
                        </Disclosure.Button>
                      </Link>
                      <li>
                        <div className="relative">
                          {dailyNeeds && (
                            <ul className="text-gray-500">
                              <li className="text-xs   font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Cool drinks</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Energy Biscuits</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Flour</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Lays Chips</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Liquid Soap</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Lux Soap</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Noodles</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Powder Milk</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Rice</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>salt</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Shampoo</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Sugar</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Tea</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link>Washing Powder</Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                      <Link
                        to="/Shop/Dry-Product"
                        className="flex items-center text-xs font-medium product-border py-5 pl-5 hover:bg-gray-100"
                      >
                        <img
                          className="h-5 w-5 mr-2"
                          src={DryProductIcon}
                          alt=""
                        />
                        <p>DRY FOODS</p>
                      </Link>
                      <Link
                        to="/Shop/Stationery"
                        className="flex items-center text-xs font-medium product-border py-5 pl-5 hover:bg-gray-100"
                      >
                        <img
                          className="h-5 w-5 mr-2"
                          src={StationeryIcon}
                          alt=""
                        />
                        <p>STATIONERY</p>
                      </Link>
                      <Link
                        to="/Shop/Hygiene-Product"
                        className="flex items-center text-xs font-medium product-border py-5 pl-5 hover:bg-gray-100"
                      >
                        <img
                          className="h-5 w-5 mr-2"
                          src={HygieneProductIcon}
                          alt=""
                        />
                        <p>HYGIENE PRODUCTS</p>
                      </Link>
                      <Link
                        to="/my-account/wishlist"
                        className="flex items-center text-xs font-medium product-border py-5 pl-5 hover:bg-gray-100"
                      >
                        <svg
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
                          width="14"
                          viewBox="0 0 512 512"
                        >
                          <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                        </svg>
                        <p>WISHLIST</p>
                      </Link>
                      <Link
                        to="/"
                        className="flex items-center text-xs font-medium product-border py-5 pl-5 hover:bg-gray-100"
                      >
                        <svg
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="14px"
                          height="14px"
                          viewBox="0 0 985.15 985.15"
                          xmlSpace="preserve"
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#CCCCCC"
                            strokeWidth="3.940596"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <path d="M844.9,531.224c-23.4-23.399-61.2-23.399-84.601,0c-23.399,23.4-23.399,61.2,0,84.601l21.5,21.5l-30.6-0.2 c-62.3-2.9-119.4-35-154-87.3l-37.9-57.2l37.9-57.099c34.7-52.3,91.7-84.5,154-87.3l30.6-0.2l-21.5,21.5 c-23.399,23.4-23.399,61.2,0,84.6c23.4,23.4,61.2,23.4,84.601,0c0,0,123.5-123.5,123.6-123.6c22-22.2,22.3-62.3,0-84.6 l-125.6-125.7c-23.4-23.4-61.2-23.4-84.601,0c-23.399,23.4-23.399,61.2,0,84.6l23.5,23.5l-30.6-0.3c-48.9,1.4-97.2,14.3-140.3,37.4 c-45.801,24.6-85.101,60.4-113.801,103.7l-10.1,15.4l-10.1-15.3c-28.7-43.3-68-79.2-113.801-103.7 c-45.8-24.6-97.399-37.6-149.3-37.6H60c-33.1,0-60,26.9-60,60c0,33.1,26.9,60,60,60h153.8c65.8,0,126.7,32.7,163.101,87.601 l37.899,57.099l-37.899,57.1c-36.301,54.801-97.3,87.601-163.101,87.601H60c-33.1,0-60,26.899-60,60c0,33.1,26.9,60,60,60h153.8 c51.9,0,103.601-13,149.3-37.601c45.801-24.6,85.101-60.399,113.801-103.699l10.1-15.301l10.1,15.301 c28.7,43.3,68,79.199,113.801,103.699c43.1,23.101,91.399,36,140.3,37.4l30.6-0.3l-23.5,23.5c-23.399,23.399-23.399,61.2,0,84.6 c23.4,23.4,61.2,23.4,84.601,0l125.6-125.6c22.3-22.3,22.1-62.4,0-84.601C968.4,654.724,844.9,531.224,844.9,531.224z"></path>
                            </g>
                          </g>
                        </svg>
                        <p>COMPARE</p>
                      </Link>
                      <Link
                        to="/my-account"
                        className="flex justify-between items-center text-xs font-medium product-border  pl-5 hover:bg-gray-100"
                      >
                        <div className="flex">
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            height="14"
                            width="14"
                            viewBox="0 0 448 512"
                          >
                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                          </svg>
                          <p>MY ACCOUNT</p>
                        </div>
                        <Disclosure.Button onClick={accountList}>
                          {account ? (
                            <p className="border-s py-4 bg-arrow">
                              <svg
                                className="mx-4 w-6 h-6"
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
                            </p>
                          ) : (
                            <p aria-hidden="true" className="border-s py-4">
                              <img
                                className="w-6 h-6 mx-5"
                                src={rightArrow}
                                alt=""
                              />
                            </p>
                          )}
                        </Disclosure.Button>
                      </Link>
                      <li>
                        <div className="relative">
                          {account && (
                            <ul className="text-gray-500">
                              <li className="text-xs   font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link to="/my-account">Dashboard</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link to="/my-account/orders">Orders</Link>
                              </li>

                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link to="/my-account/wishlist">Wishlist</Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link to="/my-account/accountDetails">
                                  Account Details
                                </Link>
                              </li>
                              <li className="text-xs  font-medium product-border py-5 pl-5 hover:bg-gray-100">
                                <Link onClick={handleSignOut}>Logout</Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* drawer end */}
              </div>
              {/* AponStor icon */}
              <Link to="/" className=" ml-32 md:ml-80 lg:ml-96 xl:ml-0">
                <img
                  className="h-14 lg:h-16 w-auto"
                  src={AponStoreIcon}
                  alt="Your Company"
                />
              </Link>
              <CartList
                cartModal={cartModal}
                setCartModal={setCartModal}
              ></CartList>
              {/*my account / cart */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <p className="font-bold text-orange-800">{user?.displayName}</p>
                <Menu as="div" className="ml-3">
                  <div className="hidden xl:block">
                    {user ? (
                      <>
                        <div className="relative group">
                          <Menu.Button className=" bg-white focus:outline-none ">
                            <Link
                              to="/my-account"
                              className="text-sm font-bold"
                            >
                              MY ACCOUNT
                            </Link>
                          </Menu.Button>

                          <ul className="absolute border w-52 top-6 -left-28 z-10 invisible group-hover:visible bg-white text-start font-medium">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/my-account"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2  text-gray-700 border-b"
                                  )}
                                >
                                  <span className="ml-5"> Dashboard</span>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/my-account/orders"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2 text-gray-700 border-b"
                                  )}
                                >
                                  <span className="ml-5"> Orders</span>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/my-account/accountDetails"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2  text-gray-700 border-b"
                                  )}
                                >
                                  <span className="ml-5"> Account Details</span>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/my-account/wishlist"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2  text-gray-700 border-b"
                                  )}
                                >
                                  <span className="ml-5">Wishlist</span>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  onClick={handleSignOut}
                                  to="/"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2  text-gray-700 border-b"
                                  )}
                                >
                                  <span className="ml-5">Logout</span>
                                </Link>
                              )}
                            </Menu.Item>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <button>
                        <label
                          htmlFor="my-drawer-2"
                          className="drawer-button lg:ml-8 font-semibold"
                        >
                          LOGIN / REGISTER
                        </label>
                      </button>
                    )}
                    <DrawerLogin
                      showModal={showModal}
                      setShowModal={setShowModal}
                      setShowModalR={setShowModalR}
                      showModalR={showModalR}
                    ></DrawerLogin>
                  </div>

                  {/* shopping cart button */}
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-button xl:hidden"
                  >
                    <p className="relative ">
                      <img className="h-5 w-5" src={ShoppingCart} alt="" />
                      <span className="text-xs absolute -top-1 -right-2 bg">
                        0
                      </span>
                    </p>
                  </label>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
