import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: var(--secondary-color);
  min-height: 100vh;
  width: 100%;
  padding: 20px;

  hr {
    margin: 20px 20px;
    border: none;
    height: 1px;
    background-color: black;
  }
`;

export const Links = styled.div`
  margin: 10px 0;
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-dark);
  padding: 10px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  &:hover {
    background: var(--accent-color);
  }

  ${({ isActive }) =>
    isActive &&
    `
    background: var(--accent-color);
    color: #fff;
    font-weight: bold;
  `}
`;
