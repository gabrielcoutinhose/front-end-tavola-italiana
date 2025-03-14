import PropTypes from "prop-types";
import React from "react";

import { Button } from "../Button";
import { Container, Image, ProductName, ProductPrice } from "./styles";

export function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} alt={`Image of ${product.name} product`} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatPrice}</ProductPrice>
        <Button style={{ width: "240px" }}>Add</Button>
      </div>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
