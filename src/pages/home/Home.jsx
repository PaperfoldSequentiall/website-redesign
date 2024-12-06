import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GetInTouch from "../../components/getInTouch/GetInTouch";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <h1>Home</h1>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
