import PropTypes from "prop-types";
import React from "react";

import { StyledErrorMessage } from "./styles";

export function ErrorMessage({ children }) {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
}

ErrorMessage.propTypes = {
  children: PropTypes.string,
};
