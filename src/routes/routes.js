import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import PrivateRoute from "./private-route";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
