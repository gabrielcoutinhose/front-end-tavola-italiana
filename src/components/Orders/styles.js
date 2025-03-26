import ReactSelect from "react-select";
import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary-color);
  min-height: 100vh;
  padding: 20px;
`;

export const ProductImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 6px;
`;

export const ReactSelectStyled = styled(ReactSelect)`
  width: 250px;

  .css-19bb58m {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`;

export const LinkMenu = styled.a`
  color: var(--text-dark);
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    `
    color: var(--auxiliary-color);
    font-weight: bold;
  `}
`;
