import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BasicStatistics from "../components/Statistics";
import VideoFeaures from "../components/VideoFeatures";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <HeroSection />
      <VideoFeaures />
      <BasicStatistics />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default HomePage;
