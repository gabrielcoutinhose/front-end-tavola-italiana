import PropTypes from "prop-types";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Header } from "../components";

function PrivateRoute({ isAdmin = false }) {
  const user = localStorage.getItem("tavolaItaliana:UserData");

  if (user) {
    const parsedUser = JSON.parse(user);
    if (isAdmin && !parsedUser.admin) {
      return <Navigate to="/" replace />;
    }
    return (
      <>
        {!isAdmin && <Header />}
        <Outlet />
      </>
    );
  }

  return <Navigate to="/login" replace />;
}

PrivateRoute.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default PrivateRoute;
