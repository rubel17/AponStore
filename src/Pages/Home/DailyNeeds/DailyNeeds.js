import React from "react";
import "./DailyNeeds.css";
import dailyNeeds from "../../../assets/image/daily needs.png";
import HomeSingleProduct from "../HomeSingleProduct/HomeSingleProduct";
import { useQuery } from "@tanstack/react-query";

const DailyNeeds = () => {
  const { data: DNproduct = [] } = useQuery({
    queryKey: ["/Shop"],
    queryFn: () =>
      fetch("https://apon-store-server-rubelrk.vercel.app/Shop").then((res) =>
        res.json()
      ),
  });

  return (
    <div className="mt-5 xl:mt-20">
      {/* category text */}
      <div>
        <h1 className="md:text-2xl font-bold text-start pb-3 border-b-2">
          <span className="border-b-2 border-orange-900 pb-3.5">
            DAILY NEEDS
          </span>
        </h1>
      </div>
      {/* category products */}
      <div className="xl:flex">
        <div className="mt-8">
          <img className="w-full h-full" src={dailyNeeds} alt="" />
        </div>
        <div className="xl:w-full mt-8 ml-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-1">
          {DNproduct?.map((product) => (
            <HomeSingleProduct
              key={product?._id}
              product={product}
            ></HomeSingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyNeeds;
