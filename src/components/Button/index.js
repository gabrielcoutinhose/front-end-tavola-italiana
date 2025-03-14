import PropTypes from "prop-types";
import React from "react";

import { CustomButton } from "./styles";

export function Button({ children, ...rest }) {
  return <CustomButton {...rest}>{children}</CustomButton>;
}

Button.propTypes = {
  children: PropTypes.string,
};
