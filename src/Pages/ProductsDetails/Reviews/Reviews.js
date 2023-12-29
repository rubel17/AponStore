import React, { useState } from "react";
import "./Reviews.css";

const Reviews = ({ isReviews }) => {
  const [textareaValue, setTextareaValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted text:", textareaValue);
    // Handle form submission logic here
  };
  return (
    <>
      <div className="hidden xl:block">
        <div className="flex  text-start mt-10">
          <div className="w-1/2 ml-10">
            <h1 className="text-sm font-semibold">REVIEWS</h1>
            <p className="text-gray-500">There are no reviews yet.</p>
          </div>
          <div className="w-1/2">
            <h1 className="text-sm font-semibold">
              BE THE FIRST TO REVIEW “7 UP CAN 250 ML”
            </h1>
            <p className="mt-4">
              Your rating <span className="text-red-600">*</span>:
            </p>
            <p className="mt-4">
              Your review <span className="text-red-600">*</span>
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start mr-4 mt-4"
            >
              <textarea
                placeholder="Enter review here..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                rows={5}
                className="border bg-white p-2 rounded focus:outline-none flex-grow w-full resize"
              />
              <button
                type="submit"
                className="mt-4 bg-green-600 hover:bg-orange-800 text-white px-4 py-3 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {isReviews && (
        <div className="text-start mx-2 mt-3">
          <div className="mb-4">
            <h1 className="text-sm font-semibold">REVIEWS</h1>
            <p className="text-gray-500">There are no reviews yet.</p>
          </div>
          <div className="">
            <h1 className="text-sm font-semibold">
              BE THE FIRST TO REVIEW “7 UP CAN 250 ML”
            </h1>
            <p className="mt-3">
              Your rating <span className="text-red-600">*</span>:
            </p>
            <p className="mt-3">
              Your review <span className="text-red-600">*</span>
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start mr-4 mt-3"
            >
              <textarea
                placeholder="Enter review here..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                rows={5}
                className="border bg-white p-2 rounded focus:outline-none flex-grow w-full resize"
              />
              <button
                type="submit"
                className="mt-3 bg-green-600 hover:bg-orange-800 text-white px-4 py-3 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
