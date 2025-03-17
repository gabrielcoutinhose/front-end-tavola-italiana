import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-color);
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsImage = styled.img`
  width: 100%;
  height: 250px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  min-height: 20px;
  max-width: 90vw;
`;

export const Button = styled.button`
  cursor: pointer;
  background: ${(props) => (props.isActiveCategory ? "#F27059" : "#F79D65")};
  border: none;
  border-radius: 4px;
  color: var(--text-light);
  font-size: 14px;
  line-height: 20px;
  font-style: bold;
  width: 100px;
  padding: 4px;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 10px;
  padding: 10px;

  min-height: auto;
  max-width: 100vw;
`;
