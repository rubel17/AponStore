import React from "react";
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
  return (
    <div className="">
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
  );
};

export default Home;
