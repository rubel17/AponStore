import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="AP-container">
      <div className="lg:flex lg:mx-5 xl:mx-0">
        <div className="w-full h-screen border-e-2 lg:pr-10 mt-10 px-2 lg:px-0">
          <iframe
            className="w-full h-full"
            loading="lazy"
            src="https://maps.google.com/maps?q=H-461%2C%20Road-7%2C%20Avenue-5%2C%20Mirpur%20DOHS%2C%20Dhaka%201216&amp;t=m&amp;z=9&amp;output=embed&amp;iwloc=near"
            title="H-461, Road-7, Avenue-5, Mirpur DOHS, Dhaka 1216"
            aria-label="H-461, Road-7, Avenue-5, Mirpur DOHS, Dhaka 1216"
          ></iframe>
        </div>
        <div className="w-full text-start my-10 lg:ml-10 px-2 lg:px-0">
          <p className="text-gray-400 text-base font-medium ">
            INFORMATION ABOUT US
          </p>
          <h1 className="text-xl font-semibold mt-2">
            CONTACT US FOR ANY QUESTIONS
          </h1>
          <form>
            <div className="lg:flex w-full mt-5">
              <div className="w-full">
                <label
                  htmlFor=" Your Name"
                  className="block text-sm font-medium text-gray-600 text-start"
                >
                  Your Name
                </label>
                <input
                  id=" Your Name"
                  type=" Your Name"
                  className="mt-1 p-2 w-full border bg-white"
                  placeholder=" Your Name"
                />
              </div>
              <div className="w-full lg:ml-5 mt-5 lg:mt-0">
                <label
                  htmlFor=" Your Name"
                  className="block text-sm font-medium text-gray-600 text-start"
                >
                  Your Email
                </label>
                <input
                  id=" Your Email"
                  type=" Your Email"
                  className="mt-1 p-2 w-full border bg-white"
                  placeholder=" Your Email"
                />
              </div>
            </div>
            <div className="lg:flex w-full mt-5">
              <div className="w-full">
                <label
                  htmlFor=" Phone Number"
                  className="block text-sm font-medium text-gray-600 text-start"
                >
                  Phone Number
                </label>
                <input
                  id=" Phone Number"
                  type=" Phone Number"
                  className="mt-1 p-2 w-full border bg-white"
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full lg:ml-5 mt-5 lg:mt-0">
                <label
                  htmlFor=" Company"
                  className="block text-sm font-medium text-gray-600 text-start"
                >
                  Company
                </label>
                <input
                  id=" Company"
                  type=" Company"
                  className="mt-1 p-2 w-full border bg-white"
                  placeholder=" Company"
                />
              </div>
            </div>
            <label class="mt-5 block mb-2 text-sm font-medium text-gray-900 ">
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="resize block p-2.5 w-full text-sm bg-white text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"
              placeholder="Write your thoughts here..."
            ></textarea>

            <Link className="bg-gray-200 p-3 md:p-4  font-semibold text-xs md:text-sm">
              ASK A QUESTION
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
