import React from "react";

import { OrderCard } from "../../components";
import { Container, ContainerItems } from "./styles";

export function OrderTracking() {
  return (
    <Container>
      <ContainerItems>
        <OrderCard />
      </ContainerItems>
    </Container>
  );
}
