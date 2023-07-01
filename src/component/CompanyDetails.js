import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import BiLogo from "../assets/img/bi-logo.png";
const CompanyDetails = () => {
  return (
    <Container>
      <div className="company-details">
        <h1>Company experience</h1>
        <Row>
          <Col lg={12} sm={12} md={12} xl={12}>
            <h4 className="company-heading">
              Broadview Innovations (
              <Link to="https://broadview-innovations.com/">link</Link>)
            </h4>
            <ul className="pt-3">
              <li>
                Developing interactive and responsive user interfaces using
                React JS.
              </li>
              <li>
                Collaborating with designers and backend developers to implement
                front-end components and functionality.
              </li>
              <li>
                Implementing state management using Redux or other similar
                frameworks.
              </li>
              <li>Integrating RESTful APIs to fetch and manipulate data.</li>
              <li>
                Ensuring cross-browser compatibility and optimizing application
                performance.
              </li>
              <li>I have prepared and trained 2 people</li>
            </ul>
          </Col>

          <Col lg={12} sm={12} md={12} xl={12}>
            <h4 className="company-heading pt-3">
              3 Embed Software Technologies Pvt. Ltd (
              <Link to="https://rocketreach.co/3-embed-software-technologies-pvt-ltd-profile_b5f653c0f42e8d74">
                link
              </Link>
              )
            </h4>
            {/* <img src={BiLogo} alt="Bi logo" className="bi-img" /> */}
            <ul className="pt-3">
              <li>
                Designed web pages and User Interfaces for Live web appsand
                websitesusing HTML, Bootstrap 5, CSS, React js.Explored various
                investment opportunities{" "}
              </li>
              <li>I am make some responsive web side </li>
            </ul>
          </Col>

          <Col lg={12} sm={12} md={12} xl={12}>
            <h4 className="company-heading pt-3">
              Nvagurukul (<Link to="https://www.navgurukul.org/">link</Link>)
            </h4>
            <ul className="pt-3">
              <li>
                have handled the post of mentor and teacher of 10+ students free
                of cost
              </li>
              <li>
                I am making some demo projects like an E-commerce website, clone
                of omani food ect{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CompanyDetails;
