import PropTypes from "prop-types";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductsToCart = async (product) => {
    const cartIndex = cartProducts.findIndex(
      (duplicateProduct) => duplicateProduct.id === product.id
    );
    let newCartProducts = [];
    if (cartIndex >= 0) {
      newCartProducts = cartProducts;
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1;
      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }
    await localStorage.setItem(
      "tavolaItaliana:CartData",
      JSON.stringify(newCartProducts)
    );
  };

  useEffect(() => {
    const loadCartUserData = async () => {
      const cartUserData = await localStorage.getItem(
        "tavolaItaliana:CartData"
      );
      if (cartUserData) {
        setCartProducts(JSON.parse(cartUserData));
      }
    };
    loadCartUserData();
  }, []);

  return (
    <CartContext.Provider value={{ cartProducts, addProductsToCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used with UserContext");
  }

  return context;
};
