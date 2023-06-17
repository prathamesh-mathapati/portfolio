import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  // const [scroll, setscroll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    console.log("..onScroll");
  };
  const onUpdateactiveLinke = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => onUpdateactiveLinke("home")}
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-linke"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              heref="#skills"
              onClick={() => onUpdateactiveLinke("skills")}
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-linke"
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              heref="#project"
              onClick={() => onUpdateactiveLinke("projects")}
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-linke"
              }
            >
              Project
            </Nav.Link>
          </Nav>
          <span className="d-flex navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="..." />
              </a>
              <a href="#">
                <img src={navIcon2} alt="..." />
              </a>
              <a href="#">
                <img src={navIcon3} alt="..." />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("ll")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
