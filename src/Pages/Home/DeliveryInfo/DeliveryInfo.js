import React from "react";
import "./DeliveryInfo.css";

const DeliveryInfo = () => {
  return (
    <div className="hidden lg:flex justify-evenly bg-orange-900 h-24 mx-4 mt-5">
      <div className="flex items-center">
        <svg
          width="80px"
          height="64px"
          viewBox="0 -2.67 41.34 41.34"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-165 -125)">
            <path
              id="Path_1"
              data-name="Path 1"
              d="M203,137h-4v-7a2,2,0,0,0-4,0v7h-7l-2.5-10.1A2.672,2.672,0,0,0,183,125H171a2.006,2.006,0,0,0-2,2v10a4.122,4.122,0,0,0-4,4.2V152h0a9.024,9.024,0,0,0,18,.9h8.4a6.537,6.537,0,0,0-.4,2.1,6,6,0,0,0,12,0,5.779,5.779,0,0,0-1-3.2,5.367,5.367,0,0,0,1.6-2.1l2.5-8a3.549,3.549,0,0,0-.3-3.2A3.105,3.105,0,0,0,203,137Zm-21.1-8,2,8H173v-8ZM174,157a5,5,0,1,1,5-5A4.951,4.951,0,0,1,174,157Zm23,0a2,2,0,1,1,2-2A2.006,2.006,0,0,1,197,157Zm2.9-8.7a1.272,1.272,0,0,1-.9.7H182.5a9.006,9.006,0,0,0-8.5-5.9,9.212,9.212,0,0,0-5,1.5V141h33Z"
              fill="#ffffff"
            />
          </g>
        </svg>
        <p className="text-white font-semibold text-xl">30 Minutes Delivery</p>
      </div>
      <div className="flex items-center">
        <svg
          width="80px"
          height="64px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          fill="#8F4126"
        >
          {/* <rect width="24" height="24" fill="none" /> */}
          <path d="M12,2a8,8,0,0,0-8,8v1.9A2.92,2.92,0,0,0,3,14a2.88,2.88,0,0,0,1.94,2.61C6.24,19.72,8.85,22,12,22h3V20H12c-2.26,0-4.31-1.7-5.34-4.39l-.21-.55L5.86,15A1,1,0,0,1,5,14a1,1,0,0,1,.5-.86l.5-.29V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v5H13.91a1.5,1.5,0,1,0-1.52,2H20a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V10A8,8,0,0,0,12,2Z" />
        </svg>
        <p className="text-white font-semibold text-xl">24/7 SUPPORT</p>
      </div>
      <div className="flex items-center">
        <svg
          width="80px"
          height="64px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="3"
          stroke="#ffffff"
          fill="none"
        >
          <path d="M50.93,34.13v7.93a2.75,2.75,0,0,1-2.75,2.76H12.09A2.85,2.85,0,0,1,9.24,42V18a1.8,1.8,0,0,1,1.81-1.8H29.1" />
          <path d="M51.39,50.87H9.48a4.11,4.11,0,0,1-4.12-4.12V44.82H55v2.4A3.65,3.65,0,0,1,51.39,50.87Z" />
          <path d="M31.64,13.13H56.5a2.14,2.14,0,0,1,2.14,2.14V31.66A2.14,2.14,0,0,1,56.5,33.8H30.77a2.14,2.14,0,0,1-2.14-2.14V16.13A3,3,0,0,1,31.64,13.13Z" />
          <line x1="28.63" y1="17.53" x2="58.64" y2="17.53" />
          <line x1="28.63" y1="21.36" x2="58.64" y2="21.36" />
          <path d="M52.9,25.77a2.35,2.35,0,0,0-1.42.49,2.37,2.37,0,0,0-1.43-.49,2.33,2.33,0,1,0,0,4.66,2.37,2.37,0,0,0,1.43-.49,2.33,2.33,0,1,0,1.42-4.17Z" />
        </svg>
        <p className="text-white font-semibold text-xl">ONLINE PAYMENT</p>
      </div>
    </div>
  );
};

export default DeliveryInfo;
