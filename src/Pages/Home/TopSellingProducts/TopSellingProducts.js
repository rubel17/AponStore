import React from "react";
import "./TopSellingProducts.css";
import TopSelling from "../../../assets/image/Top selling product.png";
import { useQuery } from "@tanstack/react-query";
import HomeSingleProduct from "../HomeSingleProduct/HomeSingleProduct";

const TopSellingProducts = () => {
  const { data: TSproduct = [], isLoading } = useQuery({
    queryKey: ["/Shop"],
    queryFn: () =>
      fetch("https://apon-store-server-gsfwzw8jc-rubelrk.vercel.app/Shop").then(
        (res) => res.json()
      ),
  });
  if (isLoading) {
    <div>Loading........</div>;
  }

  return (
    <div>
      {/* category text */}
      <div>
        <h1 className="md:text-2xl font-bold text-start pb-3 border-b-2">
          <span className="border-b-2 border-orange-900 pb-3.5">
            TOP SELLING PRODUCTS
          </span>
        </h1>
      </div>
      {/* category products */}
      <div className="xl:flex">
        <div className="mt-8">
          <img className="w-full h-full" src={TopSelling} alt="" />
        </div>
        <div className="xl:w-full mt-8 ml-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-1">
          {TSproduct?.map((product) => (
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

export default TopSellingProducts;
