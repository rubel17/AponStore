import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="AP-container">
      <div className="xl:flex xl:w-11/12 mx-auto">
        <div className="mx-3 md:mx-20 xl:mx-0 mt-10 xl:mt-28">
          <img
            src="https://aponstore.com/wp-content/uploads/2021/10/about-us-3-image-1.jpg"
            alt=""
          />
          <h1 className="text-2xl font-semibold text-left my-4">
            Welcome to the <span className="text-orange-800">Apon Store</span>
            .com
          </h1>
          <Link className="mb-5 text-sm bg-orange-800 p-3 flex justify-start w-28 rounded-3xl text-white font-semibold">
            VIEW MORE
          </Link>
        </div>
        <div className="mx-3 md:mx-20 xl:mx-0 xl:ml-16 my-10">
          <h1 className="text-5xl font-semibold">About Us</h1>
          <p className="text-gray-400 text-left mt-4 text-lg">
            Apon Store was founded in 2023 to serve as a one-stop shop for all
            your groceries and daily needs delivered right to your doorstep.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            <div className="mt-10 lg:mt-0 w-60">
              <div className="flex items-center">
                <img
                  src="https://aponstore.com/wp-content/uploads/elementor/thumbs/customer-qg2ia168xxul0gammzy3tiupq3zl07bg1nwsllt9eu.png"
                  alt=""
                />
                <h4 className="text-xl font-semibold ml-5">Company Values</h4>
              </div>
              <p className="text-left mt-8 text-gray-400 text-lg">
                Apon Store is the digital version of your neighborhood grocery
                store, with an easy and seamless customer journey that makes
                your everyday shopping a breezer!
              </p>
            </div>
            <div className="mt-10 lg:mt-0 w-60">
              <div className="flex items-center">
                <img
                  src="https://aponstore.com/wp-content/uploads/elementor/thumbs/leadership-qg2idueonr2g3iradn9mxk80gd7680g98j5oo05s6e.png"
                  alt=""
                />
                <h4 className="text-xl font-semibold ml-5">Mission</h4>
              </div>
              <p className="text-left mt-8 text-gray-400 text-lg">
                Apon Store wants to serve all segments of customers - not just
                the technologically apt crowd. We want to create a platform that
                is inclusive and accessible to everyone - be it the elder
                population, your homemaker, or your watchman!
              </p>
            </div>
            <div className="mt-10 lg:mt-0 w-60">
              <div className="flex items-center">
                <img
                  src="https://aponstore.com/wp-content/uploads/elementor/thumbs/target-1-qg2ik5vmlnpu55kvhdlcoytk7m1zyrjart16sysicm.png"
                  alt=""
                />
                <h4 className="text-xl font-semibold ml-5">Vision</h4>
              </div>
              <p className="text-left mt-8 text-gray-400 text-lg">
                Apon Store started out small, much like your neighborhood store.
                We plan on scaling slowly and gently, never having to compromise
                on the quality of service we provide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
