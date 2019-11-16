import React from "react";
import { Layout, Row, Col } from "antd";

import logo from "../assets/logo.svg";
import shape from "../assets/shape.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";

const { Footer } = Layout;

const FooterWrapper = () => {
  return (
    <Footer className="sp-footer">
      <Row>
        <Col span={24} className="sp-footer-flex">
          <div className="sp-footer-logo">
            <img src={logo} alt="Spaced" />
          </div>
          <div className="sp-copyright">
            Copyright © 2018 SPACED Inc. All rights reserved.
          </div>
          <div className="sp-follow-us">
            <span>Follow us:</span>
            <a href="#">
              <img src={shape} alt="" />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterWrapper;
