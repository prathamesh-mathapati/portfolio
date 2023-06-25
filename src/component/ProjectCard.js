import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ titel, descripation, imgeUrl, projectDetails }) => {
  const nagevation = useNavigate();
  const projectDetailsHandled = (projectDetails, titel) => {
    nagevation("/projectDetails", { state: { projectDetails, titel } });
  };
  return (
    <>
      <Col
        sm={6}
        md={4}
        xl={4}
        lg={4}
        onClick={() => projectDetailsHandled(projectDetails, titel)}
      >
        <div className="proj-imgbx">
          <img src={imgeUrl} alt="..." />
          <div className="proj-txtx">
            <h4>{titel}</h4>
            <span>{descripation}</span>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProjectCard;
