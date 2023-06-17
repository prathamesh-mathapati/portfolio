import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ titel, descripation, imgeUrl }) => {
  return (
    <Col sm={6} md={4} xl={4} lg={4}>
      <div className="proj-imgbx">
        <img src={imgeUrl} alt="..." />
        <div className="proj-txtx">
          <h4>{titel}</h4>
          <span>{descripation}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
