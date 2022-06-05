import React from "react";
import "./home.scss";

import bgright from "../../assets/img/bgright.svg";
import rikshaw1 from "../../assets/img/rikshaw1.png";
import rikshaw2 from "../../assets/img/rikshaw2.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="left_container">
          <div className="left_main">
            <h3>Welcome to</h3>
            <h1>SAHEJ SAVARI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eius earum odit quisquam quam architecto vel a? Quod, molestias?
              Minus quis eveniet laboriosam dolorem neque!
            </p>
          </div>
          <div className="left_buttons">
            <a href="#products">
              <button className="primary_btn">Products</button>
            </a>
            <a href="#contact">
              <button className="secondary_btn">Contact</button>
            </a>
          </div>
          <div className="scroll-down"></div>
        </div>
        <div className="right_container">
          <img className="bgright" src={bgright} alt="" />
          <div className="images_container">
            <div className="images">
              <img src={rikshaw1} alt="rikshaw2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
