import React from "react";

import { CartItems, CartResume } from "../../components";
import { Container, ContainerItems } from "./styles";

export function Cart() {
  return (
    <Container>
      <header>
        <h1>header</h1>
      </header>
      <ContainerItems>
        <CartItems />
        <CartResume />
      </ContainerItems>
    </Container>
  );
}
