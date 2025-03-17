import React from "react";

import { CartItems, CartResume } from "../../components";
import { Container, ContainerItems } from "./styles";

export function Cart() {
  return (
    <Container>
      <ContainerItems>
        <CartItems />
        <CartResume />
      </ContainerItems>
    </Container>
  );
}
