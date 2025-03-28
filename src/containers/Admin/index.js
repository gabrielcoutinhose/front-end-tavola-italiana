import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  SideMenu,
  Orders,
  Products,
  EditProduct,
  AddProduct,
} from "../../components";
import { Container, LeftBox, RightBox } from "./styles";

export function Admin() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [activeTool, setActiveTool] = useState(() => {
    if (location.pathname === "/store-products") return "store-products";
    if (location.pathname === "/add-store-product") return "add-store-product";
    if (location.pathname.startsWith("/edit-store-product"))
      return "edit-store-product";
    return "store-orders";
  });

  useEffect(() => {
    if (location.pathname === "/store-orders") {
      setActiveTool("store-orders");
    } else if (location.pathname === "/store-products") {
      setActiveTool("store-products");
    } else if (location.pathname.startsWith("/edit-store-product")) {
      setActiveTool("edit-store-product");
    } else if (location.pathname === "/add-store-product") {
      setActiveTool("add-store-product");
    } else {
      navigate("/store-orders");
      setActiveTool("store-orders");
    }
  }, [location.pathname, navigate]);

  const handleToolChange = (tool) => {
    setActiveTool(tool);
    if (tool === "store-orders") navigate("/store-orders");
    if (tool === "store-products") navigate("/store-products");
    if (tool === "add-store-product") navigate("/add-store-product");
    if (tool === "edit-store-product") navigate("/edit-store-product");
  };

  return (
    <Container>
      <LeftBox>
        <SideMenu onToolChange={handleToolChange} />
      </LeftBox>
      <RightBox>
        {activeTool === "store-orders" && <Orders />}
        {activeTool === "store-products" && <Products />}
        {activeTool === "edit-store-product" && (
          <EditProduct productId={id} />
        )}{" "}
        {activeTool === "add-store-product" && <AddProduct />}
      </RightBox>
    </Container>
  );
}
