import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import details from "../../../config";
import Select from "react-select";

import instaIcon from "../../assets/img/insta.svg";
import facebookIcon from "../../assets/img/facebook.svg";
import twitterIcon from "../../assets/img/twitter.svg";
import phoneIcon from "../../assets/img/phone.svg";
import emailIcon from "../../assets/img/email.svg";
import locationIcon from "../../assets/img/location.svg";
import mapImg from "../../assets/img/map.png";

const Contact = () => {
  const options = [
    { value: "Prospective Dealer", label: "Prospective Dealer" },
    { value: "Customer", label: "Customer" },
  ];

  const [type, setType] = useState("Customer");

  return (
    <div className="contact" id="contact">
      <div className="contact_container">
        <div className="contact_header">
          <div className="header_upper">
            <h3>CONTACT</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="contact_main">
          <div className="left">
            <form
              target="_blank"
              action="https://formsubmit.co/salesjaisik@gmail.com"
              method="POST"
              className="contact_form"
            >
              <div class="form-group">
                <div class="form-row">
                  <div class="col form_element">
                    <h6 htmlFor="name" style={{ marginBottom: "1rem" }}>
                      You are a
                    </h6>

                    <Select
                      onChange={(e) => setType(e.value)}
                      options={options}
                    />
                  </div>
                  <div class="col" style={{ display: "none" }}>
                    <input
                      type="text"
                      name="type"
                      class="form-control"
                      value={type}
                    />
                  </div>
                  <div class="col form_element">
                    <h6 htmlFor="name">Name</h6>

                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col form_element">
                    <h6 htmlFor="name">E-mail</h6>

                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col form_element">
                    <h6 htmlFor="number">Phone number</h6>

                    <input
                      type="number"
                      name="number"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col form_element">
                    <h6 htmlFor="name">Message</h6>

                    <input
                      type="text"
                      name="message"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <button type="submit" class="primary_btn">
                Submit Form
              </button>
            </form>
            {/* <form
              target="_blank"
              action="https://formsubmit.co/dhirajsubudhi540@gmail.com"
              method="POST"
              className="contact_form"
            >
              <div className="form-group">
                <div className="form_element">
                  <h6
                    htmlFor="name"
                    style={{ marginBottom: "1rem" }}
                    onChange={(e) => setType(e.value)}
                  >
                    You are a
                  </h6>
                  <Select options={options} />
                </div>
                <div className="form_element">
                  <h6 htmlFor="name">Name</h6>
                  <input type="text" className="form-control" />
                </div>
                <div className="form_element">
                  <h6 htmlFor="name">E-mail</h6>
                  <input type="email" className="form-control" />
                </div>
                <div className="form_element">
                  <h6 htmlFor="name">Number</h6>
                  <input type="number" className="form-control" />
                </div>
                <div className="form_element">
                  <h6 htmlFor="name">Message</h6>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <button className="primary_btn" type="submit">
                Submit
              </button>
            </form> */}

            <div className="contact_details">
              <div>
                <img src={phoneIcon} alt="" />
                <p>9212136167, 9315749569</p>
              </div>
              <div>
                <img src={emailIcon} alt="" />
                <p>salesjaisik@gmail.com</p>
              </div>
            </div>
            <div className="socials">
              <img src={instaIcon} alt="" />
              <img src={facebookIcon} alt="" />
              <img src={twitterIcon} alt="" />
            </div>
          </div>
          <div className="right">
            <img src={mapImg} alt="" />
            <div className="address">
              <img src={locationIcon} alt="" />
              <p>
                Jaisik Business Links,
                <br /> Khasra no. 73/16, <br /> Haryana Iron Store, Ghevra, New
                Delhi <br /> Pin. 110041
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
