import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary-color);
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;
`;
