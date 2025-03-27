import React, { useState } from "react";

import { SideMenu, Orders, Products, AddProduct } from "../../components";
import { Container, LeftBox, RightBox } from "./styles";

export function Admin() {
  const [activeTool, setActiveTool] = useState("orders");

  const handleToolChange = (tool) => {
    setActiveTool(tool);
  };

  return (
    <Container>
      <LeftBox>
        <SideMenu onToolChange={handleToolChange} />
      </LeftBox>
      <RightBox>
        {activeTool === "orders" && <Orders />}
        {activeTool === "products" && <Products />}
        {activeTool === "addProduct" && <AddProduct />}
      </RightBox>
    </Container>
  );
}
