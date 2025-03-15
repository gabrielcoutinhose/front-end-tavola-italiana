import PropTypes from "prop-types";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStorage = async (products) => {
    await localStorage.setItem(
      "tavolaItaliana:CartData",
      JSON.stringify(products)
    );
  };

  const addProductsToCart = async (product) => {
    if (!product.id) {
      console.error("Product without ID:", product);
      return;
    }
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
    await updateLocalStorage(newCartProducts);
  };

  const deleteProducts = async (ProductId) => {
    const newCart = cartProducts.filter((product) => product.id != ProductId);
    setCartProducts(newCart);
    await updateLocalStorage(newCart);
  };

  const increaseCartProducts = async (ProductId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === ProductId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });
    setCartProducts(newCart);
    await updateLocalStorage(newCart);
  };

  const decreaseCartProducts = async (ProductId) => {
    const cartIndex = cartProducts.findIndex(
      (productToDecrease) => productToDecrease.id === ProductId
    );
    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === ProductId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
      setCartProducts(newCart);
      await updateLocalStorage(newCart);
    }
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
    <CartContext.Provider
      value={{
        cartProducts,
        addProductsToCart,
        increaseCartProducts,
        decreaseCartProducts,
        deleteProducts,
      }}
    >
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
