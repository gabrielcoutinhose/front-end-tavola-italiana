import PropTypes from "prop-types";
import React from "react";

import { CustomButton } from "./styles";

function Button({ children, ...rest }) {
  return <CustomButton {...rest}>{children}</CustomButton>;
}

export default Button;

Button.propTypes = {
  children: PropTypes.string,
};
