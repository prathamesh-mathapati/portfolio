import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setscroll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (window.scrollY > 50) {
      setActiveLink(true);
    } else {
      setActiveLink(false);
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
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
          <span>
            <div>
              <a href="#" scr={navIcon1} alt="..."></a>
              <a href="#" scr={navIcon2} alt="..."></a>
              <a href="#" scr={navIcon3} alt="..."></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
