import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import MainCategories from "./MainCategories/MainCategories";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import DailyNeeds from "./DailyNeeds/DailyNeeds";
import BabyProducts from "./BabyProducts/BabyProducts";
import StationeryProducts from "./StationeryProducts/StationeryProducts";
import HygieneProducts from "./HygieneProducts/HygieneProducts";
import Advertisement from "./Advertisement/Advertisement";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="AP-container">
      <div className="mx-3 md:mx-4 lg:mx-5 xl:mx-0">
        <Banner></Banner>
        <DeliveryInfo></DeliveryInfo>
        <MainCategories></MainCategories>
        <TopSellingProducts></TopSellingProducts>
        <DailyNeeds></DailyNeeds>
        <BabyProducts></BabyProducts>
        <StationeryProducts></StationeryProducts>
        <HygieneProducts></HygieneProducts>
        <Advertisement></Advertisement>
      </div>
    </div>
  );
};

export default Home;
