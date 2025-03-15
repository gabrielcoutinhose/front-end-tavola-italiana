import React, { useState, useEffect } from "react";

import ProductsImg from "../../assets/images/products-image.png";
import { CardProduct } from "../../components";
import api from "../../services/api";
import CurrencyFormatter from "../../utils/currencyFormatter";
import {
  Container,
  ProductsImage,
  Menu,
  Button,
  ProductContainer,
} from "./styles";

export function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsByFilter, setProductsByFilter] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      const newCategories = [{ id: 0, name: "all" }, ...data];
      setCategories(newCategories);
    }
    async function loadProducts() {
      const { data: allProducts } = await api.get("products");

      const newProducts = allProducts.map((product) => {
        return { ...product, formatPrice: CurrencyFormatter(product.price) };
      });

      setProducts(newProducts);
    }
    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setProductsByFilter(products);
    } else {
      const newProductsByFilter = products.filter(
        (product) => product.category_id === activeCategory
      );
      setProductsByFilter(newProductsByFilter);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <ProductsImage src={ProductsImg} alt="home-image" />
      <Menu>
        {categories &&
          categories.map((category) => (
            <Button
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </Button>
          ))}
      </Menu>
      <ProductContainer>
        {productsByFilter &&
          productsByFilter.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductContainer>
    </Container>
  );
}
