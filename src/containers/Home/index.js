import React from "react";

import HomeImg from "../../assets/home-image.png";
import { CategoriesCarousel, OffersCarousel } from "../../components";
import { Container, HomeImage } from "./styles";

export function Home() {
  return (
    <Container>
      <HomeImage src={HomeImg} alt="home-image" />
      <CategoriesCarousel />
      <OffersCarousel />
    </Container>
  );
}
