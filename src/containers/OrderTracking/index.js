import React from "react";

import { OrderCard } from "../../components";
import { Container, ContainerItems } from "./styles";

export function OrderTracking() {
  return (
    <Container>
      <header>
        <h2>Header</h2>
      </header>
      <ContainerItems>
        <OrderCard />
      </ContainerItems>
    </Container>
  );
}
