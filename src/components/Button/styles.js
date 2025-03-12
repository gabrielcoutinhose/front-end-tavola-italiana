import styled from "styled-components";

export const CustomButton = styled.button`
  display: block;
  width: 400px;
  height: 38px;
  background: var(--accent-color);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: var(--text-light);
  margin-top: 40px;
  /* margin-bottom: 25%; */

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
