import React from "react";
import { Link } from "react-router-dom";

const Billing = () => {
  return (
    <>
      <div className="w-3/5 mx-2 md:w-8/12 my-8 md:mx-auto">
        <h1 className=" text-start text-xl font-semibold mb-4">
          BILLING Address
        </h1>
        <div className="md:flex md:mr-2 mb-4">
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-gray-600 text-left">
              First Name <span className="text-orange-800">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="block w-full px-3 py-3 mr-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-gray-600 text-left md:ml-2">
              Last Name <span className="text-orange-800">*</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="block w-full md:ml-2 px-3 py-3 mr-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
        </div>
        <label className="mb-2 block text-sm font-medium text-gray-600 text-left">
          Company Name (Optional)
        </label>
        <input
          type="text"
          placeholder="Company Name (Optional)"
          className="block w-full px-3 py-3 mr-6 mb-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <div className="text-start mb-4">
          <p>Country / Region</p>
          <p className="mt-2 font-bold">Bangladesh</p>
        </div>

        <label className="mb-2 block text-sm font-medium text-gray-600 text-left">
          Street address<span className="text-orange-800">*</span>
        </label>
        <input
          type="text"
          placeholder="House Number and Street Name"
          className="mb-4 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <label className="mb-2 block text-sm font-medium text-gray-600 text-left">
          Apartment
        </label>
        <input
          type="text"
          placeholder="Apartment, Suite, Unit etc (Optional)"
          className="mb-4 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <label className="mb-2 block text-sm font-medium text-gray-600 text-left">
          Town / City <span className="text-orange-800">*</span>
        </label>
        <input
          type="text"
          placeholder="Town / City"
          className="mb-4 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />

        <label className="mb-2 block text-sm font-medium text-gray-600 text-left">
          District <span className="text-orange-800">*</span>
        </label>
        <input
          type="text"
          placeholder="District"
          className="mb-4 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />

        <label className="mb-2 block text-sm font-medium text-gray-600 text-left">
          Postcode / ZIP (optional)
        </label>
        <input
          type="text"
          placeholder="Post Code / ZIP (Optional)"
          className="mb-4 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <label className="mb-2 block text-sm font-medium text-gray-600 text-left">
          Phone Number <span className="text-orange-800">*</span>
        </label>
        <input
          type="number"
          placeholder="Phone Number"
          className="mb-4 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <label className="mb-2 block text-sm font-medium text-gray-600 text-left">
          Email Address <span className="text-orange-800">*</span>
        </label>
        <input
          type="email"
          placeholder="Email Address"
          className="mb-4 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <Link className="bg-green-700 py-3 px-5 w-40 font-medium flex justify-start text-white hover:bg-green-800">
          SAVE ADDRESS
        </Link>
      </div>
    </>
  );
};

export default Billing;
