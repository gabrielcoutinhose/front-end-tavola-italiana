import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SideMenu, Orders, Products, AddProduct } from "../../components";
import { Container, LeftBox, RightBox } from "./styles";

export function Admin() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTool, setActiveTool] = useState(() => {
    if (location.pathname === "/store-products") return "store-products";
    if (location.pathname === "/add-store-product") return "add-store-product";
    return "store-orders";
  });

  useEffect(() => {
    if (location.pathname === "/store-orders") {
      setActiveTool("store-orders");
    } else if (location.pathname === "/store-products") {
      setActiveTool("store-products");
    } else if (location.pathname === "/add-store-product") {
      setActiveTool("add-store-product");
    } else {
      navigate("/store-orders");
      setActiveTool("store-orders");
    }
  }, [location.pathname, navigate]);

  const handleToolChange = (tool) => {
    setActiveTool(tool);
  };

  return (
    <Container>
      <LeftBox>
        <SideMenu onToolChange={handleToolChange} />
      </LeftBox>
      <RightBox>
        {activeTool === "store-orders" && <Orders />}
        {activeTool === "store-products" && <Products />}
        {activeTool === "add-store-product" && <AddProduct />}
      </RightBox>
    </Container>
  );
}
