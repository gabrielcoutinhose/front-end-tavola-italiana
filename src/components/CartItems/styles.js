import styled from "styled-components";

export const Container = styled.div`
  background: var(--secondary-color);
  box-shadow: 0px 5px 10px var(--accent-color);
  border-radius: 6px;
  padding: 10px;
  width: max-content;

  h2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 2px solid black;

  p {
    font-size: 18px;
    color: var(--text-dark);
  }
`;

export const Body = styled.div`
  img {
    height: 150px;
    width: 150px;
  }

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;

  p {
    font-size: 16px;
    color: var(--text-dark);
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  height: 20px;
  background: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(1.6);
  }

  &:active {
    opacity: 0.6;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const EmptyCart = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: bold;
  margin: 10px;
  padding: 10px;

  h3 {
    margin-bottom: 10px;
    color: var(--text-dark);
  }

  img {
    width: 150px;
    height: 150px;
    border: none;
    border-radius: 6px;
  }
`;
