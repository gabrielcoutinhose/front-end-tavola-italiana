import React from "react";

import EmptyCartImg from "../../assets/badges/empty-cart.png";
import AddIcon from "../../assets/icons/add-32.png";
import DeleteIcon from "../../assets/icons/delete-32.png";
import RemoveIcon from "../../assets/icons/remove-32.png";
import { useCart } from "../../hooks/CartContext";
import CurrencyFormatter from "../../utils/currencyFormatter";
import {
  Container,
  Header,
  Body,
  EmptyCart,
  QuantityContainer,
  Button,
} from "./styles";

export function CartItems() {
  const {
    cartProducts,
    increaseCartProducts,
    decreaseCartProducts,
    deleteProducts,
  } = useCart();

  return (
    <Container>
      <h2>Cart</h2>
      <Header>
        <p></p>
        <p>Items</p>
        <p>Price</p>
        <p>Quantity</p>
        <p style={{ marginLeft: 25 }}>Total</p>
      </Header>
      <div>
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <Body key={product.id}>
              <img src={product.url} />
              <p>{product.name}</p>
              <p>{CurrencyFormatter(product.price)}</p>
              <QuantityContainer>
                <Button onClick={() => deleteProducts(product.id)}>
                  <img src={DeleteIcon} />
                </Button>
                <Button onClick={() => decreaseCartProducts(product.id)}>
                  <img src={RemoveIcon} />
                </Button>
                <p>{product.quantity}</p>
                <Button onClick={() => increaseCartProducts(product.id)}>
                  <img src={AddIcon} />
                </Button>
              </QuantityContainer>
              <p>{CurrencyFormatter(product.quantity * product.price)}</p>
            </Body>
          ))
        ) : (
          <EmptyCart>
            <h3>EmptyCart</h3>
            <img src={EmptyCartImg} alt="empty-image-cart" />
          </EmptyCart>
        )}
      </div>
    </Container>
  );
}
