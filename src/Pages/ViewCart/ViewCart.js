import React, { useContext, useEffect, useState } from "react";
import banner from "../../assets/image/premium product bg.png";
import "./ViewCart.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const ViewCart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user } = useContext(AuthContext);
  let i = 0;
  // Mongo DB user call to(MDBuser)
  const { data: MDBuser = [] } = useQuery({
    queryKey: [`MDuser`],
    queryFn: () =>
      fetch(
        ` https://apon-store-server-rubelrk.vercel.app/users/${user?.email}`
      ).then((res) => res.json()),
  });
  //Place Order call to MongoDB
  const { data: userOrder = [], refetch } = useQuery({
    queryKey: [`userOrder`],
    queryFn: () =>
      fetch(
        `https://apon-store-server-rubelrk.vercel.app/orders/${user?.email}`
      ).then((res) => res.json()),
  });
  //update current date
  const [date, setDate] = useState(new Date());

  const [isShippingAddress, setIsShippingAddress] = useState(false);
  //show coupon code
  const [isCode, setIsCode] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  //cart data
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );
  //cart data update logic for localStorage
  useEffect(() => {
    const handleChange = (e) => {
      const c = JSON.parse(localStorage.getItem("cartData"));
      setCart(c);
    };
    window.addEventListener("storage", handleChange);
    return () => {
      window.removeEventListener("storage", handleChange);
    };
  }, []);
  const incNum = (id) => {
    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const Data = prevCartData.filter((product) => {
      if (product.productId === id) {
        product.value = product.value + 1;
      }
      return product.value;
    });
    localStorage.setItem("cartData", JSON.stringify(Data));
    window.dispatchEvent(new Event("storage"));
  };
  const decNum = (id) => {
    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const Data = prevCartData.filter((product) => {
      if (product.productId === id) {
        if (product.value > 1) {
          product.value = product.value - 1;
        }
      }
      return product.value;
    });
    localStorage.setItem("cartData", JSON.stringify(Data));
    window.dispatchEvent(new Event("storage"));
  };
  const handleDeleteCartList = (id) => {
    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const Data = prevCartData.filter((product) => product.productId !== id);
    localStorage.setItem("cartData", JSON.stringify(Data));
    window.dispatchEvent(new Event("storage"));
    toast.error("Delete To Cart Successful");
  };

  //page setUP 3layout
  const [step, setStep] = useState(1); // 1: Cart, 2: Checkout, 3: Order Complete
  //go checkOut page
  const handleCheckout = () => {
    if (i > 1) {
      setStep(2);
      window.scrollTo(0, 0);
    } else {
      toast.error("No Product");
    }
  };

  //coupon section logic
  //get coupon
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  //fixed coupon
  const rk = "signing10";
  const [finalTotal, setFinalTotal] = useState(
    JSON.parse(localStorage.getItem("couponData")) || []
  );
  if (cart?.length < 1) {
    window.localStorage.clear();
    window.dispatchEvent(new Event("storages"));
  } else {
  }
  //go order page
  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const phoneNumber = form.number.value;
    const email = form.email.value;
    if (finalTotal > 0) {
      var FTotal = finalTotal;
    } else {
      FTotal = i + 40;
    }
    var orderStatus = "Processing";
    var Product = cart;
    var orderNumber = Math.floor(Math.random() * 9999) + 199999;
    var orderDate = date.toDateString();
    if (selectedOption === "Cash") {
      setStep(3);
      window.scrollTo(0, 0);
      const order = {
        name,
        address,
        email,
        phoneNumber,
        FTotal,
        Product,
        orderNumber,
        orderDate,
        orderStatus,
      };
      fetch(`https://apon-store-server-rubelrk.vercel.app/orders`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Order Place Successful");
          window.localStorage.clear();
          window.dispatchEvent(new Event("storages"));
          window.dispatchEvent(new Event("storage"));
        });
    } else {
      toast.error("Click Cash on delivery");
    }
  };

  //coupon handle
  const handleCouponSubmit = () => {
    if (userOrder?.length < 1) {
      if (i > 0) {
        if (rk === inputValue) {
          toast.success("Coupon Apply Successful");
          const total = parseInt(i - i / 10 + 40);
          setFinalTotal(total);
        } else {
          toast.error("Coupon Not Valid");
        }
      } else {
        toast.error("Cart Is Empty");
      }
    } else {
      toast.error("Coupon Already Use");
    }
    localStorage.setItem("couponData", JSON.stringify(finalTotal));
    window.dispatchEvent(new Event("storages"));
  };
  refetch();

  const renderContent = () => {
    switch (step) {
      // view cart
      case 1:
        return (
          <div className="container">
            <div className="relative">
              <div>
                <img className="h-52 w-screen m-0 p-0" src={banner} alt="" />
              </div>
              <div className="cart-text absolute top-1/2 ">
                <div className="AP-container flex justify-center items-center text-3xl">
                  <h1 className="text-white border-b border-orange-900">
                    SHOPPING CART
                  </h1>
                  <p className="hidden lg:block lg:mx-6 xl:mx-20">
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 1024 1024"
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#ffffff"
                        d="M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z"
                      />
                    </svg>
                  </p>
                  <h1
                    onClick={() => setStep(2)}
                    className="hidden lg:block text-gray-400 hover:text-white"
                  >
                    CHECKOUT
                  </h1>
                  <p className="hidden lg:block lg:mx-6 xl:mx-20">
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 1024 1024"
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#ffffff"
                        d="M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z"
                      />
                    </svg>
                  </p>
                  <h1 className="hidden lg:block text-gray-400">
                    ORDER COMPLETE
                  </h1>
                </div>
              </div>
            </div>
            <div className="AP-container">
              {userOrder?.length === 0 ? (
                <div className="ml-10">
                  <div className="flex items-center text-sm font-semibold mb-20 mt-2">
                    <h2>Have a coupon? </h2>
                    <Link
                      className="text-orange-800  border-b-2 border-orange-800 ml-1"
                      onClick={() => setIsCode(!isCode)}
                    >
                      Click here to your coupon
                    </Link>
                  </div>
                  {isCode ? (
                    <div className="border w-96 my-4 -mt-16">
                      <div className="my-10 font-medium">
                        <p>
                          Apply this coupon get
                          <span className="text-orange-800 mx-1">10%</span>
                          discount first signing.
                        </p>
                        <p className="my-2">
                          Your Coupon :
                          <span className="text-orange-800"> signing10</span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <div className="ml-10">
                  <div className="flex items-center text-sm font-semibold mb-20 mt-2">
                    <h2>Have a coupon? </h2>
                    <Link
                      className="text-orange-800  ml-1"
                      onClick={() => setIsCode(!isCode)}
                    >
                      Now No Coupon
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:flex w-11/12 mx-auto mt-10 h-full AP-container">
              <div className="lg:w-2/3 ">
                <div className="flex flex-col border border-black scroll overflow-y-scroll scroll-smooth product-height">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-4 py-4">
                                Cancel
                              </th>
                              <th scope="col" className="px-10 py-4">
                                PRODUCT
                              </th>
                              <th scope="col" className="px-6 py-4">
                                PRICE
                              </th>
                              <th scope="col" className="px-6 py-4">
                                QUANTITY
                              </th>
                              <th scope="col" className="px-6 py-4">
                                SUBTOTAL
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart?.map((CartList, ids) => (
                              <tr
                                key={ids}
                                className="border-b dark:border-neutral-500"
                              >
                                <td className="flex items-center whitespace-nowrap px-4 py-4 font-medium">
                                  <button
                                    onClick={() =>
                                      handleDeleteCartList(CartList.productId)
                                    }
                                  >
                                    <svg
                                      fill="#000000"
                                      width="16px"
                                      height="16px"
                                      viewBox="-28 0 512 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <title>cancel</title>
                                      <path d="M64 388L196 256 64 124 96 92 228 224 360 92 392 124 260 256 392 388 360 420 228 288 96 420 64 388Z" />
                                    </svg>
                                  </button>
                                  <img
                                    className="w-16 h-16 ml-5 "
                                    src={CartList?.images}
                                    alt=""
                                  />
                                </td>
                                <td className="whitespace-nowrap px-10 py-4 font-medium">
                                  {CartList?.name}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {CartList?.Price}.00৳
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  <div className="flex items-center">
                                    <Link
                                      onClick={() =>
                                        decNum(CartList?.productId)
                                      }
                                      className="border p-2 hover:bg-orange-800 hover:text-white"
                                    >
                                      -
                                    </Link>
                                    <span className="border-t border-b p-2">
                                      {CartList?.value}
                                    </span>
                                    <Link
                                      onClick={() =>
                                        incNum(CartList?.productId)
                                      }
                                      className="border p-2 hover:bg-orange-800 hover:text-white"
                                    >
                                      +
                                    </Link>
                                  </div>
                                </td>

                                <td className="whitespace-nowrap px-6 py-4 font-semibold text-orange-900">
                                  {CartList?.Price * CartList?.value}
                                </td>
                                <td className="hidden">
                                  {(i += CartList?.Price * CartList?.value)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex items-center my-10">
                  <input
                    type="text"
                    className="input input-bordered bg-white focus:outline-none"
                    value={inputValue}
                    onChange={handleInputChange}
                  />

                  <button
                    type="submit"
                    onClick={handleCouponSubmit}
                    className="bg-green-600 py-3 px-8  md:px-3 text-white font-medium lg:-ml-1"
                  >
                    APPLY COUPON
                  </button>
                </div>
              </div>
              <div className="lg:ml-5 border-2 lg:w-1/3 p-8 mt-10 lg:mt-0 h-96">
                <h1 className="text-left text-xl font-semibold">CART TOTALS</h1>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th scope="col" className=" py-4">
                                Subtotal
                              </th>
                              <th scope="col" className="pl-40 py-4">
                                {i}.00৳
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap  py-4 font-medium">
                                Shipping
                              </td>
                              <td className="whitespace-nowrap pl-40 py-4">
                                <p>
                                  Flat rate:
                                  <span className="ml-2 text-orange-900 text-base font-semibold">
                                    40.00৳
                                  </span>
                                </p>
                                <p>Shipping to Dhaka.</p>
                              </td>
                            </tr>

                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap  py-4 font-semibold text-lg">
                                Total
                              </td>
                              <td className="whitespace-nowrap pl-40 py-4 text-orange-900 font-semibold text-lg">
                                {i > 0 ? (
                                  <div className="flex">
                                    {finalTotal < 1 ||
                                    finalTotal === undefined ? (
                                      <p>{i + 40}.00৳</p>
                                    ) : (
                                      <div>
                                        <p>{finalTotal}.00৳</p>
                                      </div>
                                    )}
                                    {finalTotal > 0 ? (
                                      <p className="text-xs">Coupon Apply</p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  <p>0.00৳</p>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 w-full rounded"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        );
      // check out
      case 2:
        return (
          <div>
            <div className="relative">
              <div>
                <img className="h-52 w-screen m-0 p-0" src={banner} alt="" />
              </div>
              <div className="cart-text absolute top-1/2 flex justify-center items-center text-3xl ">
                <h1
                  onClick={() => setStep(1)}
                  className="hidden lg:block text-gray-400 hover:text-white"
                >
                  SHOPPING CART
                </h1>
                <p className="hidden lg:block lg:mx-6 xl:mx-20">
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 1024 1024"
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z"
                    />
                  </svg>
                </p>
                <h1 className="text-white border-b border-orange-900">
                  CHECKOUT
                </h1>
                <p className="hidden lg:block lg:mx-6 xl:mx-20">
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 1024 1024"
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z"
                    />
                  </svg>
                </p>
                <h1 className="hidden lg:block text-gray-400">
                  ORDER COMPLETE
                </h1>
              </div>
            </div>
            {rk === "signing10" ? (
              <div className="AP-container">
                <div className="flex items-center text-sm font-semibold mb-20 mt-2">
                  <h2>Have a coupon? </h2>
                  <Link
                    className="text-orange-800  border-b-2 border-orange-800 ml-1"
                    onClick={() => setIsCode(!isCode)}
                  >
                    Click here to enter your code
                  </Link>
                </div>
                {isCode ? (
                  <div className="border w-96 -my-16">
                    <div className="my-10 ">
                      <p className="text-gray-400 my-2">
                        If you have a coupon code, please apply it below.
                      </p>
                      <input
                        placeholder="Coupon Code"
                        className="bg-white outline-none border pl-2 py-2 ml-5"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                      <button
                        type="submit"
                        onClick={handleCouponSubmit}
                        className="bg-green-600 py-2 px-8  md:px-3 text-white font-medium"
                      >
                        APPLY COUPON
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            <div className="lg:mt-32  AP-container">
              <form onSubmit={handleOrder} className="lg:flex mt-20">
                <div className=" lg:w-1/2">
                  <h1 className=" text-start text-xl font-semibold mb-4">
                    BILLING DETAILS
                  </h1>
                  <div className="flex">
                    <input
                      required
                      defaultValue={user?.displayName || MDBuser?.name}
                      type="text"
                      name="name"
                      placeholder="First Name"
                      className="mt-1 block w-1/2 px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="mt-1 block w-1/2 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company Name (Optional)"
                    className="mt-6 block w-full px-3 py-3 mr-6 mb-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                  <div className="text-start">
                    <p>Country / Region</p>
                    <p className="mt-2 font-bold">Bangladesh</p>
                  </div>
                  <input
                    type="text"
                    required
                    defaultValue={MDBuser?.address}
                    name="address"
                    placeholder="House Number and Street Name"
                    className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, Suite, Unit etc (Optional)"
                    className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="Town / City"
                    className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="District"
                    className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="Post Code / ZIP (Optional)"
                    className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="Post Code / ZIP (Optional)"
                    className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                  <input
                    type="number"
                    required
                    name="number"
                    placeholder="Phone Number"
                    defaultValue={MDBuser?.phoneNumber}
                    className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    defaultValue={user?.email}
                    name="email"
                    required
                    className="mt-6 block w-full px-3 py-3 mr-6 mb-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />

                  <div className="flex mb-6">
                    <input
                      onClick={() => setIsShippingAddress(!isShippingAddress)}
                      className="mr-2"
                      type="checkbox"
                    />
                    <p>Ship to a different address?</p>
                  </div>
                  {isShippingAddress && (
                    <>
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="First Name"
                          defaultValue={user?.displayName}
                          className="mt-1 block w-1/2 px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="mt-1 block w-1/2 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Company Name (Optional)"
                        className="mt-6 block w-full px-3 py-3 mr-6 mb-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <div className="text-start">
                        <p>Country / Region</p>
                        <p className="mt-2 font-bold">Bangladesh</p>
                      </div>
                      <input
                        type="text"
                        placeholder="House Number and Street Name"
                        className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <input
                        type="text"
                        placeholder="Apartment, Suite, Unit etc (Optional)"
                        className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <input
                        type="text"
                        placeholder="Town / City"
                        className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <input
                        type="text"
                        placeholder="District"
                        className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <input
                        type="text"
                        placeholder="Post Code / ZIP (Optional)"
                        className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <input
                        type="text"
                        placeholder="Post Code / ZIP (Optional)"
                        className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <input
                        type="number"
                        placeholder="Phone Number"
                        defaultValue={user?.displayName}
                        className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        defaultValue={user?.email}
                        className="mt-6 block w-full px-3 py-3 mr-6 mb-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                    </>
                  )}

                  <input
                    type="text"
                    placeholder="Order Notes (Optional)"
                    className="mt-6 block w-full px-3 py-12 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                </div>
                <div className="lg:w-1/2 bg-gray-100 lg:ml-5 lg:p-4 mt-5 lg:mt-0">
                  <p className="text-center text-xl font-semibold py-5">
                    YOUR ORDER
                  </p>
                  <div className="product-details mx-4">
                    <div className="flex justify-between px-4 py-4 text-base font-semibold">
                      <p>PRODUCT</p>
                      <p>SUBTOTAL</p>
                    </div>
                    <hr />
                    <div className="scroll overflow-y-scroll scroll-smooth CO-product-height">
                      {cart.map((cartList, ids) => (
                        <div
                          key={ids}
                          className="flex justify-between px-4 py-2"
                        >
                          <div>
                            <div className="flex items-center text-sm  font-medium">
                              <button
                                onClick={() =>
                                  handleDeleteCartList(cartList.productId)
                                }
                              >
                                <svg
                                  fill="#000000"
                                  width="16px"
                                  height="16px"
                                  viewBox="-28 0 512 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>cancel</title>
                                  <path d="M64 388L196 256 64 124 96 92 228 224 360 92 392 124 260 256 392 388 360 420 228 288 96 420 64 388Z" />
                                </svg>
                              </button>

                              <span className="ml-2"> {cartList?.name}</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <span className="font-medium text-sm">
                                Quantity:
                              </span>
                              <div className="flex items-center ml-2">
                                <Link
                                  onClick={() => decNum(cartList?.productId)}
                                  className="border p-2 hover:bg-orange-800 hover:text-white"
                                >
                                  -
                                </Link>
                                <span className="border-t border-b p-2">
                                  {cartList?.value}
                                </span>
                                <Link
                                  onClick={() => incNum(cartList?.productId)}
                                  className="border p-2 hover:bg-orange-800 hover:text-white"
                                >
                                  +
                                </Link>
                              </div>
                            </div>
                          </div>

                          <p className=" font-medium">
                            {cartList?.Price * cartList?.value}৳
                          </p>

                          <p className="hidden">
                            {(i += cartList?.Price * cartList?.value)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <hr />
                    <div className="flex justify-between px-4 py-4">
                      <p>Subtotal</p>
                      <p className="font-semibold">{i}৳</p>
                    </div>
                    <hr />
                    <div className="flex justify-between px-4 py-4">
                      <p>Shipping</p>
                      <div>
                        <p className="text-end">
                          Flat rate:
                          <span className="text-orange-900 ml-2 font-semibold">
                            40.00৳
                          </span>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-between px-4 py-4">
                      <p>Total</p>

                      <div className="text-orange-700 font-bold">
                        {i > 0 ? (
                          <div className="flex">
                            {finalTotal < 1 || finalTotal === undefined ? (
                              <p>{i + 40}.00৳</p>
                            ) : (
                              <p>{finalTotal}.00৳</p>
                            )}
                            {finalTotal > 0 ? (
                              <p className="text-xs">Coupon Apply</p>
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          <p>0.00৳</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mx-4 ">
                    <div
                      className={`flex-1 items-center ${
                        selectedOption === "Cash" ? "bg-white" : ""
                      }`}
                    >
                      <div className="flex items-center mt-1  py-4">
                        <input
                          type="radio"
                          id="Cash"
                          name="paymentMethod"
                          className="ml-2 checkbox-round"
                          onChange={() => handleSelect("Cash")}
                        />
                        <p className="font-semibold pl-4 text-start">
                          Cash on delivery
                        </p>
                      </div>
                      {selectedOption === "Cash" && (
                        <div className="text-start ml-5 pb-2">
                          Pay with cash upon delivery.
                        </div>
                      )}
                    </div>
                    <div
                      className={`flex-1 items-center ${
                        selectedOption === "BKash" ? "bg-white" : ""
                      }`}
                    >
                      <div className="flex items-center py-4">
                        <input
                          type="radio"
                          id="BKash"
                          name="paymentMethod"
                          className="ml-2 checkbox-round"
                          onChange={() => handleSelect("BKash")}
                        />
                        <p className="font-semibold pl-4 text-start">BKash</p>
                      </div>
                      {selectedOption === "BKash" && (
                        <div className="text-start ml-5 pb-2">
                          <p>
                            Please complete your bKash payment at first, then
                            fill up the form below. Also note that 1.85% bKash
                            "SEND MONEY" cost will be added with net price.
                            Total amount you need to send us at ৳ {i + 40}.00
                          </p>
                          <br />
                          <p>bKash Personal Number : 01302688174</p>
                          <div className="flex  items-center mt-4">
                            <p className="ml-4">bKash Number</p>
                            <input
                              type="text"
                              placeholder="01000000000"
                              className="bg-white border w-64 py-2 pl-3 outline-none ml-32"
                            />
                          </div>
                          <div className="flex  items-center mt-4">
                            <p className="ml-4">bKash Transaction ID </p>
                            <input
                              type="text"
                              placeholder="BE456YT2SKL"
                              className="bg-white border w-64 py-2 pl-3 outline-none ml-20"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`flex-1 items-center ${
                        selectedOption === "Nagad" ? "bg-white" : ""
                      }`}
                    >
                      <div className="flex items-center py-4">
                        <input
                          type="radio"
                          id="Nagad"
                          name="paymentMethod"
                          className="ml-2 checkbox-round"
                          onChange={() => handleSelect("Nagad")}
                        />
                        <p className="font-semibold pl-4 text-start">Nagad</p>
                      </div>
                      {selectedOption === "Nagad" && (
                        <div className="text-start ml-5 pb-2">
                          <p>
                            Please complete your Nagad Payment at first, then
                            fill up the form below. Also note that 1.45% Nagad
                            "SEND MONEY" cost will be added with net price.
                            Total amount you need to send us at ৳ {i + 40}.00
                          </p>
                          <br />
                          <p>Nagad Personal Number : 01302688174</p>
                          <div className="flex  items-center mt-4">
                            <p className="ml-4">Nagad Number </p>
                            <input
                              type="text"
                              placeholder="01000000000"
                              className="bg-white border w-64 py-2 pl-3 outline-none ml-32"
                            />
                          </div>
                          <div className="flex  items-center mt-4">
                            <p className="ml-4">Nagad Transaction ID </p>
                            <input
                              type="text"
                              placeholder="BE456YT2SKL"
                              className="bg-white border w-64 py-2 pl-3 outline-none ml-20"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`flex-1 items-center ${
                        selectedOption === "Rocket" ? "bg-white" : ""
                      }`}
                    >
                      <div className="flex items-center py-4">
                        <input
                          type="radio"
                          id="Rocket"
                          name="paymentMethod"
                          className="ml-2 checkbox-round"
                          onChange={() => handleSelect("Rocket")}
                        />
                        <p className="font-semibold pl-4 text-start">Rocket</p>
                      </div>
                      {selectedOption === "Rocket" && (
                        <div className="text-start ml-5 pb-2">
                          <p>
                            Please complete your Rocket Payment at first, then
                            fill up the form below. Also note that 1.8% Rocket
                            "SEND MONEY" cost will be added with net price.
                            Total amount you need to send us at ৳ {i + 40}.00
                          </p>
                          <br />
                          <p>Rocket Personal Number : 01302688174</p>
                          <div className="flex  items-center mt-4">
                            <p className="ml-4">Rocket Number </p>
                            <input
                              type="text"
                              placeholder="01000000000"
                              className="bg-white border w-64 py-2 pl-3 outline-none ml-32"
                            />
                          </div>
                          <div className="flex  items-center mt-4">
                            <p className="ml-4">Rocket Transaction ID </p>
                            <input
                              type="text"
                              placeholder="BE456YT2SKL"
                              className="bg-white border w-64 py-2 pl-3 outline-none ml-20"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center my-4">
                      <input type="checkbox" className="checkbox-round mr-2" />
                      <p className="font-semibold pl-4 text-start text-sm">
                        I would like to receive exclusive emails with discounts
                        and product information
                      </p>
                    </div>
                  </div>

                  <hr />
                  <p className="m-4 mb-8 text-start">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our
                    <span className="font-bold ml-1">privacy policy</span>.
                  </p>
                  <div className="flex flex-col">
                    <button className="btn btn-primary text-white">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      // order place
      case 3:
        return (
          <div>
            <div className="relative">
              <div>
                <img className="h-52 w-screen m-0 p-0" src={banner} alt="" />
              </div>
              <div className="cart-text absolute top-1/2 flex justify-center items-center text-3xl ">
                <h1 className="hidden lg:block text-gray-400 hover:text-white">
                  SHOPPING CART
                </h1>
                <p className="hidden lg:block lg:mx-6 xl:mx-20">
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 1024 1024"
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z"
                    />
                  </svg>
                </p>
                <h1 className="hidden lg:block text-gray-400 hover:text-white">
                  CHECKOUT
                </h1>
                <p className="hidden lg:block lg:mx-6 xl:mx-20">
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 1024 1024"
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z"
                    />
                  </svg>
                </p>
                <h1 className="text-white border-b border-orange-900">
                  ORDER COMPLETE
                </h1>
              </div>
            </div>
            <div className="order-body AP-container">
              <p className="border-4 border-green-700 border-dotted p-5 my-5">
                Thank You. Your order has been Received.
              </p>
              <div className="lg:flex justify-center mb-10">
                <div className="lg:pr-8 lg:border-e mb-3 lg:mb-0">
                  <p className="text-gray-400 mb-2">Order Number:</p>
                  <p>{userOrder?.[userOrder?.length - 1]?.orderNumber}</p>
                </div>
                <div className="lg:px-8 lg:border-e mb-3 lg:mb-0">
                  <p className="text-gray-400 mb-2">Date:</p>
                  <p>{date.toDateString()}</p>
                </div>
                <div className="lg:px-8 lg:border-e mb-3 lg:mb-0">
                  <p className="text-gray-400 mb-2">Email:</p>
                  <p>{userOrder?.[userOrder?.length - 1]?.email}</p>
                </div>
                <div className="lg:pl-8 mb-3 lg:mb-0">
                  <p className="text-gray-400 mb-2">Payment Method:</p>
                  <p>Cash On Delivery</p>
                </div>
              </div>

              <div className="">
                <h3 className="text-gray-400 text-start">
                  Pay with Cash Upon Delivery
                </h3>
                <h1 className="text-start text-xl font-semibold my-5">
                  Order Details
                </h1>
                <div className="">
                  <div className="">
                    <div className="flex justify-between py-4  text-base font-semibold border-b-2">
                      <p>PRODUCT</p>

                      <p>TOTAL</p>
                    </div>

                    <div className="scroll overflow-y-scroll scroll-smooth CO-product-height">
                      {/* cart || */}

                      {userOrder?.[userOrder?.length - 1]?.Product?.map(
                        (cartList, ids) => (
                          <div
                            key={ids}
                            className="flex justify-between px-4 py-2"
                          >
                            <div className="text-sm  font-medium text-start">
                              <span> {cartList?.name}</span> <br />
                              <span> Qnt: {cartList?.value}</span>
                            </div>

                            <p className=" font-medium">
                              {cartList?.Price * cartList?.value}৳
                            </p>

                            <p className="hidden">
                              {(i += cartList?.Price * cartList?.value)}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex justify-between py-4 border-b-2">
                      <p>Subtotal</p>

                      <p className="font-semibold">{i} Tk.</p>
                    </div>
                    <div className="flex justify-between py-4 border-b-2">
                      <p>Shipping</p>

                      <p className="text-end">
                        Flat rate:
                        <span className="text-orange-900 ml-2 font-semibold">
                          40.00৳
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between py-4 border-b-2">
                      <p>Payment Method:</p>

                      <p className="text-gray-400">Cash On Delivery</p>
                    </div>
                    <div className="flex justify-between py-4 border-b-2">
                      <p>Total</p>

                      <div className="text-orange-700 font-bold">
                        {userOrder?.[userOrder?.length - 1]?.FTotal || i + 40}
                        .00৳
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex justify-between mt-20">
                <div className="mb-5 lg:mb-0">
                  <h1 className="text-start text-xl font-bold">
                    BILLING ADDRESS
                  </h1>
                  <div className="text-start text-gray-400">
                    <p>{userOrder?.[userOrder?.length - 1]?.name}</p>
                    <p>{userOrder?.[userOrder?.length - 1]?.address}</p>
                    <p>{userOrder?.[userOrder?.length - 1]?.phoneNumber}</p>
                    <p>{userOrder?.[userOrder?.length - 1]?.email}</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-start text-xl font-bold">
                    SHIPPING ADDRESS
                  </h1>
                  <div className="text-start text-gray-400">
                    <p>{userOrder?.[userOrder?.length - 1]?.name}</p>
                    <p>{userOrder?.[userOrder?.length - 1]?.address}</p>
                    <p>{userOrder?.[userOrder?.length - 1]?.phoneNumber}</p>
                    <p>{userOrder?.[userOrder?.length - 1]?.email}</p>
                  </div>
                </div>
              </div>
              <div className="my-8">
                <Link
                  className=" bg-orange-900 text-white py-2 px-10 rounded text-base font-medium"
                  to="/"
                >
                  Home Page
                </Link>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  <Toaster />;
  return <div className="container mx-auto mt-8 p-4">{renderContent()}</div>;
};

export default ViewCart;
