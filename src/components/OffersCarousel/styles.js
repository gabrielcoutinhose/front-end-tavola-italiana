import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow,
  .rec.rec-dot {
    background: var(--primary-color);
    border: none;
    box-shadow: 0 0 5px black;
  }
  .rec.rec-dot_active {
    background-color: var(--primary-color);
    border: 1px solid black;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  font-style: bold;
  font-size: 40px;
  color: var(--text-light);
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 120%;
    color: var(--text-dark);
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  background: var(--accent-color);
  box-shadow: 0px 3px 6px var(--accent-color);
  height: 25px;
  border: none;
  border-radius: 6px;
  color: var(--text-light);
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
`;
