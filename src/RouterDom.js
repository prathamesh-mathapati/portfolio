import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import ProjectDetails from "./component/projectDetails";

const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projectDetails" element={<ProjectDetails />} />
    </Routes>
  );
};

export default RouterDom;
