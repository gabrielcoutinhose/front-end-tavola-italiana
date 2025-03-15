import styled from "styled-components";

export const Container = styled.div`
  background: var(--secondary-color);
  box-shadow: 0px 5px 10px var(--accent-color);
  border-radius: 6px;
  padding: 10px;
  margin-left: 20px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Resume = styled.div`
  grid-gap: 10px;
  justify-content: space-between;
  font-size: 16px;
  color: var(--text-dark);
  display: grid;
  grid-template-areas:
    "items items-price"
    "delivery-tax delivery-tax-price";
  .items {
    grid-area: items;
  }
  .items-price {
    grid-area: items-price;
  }
  .delivery-tax {
    grid-area: delivery-tax;
  }
  .delivery-tax-price {
    grid-area: delivery-tax-price;
  }
`;

export const Total = styled.div`
  justify-content: space-between;
  font-size: 18px;
  color: var(--text-dark);
  display: grid;
  grid-template-areas: "total total-price";
  .total {
    grid-area: total;
  }
  .total-price {
    grid-area: total-price;
  }
`;
