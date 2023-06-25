import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  console.log(location?.state);
  return <div className="projectDetails">projectDetails</div>;
};

export default ProjectDetails;
