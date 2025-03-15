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

  h2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Orders = styled.div`
  font-size: 16px;
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  h4 {
    margin-bottom: 10px;
    border-bottom: 2px solid black;
    text-align: center;
  }

  .order-made-on,
  .order-update-on,
  .order-id-head,
  .order-status-head {
    margin: 0;
    font-weight: bold;
  }

  .made-on,
  .update-on,
  .order-id-body,
  .order-status-body {
    font-weight: normal;
    margin-left: 5px;
  }

  .items-head {
    margin: 0;
    font-weight: bold;
  }

  .items-list {
    margin: 0;
    padding-left: 20px;
  }

  .items-body {
    margin: 5px 0;
  }
`;
