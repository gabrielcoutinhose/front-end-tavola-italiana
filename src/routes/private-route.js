import PropTypes from "prop-types";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Header } from "../components";

function PrivateRoute() {
  const user = localStorage.getItem("tavolaItaliana:UserData");
  return user ? (
    <>
      <Header />
      <Outlet />{" "}
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
