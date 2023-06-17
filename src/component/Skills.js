import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Lorem ncd cknd vjfdbv vjfdb</p>
              <Carousel>
                <Carousel.Item>
                  <Carousel.Caption className="skill-slider">
                    <div className="item">
                      <img src={meter1} alt="Img" />
                      <h3>React js</h3>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="Img" />
                      <h3>JavaScript</h3>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="Img" />
                      <h3>Redux</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption className="skill-slider">
                    <div className="item">
                      <img src={meter2} alt="Img" />
                      <h3>Electron Js</h3>
                    </div>

                    <div className="item">
                      <img src={meter1} alt="Img" />
                      <h3>HTML</h3>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="Img" />
                      <h3>CSS</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption className="skill-slider">
                    <div className="item">
                      <img src={meter2} alt="Img" />
                      <h3>Bootstrap</h3>
                    </div>

                    <div className="item">
                      <img src={meter1} alt="Img" />
                      <h3>React Bootstrap </h3>
                    </div>

                    <div className="item">
                      <img src={meter2} alt="Img" />
                      <h3>Web Developer</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img
        src={colorSharp}
        alt="colorSharp"
        className="background-image-left"
      /> */}
    </section>
  );
};

export default Skills;
