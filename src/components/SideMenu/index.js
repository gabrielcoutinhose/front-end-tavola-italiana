import React from "react";
import { useLocation } from "react-router-dom";

import logoutIcon from "../../assets/icons/logout-32.png";
import ordersIcon from "../../assets/icons/shops-32.png";
import productsIcon2 from "../../assets/icons/store-2-32.png";
import productsIcon from "../../assets/icons/store-32.png";
import { useUser } from "../../hooks/UserContext";
import { Container, Links, Item } from "./styles";

export function SideMenu() {
  const location = useLocation();
  const { logout } = useUser();

  const links = [
    {
      id: 1,
      label: "Orders",
      link: "/orders",
      icon: ordersIcon,
    },
    {
      id: 2,
      label: "Products",
      link: "/products",
      icon: productsIcon,
    },
    {
      id: 3,
      label: "Add Product",
      link: "/product",
      icon: productsIcon2,
    },
  ];

  return (
    <Container>
      <hr></hr>
      {links.map((item) => (
        <Links key={item.id}>
          <Item to={item.link} isActive={location.pathname === item.link}>
            {" "}
            <img src={item.icon} alt={`${item.label} icon`} /> {item.label}
          </Item>
        </Links>
      ))}
      <hr></hr>

      <Links style={{ position: "absolute", bottom: "30px" }}>
        <Item to="/login" onClick={logout}>
          <img src={logoutIcon} alt="logout" />
          Logout
        </Item>
      </Links>
    </Container>
  );
}
