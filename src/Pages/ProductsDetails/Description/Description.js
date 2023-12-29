import React from "react";
import "./Description.css";

const Description = ({ isDescription }) => {
  return (
    <div className="text-start">
      <p className="hidden xl:block ml-5 mx-auto mt-5">
        Refreshingly Original. Caffeine-free with 100% natural flavors for a
        crisp, clean, refreshing taste. <br /> INGREDIENTS FILTERED CARBONATED
        WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, <br /> POTASSIUM CITRATE,
        NATURAL FLAVORS, CALCIUM DISODIUM EDTA (TO PROTECT FLAVOR)
      </p>
      {isDescription && (
        <p className="ml-5 mt-2">
          Refreshingly Original. Caffeine-free with 100% natural flavors for a
          crisp, clean, refreshing taste. INGREDIENTS FILTERED CARBONATED WATER,
          HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, POTASSIUM CITRATE, NATURAL
          FLAVORS, CALCIUM DISODIUM EDTA (TO PROTECT FLAVOR)
        </p>
      )}
    </div>
  );
};

export default Description;
