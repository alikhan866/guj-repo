import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./containers/homepage/homepage";
import Login from "./containers/login/login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/*" element={<div>ERROR 404 NOT FOUND</div>} />
    </Routes>
  );
};

export default MainRoutes;
