import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Login, Products, Register } from "../containers/";
import PrivateRoute from "./private-route";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
