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
            <div className="product_card">
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
                  </div>
                </div>
              </div>
              <div className="card_features">
                <h2>Features</h2>
                <div className="features_section">
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Solid chassis body</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide front glassy</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM with double speaker</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central locking</p>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Solid chassis body</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide front glass</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM with double speaker</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central locking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_card">
              <img src={blob2} alt="blob1" className="blob" />
              <div className="card_upper">
                <img src={rik2} alt="" />
              </div>
              <div className="card_lower">
                <h3>SILVER</h3>
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
                  </div>
                </div>
              </div>
              <div className="card_features">
                <h2>Features</h2>
                <div className="features_section">
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Solid chassis body</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide front glassy</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM with double speaker</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central locking</p>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Solid chassis body</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide front glass</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM with double speaker</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central locking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products_main">
            <div className="product_card">
              <img src={blob3} alt="blob1" className="blob" />
              <div className="card_upper">
                <img src={rik3} alt="" />
              </div>
              <div className="card_lower">
                <h3>PLATINUM</h3>
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
                  </div>
                </div>
              </div>
              <div className="card_features">
                <h2>Features</h2>
                <div className="features_section">
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Solid chassis body</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide front glassy</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM with double speaker</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central locking</p>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Solid chassis body</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide front glass</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM with double speaker</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central locking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_card">
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
                  </div>
                </div>
              </div>
              <div className="card_features">
                <h2>Features</h2>
                <div className="features_section">
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Solid chassis body</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide front glassy</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM with double speaker</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central locking</p>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div></div>
                      <p>Solid chassis body</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Wide front glass</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>FM with double speaker</p>
                    </div>
                    <div className="feature">
                      <div></div>
                      <p>Central locking</p>
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
