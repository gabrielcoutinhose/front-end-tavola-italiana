import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  height: 100%;
  width: 100%;

  .rec.rec-arrow,
  .rec.rec-dot {
    background: transparent;
    border: none;
    box-shadow: 0 0 5px black;
  }
  .rec.rec-dot_active {
    border: 1px solid black;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  font-style: bold;
  font-size: 40px;
  color: var(--text-dark);
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: none;
`;

export const Button = styled(Link)`
  margin-top: 10px;
  /* margin-bottom: 10px; */
  background: var(--accent-color);
  box-shadow: 0px 3px 6px var(--accent-color);
  height: 25px;
  border: none;
  border-radius: 6px;
  color: var(--text-dark);
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 100%;
  text-align: center;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
