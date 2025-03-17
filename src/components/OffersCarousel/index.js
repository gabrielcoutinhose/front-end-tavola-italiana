import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { toast } from "react-toastify";

import { useCart } from "../../hooks/CartContext";
import api from "../../services/api";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { Container, Title, ContainerItems, Image, Button } from "./styles";

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);
  const { addProductsToCart } = useCart();

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get("products");
      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => ({
          ...product,
          formattedPrice: CurrencyFormatter(product.price),
        }));
      setOffers(onlyOffers);
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

  const handleOrderNow = async (offer) => {
    await addProductsToCart(offer);
    toast.success(`Offer ${offer.name} added to cart!`);
  };

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
              <Button onClick={() => handleOrderNow(offer)}>Order now</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}
