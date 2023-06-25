import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import prep27 from "../assets/img/prep27.png";
import cloudrent from "../assets/img/cloudrent.png";
import posLogo from "../assets/img/POS_logo.png";
import Ecommerce from "../assets/img/E-commerce.png";
import omiFood from "../assets/img/omifood.png";
import Food from "../assets/img/food.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
const Project = () => {
  const companyProject = [
    {
      titel: "Prep 27",
      descripation: "Design and development",
      ImgUrl: prep27,
      projectDetails: {
        projectLandingPageUrl: "https://prep27.com/",
        projectLogingPageUrl: "https://app.prep27.com/",
      },
    },
    {
      titel: "Cloud Rent",
      descripation: "Development",
      ImgUrl: cloudrent,
      projectDetails: {
        projectLandingPageUrl: "https://www.cloudrent.me/",
        projectLogingPageUrl: "",
      },
    },
    {
      titel: "POS ",
      descripation: "Design and development by use Electron js",
      ImgUrl: posLogo,
      projectDetails: {
        projectLandingPageUrl: "",
        projectLogingPageUrl: "",
      },
    },
  ];

  const ownProject = [
    {
      titel: "E-commerces",
      descripation: "Design and development",
      ImgUrl: Ecommerce,
    },
    {
      titel: "Omifood",
      descripation: "Design",
      ImgUrl: omiFood,
    },
    {
      titel: "Food sherch",
      descripation: "Design and development",
      ImgUrl: Food,
    },
  ];

  return (
    <section className="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Prathamesh</p>
            <Tab.Container id="project-taps" defaultActiveKey="link-1">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Company Project</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">My Project</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="link-1" className="pt-5">
                  <Row>
                    {companyProject.map((items, index) => {
                      return (
                        <ProjectCard
                          projectDetails={items.projectDetails}
                          key={index}
                          titel={items.titel}
                          descripation={items.descripation}
                          imgeUrl={items.ImgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="link-2" className="pt-5">
                  <Row>
                    {ownProject.map((items, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          titel={items.titel}
                          descripation={items.descripation}
                          imgeUrl={items.ImgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="link-3">link-3</Tab.Pane>
                {/* <Tap.TabPane eventKey="link-1">kkk</Tap.TabPane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="..." className="background-image-right" />
    </section>
  );
};

export default Project;
