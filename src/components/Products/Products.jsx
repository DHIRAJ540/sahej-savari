import React from "react";
import "./products.scss";

import blob1 from "../../assets/img/blob1.svg";
import blob2 from "../../assets/img/blob2.svg";
import blob3 from "../../assets/img/blob3.svg";
import blob4 from "../../assets/img/blob4.svg";
import rik1 from "../../assets/img/rik_1_small.png";
import rik2 from "../../assets/img/rik_2_small.png";
import rik3 from "../../assets/img/rik_3_small.png";
import rik4 from "../../assets/img/rik_4_small.png";

const Products = () => {
  return (
    <div className="products" id="products">
      <div className="products_container">
        <div className="products_header">
          <div className="header_upper">
            <h3>PRODUCTS</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="product_cards_section">
          <div className="products_main">
            <div id="gold" className="product_card">
              <img src={blob1} alt="blob1" className="blob" />
              <div className="card_upper">
                <img src={rik1} alt="" />
              </div>
              <div className="card_lower">
                <h3>GOLD</h3>
                <div className="colors_section">
                  <h5>Colors:</h5>
                  <div className="colors">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <p style={{ marginLeft: "1rem" }}>
                      Metailc variants available
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_features">
                <h2>Features</h2>
                <div className="features_section">
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Double Platform Chassis</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide Front Glass</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Heavy Duty Shockers</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM Radio with Double Speakers</p>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Stepney with Cover</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central Locking</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>LED Cabin Light</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Heavy Curtains</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="diamond" className="product_card">
              <img src={blob2} alt="blob1" className="blob" />
              <div className="card_upper">
                <img src={rik2} alt="" />
              </div>
              <div className="card_lower">
                <h3>DIAMOND</h3>
                <div className="colors_section">
                  <h5>Colors:</h5>
                  <div className="colors">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <p style={{ marginLeft: "1rem" }}>
                      Metailc variants available
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_features">
                <h2>Features</h2>
                <div className="features_section">
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Double Platform Chassis</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Alloy Rim</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide Front Glass with Wiper</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Heavy Duty Shockers</p>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>FM Radio with Double Speakers</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central Locking</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Fan and Carrier</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>CLED Cabin Light and Roof Light</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products_main">
            <div id="goldss" className="product_card">
              <img src={blob3} alt="blob1" className="blob" />
              <div className="card_upper">
                <img src={rik3} alt="" />
              </div>
              <div className="card_lower">
                <h3>GOLD SS</h3>
                <div className="colors_section">
                  <h5>Colors:</h5>
                  <div className="colors">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <p style={{ marginLeft: "1rem" }}>
                      Metailc variants available
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_features">
                <h2>Features</h2>
                <div className="features_section">
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Stainless Steel Body</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Double Platform Chassis</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide Front Glass</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Heavy Duty Shockers</p>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>FM Radio with Double Speakers</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Stepney with Cover</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central Locking</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>LED Cabin Light</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="loader" className="product_card">
              <img src={blob4} alt="blob1" className="blob" />
              <div className="card_upper">
                <img src={rik4} alt="" />
              </div>
              <div className="card_lower">
                <h3>LOADER</h3>
                <div className="colors_section">
                  <h5>Colors:</h5>
                  <div className="colors">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <p style={{ marginLeft: "1rem" }}>
                      Metailc variants available
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_features">
                <h2>Features</h2>
                <div className="features_section">
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Double Platform Chassis</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide Front Glass</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Heavy Duty Shockers</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM Radio with Double Speakers</p>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Central Locking</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Waterproof Throttle</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>LED Cabin Light</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Tool Kit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
