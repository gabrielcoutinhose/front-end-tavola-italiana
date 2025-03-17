import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useCart } from "../../hooks/CartContext";
import api from "../../services/api";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { Button } from "../Button";
import { Container, Resume, Total } from "./styles";

export function CartResume() {
  const navigate = useNavigate();
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);

  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce(
      (totalAccumulatedValue, currentValue) => {
        return (
          currentValue.price * currentValue.quantity + totalAccumulatedValue
        );
      },
      0
    );
    setFinalPrice(sumAllItems);
  }, [cartProducts, deliveryTax]);

  const submitOrder = async () => {
    const loadingToast = toast.loading("Placing your order...");

    try {
      const order = cartProducts.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      }));

      const response = await api.post("orders", { products: order });

      toast.dismiss(loadingToast);
      toast.success("Your order was placed successfully! Redirecting...");

      const orderId = response.data?._id;
      if (orderId) {
        setTimeout(() => {
          navigate(`/order-tracking/${orderId}`);
        }, 2000);
      } else {
        toast.error("Error processing your order. Please try again.");
      }
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Unexpected error. Please try again later.");
    }
  };

  return (
    <Container>
      <h2 className="title">Order summary</h2>
      <Resume>
        <p className="items">Items</p>
        <p className="items-price">{CurrencyFormatter(finalPrice)}</p>
        <p className="delivery-tax">Delivery tax</p>
        <p className="delivery-tax-price">{CurrencyFormatter(deliveryTax)}</p>
      </Resume>
      <Total>
        <p className="total">Total</p>
        <p className="total-price">
          {CurrencyFormatter(finalPrice + deliveryTax)}
        </p>
      </Total>
      <Button style={{ width: "240px" }} onClick={submitOrder}>
        Confirm order
      </Button>
    </Container>
  );
}
