import React from "react";
import "./portfolio.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GetInTouch from "../../components/getInTouch/GetInTouch";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />
      Portfolio
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Portfolio;
