import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import api from "../../services/api";
import currencyFormatter from "../../utils/currencyFormatter";
import { Container, Title, ContainerItems, Image, Button } from "./styles";

function OffersCarousel() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get("products");

      const olyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return {
            ...product,
            formattedPrice: currencyFormatter(product.price),
          };
        });

      setOffers(olyOffers);
    }
    loadOffers();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (
    <Container>
      <Title>Offers</Title>
      <Carousel
        itemsToShow={5}
        style={{ width: "90%" }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map((offer) => (
            <ContainerItems key={offer.id}>
              <Image src={offer.url} alt={`product ${offer.name} in offer`} />
              <p>{offer.name}</p>
              <p>{offer.formattedPrice}</p>
              <Button>Order now</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}

export default OffersCarousel;
