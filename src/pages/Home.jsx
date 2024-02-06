import React from "react";
import Banner from "./UI/Home UI/Banner";
import HomeCategory from "./UI/Home UI/HomeCategory";
import CategoryShowCase from "./UI/Home UI/CategoryShowCase";
import Register from "./UI/Home UI/Register";
import Location from "./UI/Home UI/Location";
import AboutUs from "./UI/Home UI/AboutUs";
import AppSection from "./UI/Home UI/AppSection";
import Sponsor from "./UI/Home UI/Sponsor";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <Location />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </div>
  );
};

export default Home;
