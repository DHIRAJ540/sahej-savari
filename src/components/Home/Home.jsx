import React from "react";
import "./home.scss";

import bgright from "../../assets/img/bgright.svg";
import rikshaw1 from "../../assets/img/rikshaw1.png";
import rikshaw2 from "../../assets/img/rikshaw2.png";
import rikshawg from "../../assets/img/rik_g.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="left_container">
          <div className="left_main">
            <div className="header_down">
              <h1>
                INDIA'S <span>NO.1</span> E-RIKSHAW
              </h1>
            </div>
            <p>
              Your search for top quality EV rickshaw and flawless customer
              service ends here!
            </p>
            <p>वारंटी का वादा, कम कीमत और माइलेज ज्यादा</p>
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
              <img src={rikshawg} alt="rikshaw2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
