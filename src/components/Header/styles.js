import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background: var(--secondary-color);
  box-shadow: 2px 3px 5px var(--accented-color);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled.a`
  img {
    width: 32px;
    height: 32px;
  }

  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isActive ? "var(--accent-color)" : "#000000")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  font-size: 16px;
  line-height: 19px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Divisor = styled.div`
  height: 30px;
  border: 0.5px solid black;
`;

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: var(--text-dark);
  }
`;

export const LogOutLink = styled.a`
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  color: black;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
