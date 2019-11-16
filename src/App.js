import React from "react";
import "./App.css";
import { Button, Col, Row } from "antd";
import HeaderWrapper from "./components/Header";
import FooterWrapper from "./components/Footer";

import mercury from "./assets/mercury.png";
import venus from "./assets/venus.png";
import moon from "./assets/moon.png";
import mars from "./assets/mars.png";
import jupiter from "./assets/jupiter.png";
import saturn from "./assets/saturn.png";
import durable from "./assets/durable.svg";
import adjsize from "./assets/adjsize.svg";
import thermoreg from "./assets/thermoreg.svg";
import magnet from "./assets/magnet.svg";
import lacing from "./assets/lacing.svg";
import tracker from "./assets/tracker.svg";
import tesla from "./assets/tesla.svg";
import nike from "./assets/nike.svg";
import apple from "./assets/apple.svg";
import vr from "./assets/vr.svg";
import suit from "./assets/suit.png";
import shoe from "./assets/shoe.png";

function App() {
  return (
    <div className="App">
      <section className="sp-banner">
        <HeaderWrapper />
        <Col span={24} className="sp-banner-content">
          <div className="sp-label">New destination</div>
          <h2>
            To the Moon <br />
            for today's afternoon
          </h2>
          <h4>Flight to the Moon and back in one day. Safely.</h4>
          <div className="sp-new-price">from $899</div>
          <div className="sp-old-price">$1,499</div>
          <Button className="sp-book-now">BOOK NOW</Button>
        </Col>
      </section>

      <section className="sp-section">
        <Row>
          <Col span={24}>
            <h1 className="sp-header-title">Available destinations</h1>
          </Col>
        </Row>
        <div className="sp-slider">
          <ul>
            <li>
              <div className="sp-img">
                <img src={mercury} alt="Mercury" />
              </div>
              <div className="sp-content">
                <div className="sp-label">Dreamy</div>
                <h4>Mercury</h4>
                <div className="sp-price">from $1,599</div>
              </div>
            </li>
            <li>
              <div className="sp-img">
                <img src={venus} alt="Venus" />
              </div>
              <div className="sp-content">
                <div className="sp-label">Dangerous</div>
                <h4>Venus</h4>
                <div className="sp-price">from $1,399</div>
              </div>
            </li>
            <li>
              <div className="sp-img">
                <img src={moon} alt="Moon" />
              </div>
              <div className="sp-content">
                <div className="sp-label">Romantic</div>
                <h4>Moon</h4>
                <div className="sp-price">from $899</div>
              </div>
            </li>
            <li>
              <div className="sp-img">
                <img src={mars} alt="Mars" />
              </div>
              <div className="sp-content">
                <div className="sp-label">Mysterious</div>
                <h4>Mars</h4>
                <div className="sp-price">from $1,299</div>
              </div>
            </li>
            <li>
              <div className="sp-img">
                <img src={jupiter} alt="Jupiter" />
              </div>
              <div className="sp-content">
                <div className="sp-label">Majestic</div>
                <h4>Jupiter</h4>
                <div className="sp-price">from $1,999</div>
              </div>
            </li>
            <li>
              <div className="sp-img">
                <img src={saturn} alt="Saturn" />
              </div>
              <div className="sp-content">
                <div className="sp-label">Mysterious</div>
                <h4>Saturn</h4>
                <div className="sp-price">from $1,299</div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="sp-section">
        <Row>
          <Col span={24}>
            <h1 className="sp-header-title">Special programs for everyone</h1>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={8}>
                <div className="sp-vbox">
                  <div className="sp-content">
                    <div className="sp-label">For students</div>
                    <p>Following the footsteps of the Curiosity Rover</p>
                  </div>
                </div>
              </Col>
              <Col span={16}>
                <Row>
                  <Col span={24}>
                    <div className="sp-hbox">
                      <div>
                        <span className="sp-price">from $899</span>
                        <span>| person</span>
                      </div>
                      <p>
                        Baggy racing <br />
                        at the Apollo Camp
                      </p>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="sp-sbox1">
                      <div className="sp-content">
                        <p>Most mystical satellites of Jupiter</p>
                        <Button>PREORDER</Button>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="sp-sbox2">
                      <div className="sp-content">
                        <div className="sp-label">Mercury tour</div>
                        <p>Brightest place in the Solar System</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

      <section className="sp-section sp-set-bg">
        <Row>
          <Col span={24}>
            <h1 className="sp-header-title text-left">
              Your comfort made by Nike
            </h1>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={12}>
                <h3 className="sp-inner-title">Nike SPACED Tech Shield</h3>
                <p className="sp-para-one">
                  If you do want to adjust it, you can turn on AutoSize button
                  for specify waist girth and check the battery using buttons on
                  the sleeve. Battery time is ten hours with auto adjustment, or
                  'days' with low power mode.
                </p>
                <ul className="sp-flex-grid">
                  <li>
                    <img src={durable} alt="" />
                    <p className="sp-para-two">
                      Durable <br />
                      and ultralight
                    </p>
                  </li>
                  <li>
                    <img src={adjsize} alt="" />
                    <p className="sp-para-two">
                      Adjustable <br />
                      size
                    </p>
                  </li>
                  <li>
                    <img src={thermoreg} alt="" />
                    <p className="sp-para-two">
                      Perfect <br />
                      thermoregulation
                    </p>
                  </li>
                </ul>
              </Col>
              <Col span={12} className="text-right">
                <div className="sp-suit-bg">
                  <img className="sp-suit-img" src={suit} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={12} className="text-left">
                <img className="sp-shoe-img" src={shoe} alt="" />
              </Col>
              <Col span={12}>
                <h3 className="sp-inner-title">Nike Air Mag SPACED edition</h3>
                <p className="sp-para-one">
                  Back To The Future fans rejoice. These self-lacing ‘Nike Mags’
                  based on the fictional pair from the second film worn by
                  Michael J. Fox, have been recreated by the company, equipped
                  with lights and the ability to auto-tighten using power laces.
                  By placing your foot in the shoe, pressure on the sole
                  initiates the self-lacing mechanism, strapping you in without
                  needing to touch the shoes yourself.
                </p>
                <ul className="sp-flex-grid">
                  <li>
                    <img src={magnet} alt="" />
                    <p className="sp-para-two">Magnetic soles</p>
                  </li>
                  <li>
                    <img src={lacing} alt="" />
                    <p className="sp-para-two">Automatic lacing</p>
                  </li>
                  <li>
                    <img src={tracker} alt="" />
                    <p className="sp-para-two">Built-in tracker</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="sp-our-partner">
            <h1 className="sp-header-title text-center">Our partners</h1>
            <div className="sp-partners-img">
              <ul>
                <li>
                  <img src={tesla} alt="tesla" />
                </li>
                <li>
                  <img src={nike} alt="nike" />
                </li>
                <li>
                  <img src={apple} alt="apple" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>

      <section className="sp-section sp-tour-bg">
        <div className="sp-flex-container">
          <div className="sp-content">
            <h1 className="sp-header-title text-center">
              Virtual tour across the ship
            </h1>
            <div>
              <img src={vr} alt="" />
              VR-compatible
            </div>
            <Button className="sp-custom-btn">Have a look</Button>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <Row>
          <Col span={24}>
            <h1 className="sp-header-title text-center">
              What SPACED company is
            </h1>
            <div className="sp-spaced-details">
              <ul>
                <li>
                  <div>8</div>
                  <span>
                    the existing spaceports <br />
                    with multiple gates
                  </span>
                </li>
                <li>
                  <div>42</div>
                  <span>
                    launches all over <br />
                    the world daily
                  </span>
                </li>
                <li>
                  <div>110</div>
                  <span>
                    travellers on each ship <br />
                    with maximum comfort
                  </span>
                </li>
                <li>
                  <div>17k+</div>
                  <span>
                    people already visited the <br />
                    space with our help
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>

      <section className="sp-section sp-proud-sec">
        <Row>
          <Col span={16}>
            <h1 className="sp-header-title">
              We proud to be the most tech company in the world
            </h1>
            <p className="sp-para-three">
              SPACED has gained worldwide attention for a series of historic
              milestones. It is the only private company ever to return a
              spacecraft from low-Earth orbit, which it first accomplished in
              January 2018. The company made history again in March 2018 when
              its Atlas spacecraft delivered travellers to and from the
              International Moon Station — a challenging feat previously
              accomplished only by NASA. Since then Atlas has delivered
              travellers to and from other planets of the solar system,
              providing regular Passenger Transportation missions for everybody.
            </p>
            <div className="sp-user-info">
              <div className="sp-name">Buzz Lightyear</div>
              <div className="sp-details">Astronaut, Founder of SPACED</div>
            </div>
          </Col>
        </Row>
      </section>

      <FooterWrapper />
    </div>
  );
}

export default App;
