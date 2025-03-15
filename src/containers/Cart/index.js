import React from "react";

import { CartItems } from "../../components";
import { Container } from "./styles";

export function Cart() {
  return (
    <Container>
      <h1>Cart</h1>
      <CartItems />
    </Container>
  );
}
