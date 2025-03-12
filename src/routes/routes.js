import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../containers/Login";
import Register from "../containers/Register";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
