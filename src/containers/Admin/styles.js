import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LeftBox = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
