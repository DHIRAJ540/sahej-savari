import React from "react";
import "./gallery.scss";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";
import img6 from "../../assets/img/img6.png";
import img7 from "../../assets/img/img7.png";
import img8 from "../../assets/img/img8.png";
import img9 from "../../assets/img/img9.png";

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="gallery-container">
        <div className="gallery_header">
          <div className="header_upper">
            <h3>GALLERY</h3>
            <div className="line"></div>
          </div>
        </div>
        <section>
          <div className="video">
            <iframe
              width="100%"
              height="800px"
              src="https://www.youtube.com/embed/BiIqOO1YHJE"
            ></iframe>
          </div>
        </section>

        <div className="gallery-grid">
          <div className="grid-img">
            <img src={img1} alt="" />
          </div>
          <div className="grid-img grid-col-span2">
            <img src={img2} alt="" />
          </div>
          <div className="grid-img">
            <img src={img3} alt="" />
          </div>
          <div className="grid-img">
            <img src={img4} alt="" />
          </div>
          <div className="grid-img">
            <img src={img5} alt="" />
          </div>
          <div className="grid-img">
            <img src={img6} alt="" />
          </div>
          <div className="grid-img">
            <img src={img7} alt="" />
          </div>
          <div className="grid-img">
            <img src={img8} alt="" />
          </div>
          <div className="grid-img">
            <img src={img9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
