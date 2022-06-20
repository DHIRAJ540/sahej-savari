import React from "react";
import "./about.scss";
import rightImg from "../../assets/img/right_display.svg";
import featuresImg from "../../assets/img/features.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_container">
        <div className="about_header">
          <div className="header_upper">
            <h3>About Sahej</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="about_main">
          <div className="about_left">
            <h4>India’s answer to Sustainable Transportation!</h4>
            <p>
              Sahej Savari was conceptualized as a brand that caters to the
              Indian masses and their dynamic preferences. We are focused on
              delivering quality products with unparalleled warranty which no
              other competitor offers.
            </p>
            <p>
              Our commitment is based on vast experience in the field of
              automotive industry with dedicated focus on R&D and innovation to
              provide customized e-rickshaws. Quality has been our hallmark
              which makes us stand apart from rest of the crowd and we intend to
              expand our footprint across entire India to promote eco-friendly
              transportation and hand over a better world to our future!
            </p>
            <p>
              The JBL Group, owner of the brand Sahej Savari, is an organization
              which works on the principles of ethics and morality with
              “customer first” mindset. Its founders believe that the next era
              of growth will be based on sustainability practices.
            </p>
            <p>
              The company is committed to provide the intracity commuters a
              unique and wonderful experience in their last mile journeys In
              this quest, the company plans to partner with dealers across India
              and thus help transition into an eco-friendly world
            </p>
          </div>
          <div className="about_right">
            <img src={rightImg} alt="rightImg" />
          </div>
        </div>

        <div className="about_footer">
          <img src={featuresImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
