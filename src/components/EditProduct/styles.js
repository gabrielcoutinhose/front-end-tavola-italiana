import ReactSelect from "react-select";
import styled from "styled-components";

import { Button } from "../../components";

export const Container = styled.div`
  background: var(--primary-color);
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;

  form {
    height: 95vh;
    width: 100vw;
    background: var(--auxiliary-color);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
`;

export const Label = styled.p`
  max-width: 400px;
  min-width: 400px;
  font-size: 20px;
  color: var(--text-dark);
  margin-bottom: 4px;
  text-align: center;
`;

export const Input = styled.input`
  text-align: center;
  height: 40px;
  max-width: 400px;
  min-width: 400px;
  background: var(--secondary-color);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 6px;
  width: 100%;
`;

export const LabelUpload = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed white;
  border-radius: 6px;
  padding: 10px;
  height: 40px;
  max-width: 400px;
  min-width: 400px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ReactSelectStyled = styled(ReactSelect).attrs({
  styles: {
    control: (provided, state) => ({
      ...provided,
      textAlign: "center",
      height: "40px",
      maxWidth: "400px",
      minWidth: "400px",
      backgroundColor: "var(--secondary-color)",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      border: "none",
      borderRadius: "6px",
      marginBottom: "25px",
      width: "100%",
      borderColor: state.isFocused ? "var(--accent-color)" : "var(--text-dark)",
      "&:hover": {
        borderColor: "var(--primary-color)",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--secondary-color)",
      borderRadius: "6px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "var(--accent-color)"
        : state.isFocused
          ? "var(--primary-color)"
          : "transparent",
      color: state.isSelected || state.isFocused ? "white" : "var(--text-dark)",
      "&:hover": {
        backgroundColor: "var(--primary-color)",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--text-dark)",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "var(--text-dark)",
    }),
  },
})``;

export const ReStyledButton = styled(Button)`
  max-width: 400px;
  width: 100%;
`;
