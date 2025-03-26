import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  Login,
  Products,
  Register,
  Cart,
  OrderTracking,
  Admin,
} from "../containers";
import PrivateRoute from "./private-route";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:categoryId?" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-tracking/:orderId?" element={<OrderTracking />} />
        </Route>
        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="/orders" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
