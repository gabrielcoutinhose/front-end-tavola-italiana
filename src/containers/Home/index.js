import React from "react";

import HomeImg from "../../assets/home-image.png";
import CategoriesCarousel from "../../components/CategoriesCarousel";
import OffersCarousel from "../../components/OffersCarousel";
import { Container, HomeImage } from "./styles";

function Home() {
  return (
    <Container>
      <HomeImage src={HomeImg} alt="home-image" />
      <CategoriesCarousel />
      <OffersCarousel />
    </Container>
  );
}

export default Home;
