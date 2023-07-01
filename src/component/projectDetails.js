import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import pte from "../assets/img/prep27.png";
import cloudrent from "../assets/img/cloudrent.png";
import POS from "../assets/img/POS_logo.png";

const ProjectDetails = () => {
  const location = useLocation();
  // console.log(
  //   location?.state?.titel,
  //   "titel",
  //   "POS" === location?.state?.titel
  // );
  return (
    <div className="projectDetails">
      {"Prep 27" === location?.state?.titel && (
        <div>
          <h1>PTE(Practice Test Web Application)</h1>
          <h3>
            Technologies: React JS (Frontend), HTML (Landing Page), Backend (PHP
            ,laravel)
          </h3>
          <Row>
            <Col sm={12} md={6} lg={6} xl={6}>
              <ul>
                <li>
                  Developed a web application using React JS for the frontend
                  and a simple HTML landing page. there is link of landing page{" "}
                  <Link to="http://prep27.com/">(Link)</Link>.
                </li>{" "}
                <li>
                  Managed the React JS implementation and design aspects of the
                  project. there is link of login page
                  <Link to="https://app.prep27.com/"> (Link)</Link>.
                </li>{" "}
                <li>
                  Created an English practice test web application specifically
                  designed for <Link to="http://prep27.com/">PTE</Link> (Pearson
                  Test of English) preparation.
                </li>{" "}
                <li>
                  The web application, named Prep27, provides a comprehensive
                  platform for users to practice and improve their PTE exam
                  skills.
                </li>{" "}
                <li>
                  Offered a wide range of practice test modules covering all
                  sections of the PTE exam, including speaking, writing,
                  reading, and listening.
                </li>{" "}
                <li>
                  Implemented interactive features and user-friendly interfaces
                  to enhance the learning experience and simulate the real exam
                  environment.
                </li>{" "}
                <li>
                  Ensured seamless navigation and responsiveness for optimal
                  user engagement and satisfaction.
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} className="projectImg">
              <Link to={location?.state?.projectDetails?.projectLogingPageUrl}>
                <img src={pte} alt="..." />
              </Link>
            </Col>
            <Col className="text-start">
              Collaborated with a team of developers and designers to integrate
              backend functionalities . Contributed to the project's success by
              providing expertise in React JS and managing the overall design
              aspects.
            </Col>
          </Row>
        </div>
      )}

      {"Cloud Rent" === location?.state?.titel && (
        <div>
          <h1>Cloudrent</h1>
          <h3>
            Technologies: React JS (Frontend), HTML (Landing Page), Backend
            (Node)
          </h3>
          <Row>
            <Col sm={12} md={6} lg={6} xl={6}>
              <ul>
                <li>
                  Developed and launched CloudRent, an online platform that
                  facilitates the renting and borrowing of various
                  equipment.there is link of landing page (
                  <Link to="https://www.cloudrent.me/">(Link)</Link>)
                </li>
                <li>
                  {" "}
                  Leveraged React JS and Node.js to build an intuitive user
                  interface and a reliable back-end infrastructure.there is link
                  of login page (
                  <Link to="https://app.onlinerentalstore.com/auth/login">
                    (Link)
                  </Link>
                  )
                </li>
                <li>
                  Integrated secure payment processing and implemented an
                  efficient search and booking system for a seamless user
                  experience.
                </li>
                <li>
                  Collaborated with a cross-functional team to develop and
                  maintain the front-end of the CloudRent platform using React
                  JS.
                </li>
                <li>
                  Implemented responsive design and ensured a user-friendly
                  interface across multiple devices. Worked closely with the
                  back-end team to integrate APIs for seamless data retrieval
                  and processing.
                </li>{" "}
                <li>
                  Conducted thorough testing and debugging to ensure platform
                  stability and performance optimization.
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} className="projectImg">
              <Link to={location?.state?.projectDetails?.projectLogingPageUrl}>
                <img src={cloudrent} alt="..." />
              </Link>
            </Col>
            <Col className="text-start">
              Assisted in deploying the application on AWS cloud services and
              ensuring scalability. I am handel 4 modules of that wed side
            </Col>
          </Row>
        </div>
      )}

      {"POS" === location?.state?.titel && (
        <div>
          <h1>POS</h1>
          <h3> Technologies: Electron js,React js </h3>
          <Row>
            <Col sm={12} md={6} lg={6} xl={6}>
              <ul>
                <li>
                  Led the development of the POS application from concept to
                  deployment, utilizing Electron.js for creating a
                  cross-platform desktop application.
                </li>
                <li>
                  This is the Point of sale(selling ) Desktop
                  applicationCollaborating with designers and backend developers
                  to implement front-end components and functionality.
                </li>

                <li>
                  Implemented React.js for building the frontend user interface,
                  ensuring a seamless and interactive experience for users.
                </li>
                <li>
                  Designed and developed intuitive features for sales
                  management, including barcode scanning, product selection,
                  pricing, and discounts.
                </li>
                <li>
                  Integrated payment gateways to facilitate smooth and secure
                  transaction processing.
                </li>
                <li>
                  Implemented real-time inventory management, allowing users to
                  track stock levels, receive low stock alerts, and generate
                  inventory reports.
                </li>

                <li>
                  Collaborated with a team of developers, designers, and
                  stakeholders to gather requirements and ensure timely project
                  delivery.
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} className="projectImg">
              <img src={POS} alt="..." />
            </Col>
            <Col className="text-start">
              <p>
                Conducted thorough testing and debugging to identify and fix
                software issues, ensuring a high-quality and reliable
                application. Optimized application performance, improving
                response times and reducing resource usage. Provided technical
                support and training to end-users, ensuring a smooth adoption
                and utilization of the POS application. Successfully launched
                the POS application, receiving positive feedback from users for
                its user-friendly interface and robust functionality.
              </p>
              <p>Technologies Used:</p>
              <p>
                Electron.js: Cross-platform desktop application framework for
                building the POS application. React.js: JavaScript library used
                for creating dynamic and responsive user interfaces. Other
                technologies and tools: HTML, CSS, JavaScript, Redux (for state
                management), and Git (version control).
              </p>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
