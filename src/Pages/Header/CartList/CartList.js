import React, { useEffect, useState } from "react";
import "./CartList.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CartList = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );
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
  // console.log(cart);
  //delete to wish List
  const handleDeleteCartList = (id) => {
    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const Data = prevCartData.filter((product) => product.productId !== id);
    localStorage.setItem("cartData", JSON.stringify(Data));
    window.dispatchEvent(new Event("storage"));
    toast.error("Delete To Cart Successful");
  };
  let i = 0;
  return (
    <>
      <div>
        <div className="drawer drawer-end z-50">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="w-80 md:w-96 lg:max-w-full 2xl:w-1/4 min-h-full bg-white text-black">
              <div className="py-5 px-3 lg:px-8 xl:pt-8 border-b">
                <div className="flex justify-between">
                  <h3 className=" text-lg lg:text-3xl text-black font-bold">
                    Shopping cart
                  </h3>
                  <p
                    onClick={() => {
                      document.getElementById("my-drawer-4").click();
                    }}
                  >
                    <span className="text-xl mr-1">x</span>
                    <span className="font-semibold">Close</span>
                  </p>
                </div>
              </div>
              <div className="totalProduct-height-cart scroll overflow-y-scroll scroll-smooth border-b mb-3">
                {cart?.map((CartList, id) => (
                  <section key={id}>
                    <div className="h-24 border-b hover:bg-gray-100">
                      <div className="flex">
                        <div className=" hover:bg-white">
                          <img
                            className="m-1 p-2 w-24 h-20"
                            src={CartList?.images}
                            alt=""
                          />
                        </div>
                        <div className="mt-2 ml-4 flex">
                          <div className="">
                            <h1 className="text-xs font-bold text-left">
                              {CartList?.name}
                            </h1>
                            <div className="flex mt-1 items-center">
                              <h3 className="text-xs text-gray-500 ">
                                {CartList?.value}
                              </h3>
                              <span className="text-xs mx-1">x</span>
                              <h2 className="text-orange-800 font-medium">
                                {CartList?.Price}
                              </h2>
                            </div>
                          </div>
                          <div className="text-gray-500 ml-20 mx-8">
                            <button
                              onClick={() =>
                                handleDeleteCartList(CartList.productId)
                              }
                            >
                              x
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="hidden">
                      {(i += CartList?.Price * CartList?.value)}
                    </p>
                  </section>
                ))}
              </div>
              {/* count the sub Total */}
              <div className="flex justify-between mx-5">
                <p className="text-lg text-orange-700	 font-bold">SubTotal :</p>
                <span className="text-orange-700 font-bold">{i}</span>
              </div>
              <div className="flex justify-center my-3">
                <Link
                  to="/viewCart"
                  onClick={() => {
                    document.getElementById("my-drawer-4").click();
                  }}
                  className="bg-gray-200 px-24 py-3 text-xs font-semibold"
                >
                  VIEW CART
                </Link>
              </div>
              <div className="flex justify-center">
                <Link
                  to="/viewCart/checkOut"
                  onClick={() => {
                    document.getElementById("my-drawer-4").click();
                  }}
                  className="cart-order-btn px-24 py-3 text-xs font-semibold"
                >
                  CHECKOUT
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default CartList;
