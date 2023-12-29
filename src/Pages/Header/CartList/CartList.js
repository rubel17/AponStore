import React, { useEffect, useState } from "react";
import "./CartList.css";
import { Link } from "react-router-dom";
// import Delete from "../../../assets/image/delete.png";

// import { toast } from "react-hot-toast";

const CartList = () => {
  // const [cart, setCart] = useState(
  //   JSON.parse(localStorage.getItem("cartData")) || []
  // );
  // useEffect(() => {
  //   const handleChange = (e) => {
  //     const c = JSON.parse(localStorage.getItem("cartData"));
  //     setCart(c);
  //   };
  //   window.addEventListener("storage", handleChange);
  //   return () => {
  //     window.removeEventListener("storage", handleChange);
  //   };
  // }, []);
  // //delete to wish List
  // const handleDeleteCartList = (id) => {
  //   const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
  //   const Data = prevCartData.filter((product) => product.productId !== id);
  //   localStorage.setItem("cartData", JSON.stringify(Data));
  //   window.dispatchEvent(new Event("storage"));
  //   toast.success("Delete To Cart Successful");
  // };
  // const incNum = (id) => {
  //   const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
  //   const Data = prevCartData.filter((product) => {
  //     if (product.productId === id) {
  //       product.value = product.value + 1;
  //     }
  //     return product.value;
  //   });
  //   localStorage.setItem("cartData", JSON.stringify(Data));
  //   window.dispatchEvent(new Event("storage"));
  // };
  // const decNum = (id) => {
  //   const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
  //   const Data = prevCartData.filter((product) => {
  //     if (product.productId === id) {
  //       if (product.value > 1) {
  //         product.value = product.value - 1;
  //       }
  //     }
  //     return product.value;
  //   });
  //   localStorage.setItem("cartData", JSON.stringify(Data));
  //   window.dispatchEvent(new Event("storage"));
  // };
  let i = 0;
  const rk = [
    {
      name: "ACI Pure Salt 500 gm",
      quantity: 1,
      Amounts: 195.0,
      img: "https://www.freshbazarbd.com/wp-content/uploads/2019/11/500gm.jpg",
    },
    {
      name: "ACI Savlon Aloe Vera",
      quantity: 2,
      Amounts: 105.0,
      img: "https://dailybazar.com.bd/wp-content/uploads/2021/01/ACI-Savlon-Aloe-Vera-Handwash-1000-ml.jpg",
    },
    {
      name: "Arla Dano Daily Pushti",
      quantity: 1,
      Amounts: 15.0,
      img: "https://www.gofresh.com.bd/wp-content/uploads/2020/04/Dano-Daily-Pushti-Milk-Powder.jpg",
    },
    {
      name: "Dove Shampoo Hairfall",
      quantity: 2,
      Amounts: 95.0,
      img: "https://chaldn.com/_mpimage/dove-shampoo-hairfall-rescue-650-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128545&q=best&v=1",
    },
  ];
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
                {
                  // cart
                  rk?.map((CartList, id) => (
                    <section key={id}>
                      <div className="h-24 border-b hover:bg-gray-100">
                        <div className="flex">
                          <div className=" hover:bg-white">
                            <img
                              className="m-1 p-2 w-24 h-20"
                              src={CartList?.img}
                              alt=""
                            />
                          </div>

                          <div className="mt-2 ml-4 flex">
                            <div className="">
                              <h1 className="w-28 text-xs font-bold text-left">
                                {CartList?.name}
                              </h1>
                              <div className="flex mt-1 items-center">
                                <h3 className="text-xs text-gray-500 ">
                                  {CartList?.quantity || 1}
                                </h3>
                                <span className="text-xs mx-1">x</span>
                                <h2 className="text-orange-800 font-medium">
                                  {CartList?.Amounts || 10}
                                </h2>
                              </div>
                            </div>
                            <div className="text-gray-500 ml-20 mx-8">
                              <button
                              // onClick={() =>
                              //   handleDeleteCartList(CartList.productId)
                              // }
                              >
                                x
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="hidden">
                        {(i += CartList?.Amounts * CartList?.quantity)}
                      </p>
                    </section>
                  ))
                }
              </div>
              {/* count the sub Total */}
              <div className="flex justify-between mx-5">
                <p className="text-lg text-orange-700	 font-bold">SubTotal :</p>
                <span className="text-orange-700 font-bold">{i || 100}</span>
              </div>
              <div className="flex justify-center my-3">
                <Link
                  to="/checkOut"
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
                  to="/checkOut"
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
      </div>
    </>
  );
};

export default CartList;
