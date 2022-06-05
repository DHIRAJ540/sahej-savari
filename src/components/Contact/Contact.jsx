import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import details from "../../../config";

import instaIcon from "../../assets/img/insta.svg";
import facebookIcon from "../../assets/img/facebook.svg";
import twitterIcon from "../../assets/img/twitter.svg";
import phoneIcon from "../../assets/img/phone.svg";
import emailIcon from "../../assets/img/email.svg";
import locationIcon from "../../assets/img/location.svg";
import mapImg from "../../assets/img/map.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("hi");

    emailjs.sendForm(details.USER_ID, details.TEMPLATE_ID, form.current).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
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
            <form className="contact_form">
              <div className="form_element">
                <h6 htmlFor="name">Name</h6>
                <input type="text" />
              </div>
              <div className="form_element">
                <h6 htmlFor="name">E-mail</h6>
                <input type="email" />
              </div>
              <div className="form_element">
                <h6 htmlFor="name">Number</h6>
                <input type="number" />
              </div>
              <div className="form_element">
                <h6 htmlFor="name">Message</h6>
                <input type="text" />
              </div>
              <button className="primary_btn" type="submit">
                Submit
              </button>
            </form>
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
