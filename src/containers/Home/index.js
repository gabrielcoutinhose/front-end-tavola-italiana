import React from "react";

import { CategoriesCarousel, OffersCarousel } from "../../components";
import { Container, BoxTop, BoxBottom } from "./styles";

export function Home() {
  return (
    <Container>
      <BoxTop>
        <CategoriesCarousel />
      </BoxTop>
      <BoxBottom>
        <OffersCarousel />
      </BoxBottom>
    </Container>
  );
}
