import styled from "styled-components";

export const Container = styled.div`
  background: var(--secondary-color);
  box-shadow: 0px 30px 60px var(--accented-color);
  border-radius: 10px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
  }
`;

export const Image = styled.img`
  height: 240px;
  width: 240px;
  border-radius: 10px;
`;

export const ProductName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: var(--text-dark);
`;

export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: -120px;
  color: var(--text-dark);
`;
