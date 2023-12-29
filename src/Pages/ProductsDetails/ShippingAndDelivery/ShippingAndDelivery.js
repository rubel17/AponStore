import React from "react";
import "./ShippingAndDelivery.css";

const ShippingAndDelivery = ({ isShippingDelivery }) => {
  return (
    <>
      <div className="hidden xl:block">
        <div className="flex">
          <div className="w-1/2">
            <img
              src="https://aponstore.com/wp-content/uploads/2021/08/male-couriers-delivering-parcels_74855-14101.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 mt-10">
            <h1 className="text-4xl font-semibold mb-10">
              Currently Delivering <br />( Mirpur DOHS )
            </h1>
            <div className="text-left">
              <h2 className="text-xl font-semibold mb-5">Delivery</h2>
              <li className="text-lg">
                Delivery Charge is Tk. 40 per delivery.
              </li>
              <li className="text-lg my-3">
                Your order will be delivered to the address you provide at
                checkout as quickly as possible.
              </li>
              <li className="text-lg">
                We offer doorstep delivery in Mirpur DOHS, Dhaka.
              </li>
              <h2 className="text-xl font-semibold my-5">Return Policy</h2>
              <li className="text-lg">
                Items must be returned in their original condition and packaging
                within 6 hours of purchase.
              </li>
              <li className="text-lg mt-3">
                You will not receive any cash refunds, rather you can reorder
                items from our shop, and the bill will be adjusted (keeping in
                mind your refunded products).
              </li>
              <h2 className="text-xl font-semibold my-5">Contact Us</h2>
              <li className="text-lg">
                If you have any questions please contact us through our website
                or social media.
              </li>
            </div>
          </div>
        </div>
      </div>
      {isShippingDelivery && (
        <div className="">
          <div className="">
            <img
              src="https://aponstore.com/wp-content/uploads/2021/08/male-couriers-delivering-parcels_74855-14101.jpg"
              alt=""
            />
          </div>
          <div className="mx-3 mt-10">
            <h1 className="text-4xl font-semibold mb-10">
              Currently Delivering <br />( Mirpur DOHS )
            </h1>
            <div className="text-left">
              <h2 className="text-xl font-semibold mb-5">Delivery</h2>
              <li className="text-lg">
                Delivery Charge is Tk. 40 per delivery.
              </li>
              <li className="text-lg my-3">
                Your order will be delivered to the address you provide at
                checkout as quickly as possible.
              </li>
              <li className="text-lg">
                We offer doorstep delivery in Mirpur DOHS, Dhaka.
              </li>
              <h2 className="text-xl font-semibold my-5">Return Policy</h2>
              <li className="text-lg">
                Items must be returned in their original condition and packaging
                within 6 hours of purchase.
              </li>
              <li className="text-lg mt-3">
                You will not receive any cash refunds, rather you can reorder
                items from our shop, and the bill will be adjusted (keeping in
                mind your refunded products).
              </li>
              <h2 className="text-xl font-semibold my-5">Contact Us</h2>
              <li className="text-lg">
                If you have any questions please contact us through our website
                or social media.
              </li>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShippingAndDelivery;
