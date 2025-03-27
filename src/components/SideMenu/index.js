import PropTypes from "prop-types";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logoutIcon from "../../assets/icons/logout-32.png";
import ordersIcon from "../../assets/icons/shops-32.png";
import productsIcon2 from "../../assets/icons/store-2-32.png";
import productsIcon from "../../assets/icons/store-32.png";
import { useUser } from "../../hooks/UserContext";
import { Container, Links, Item } from "./styles";

export function SideMenu({ onToolChange }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useUser();

  const links = [
    {
      id: 1,
      label: "Orders",
      link: "/store-orders",
      icon: ordersIcon,
      tool: "orders",
    },
    {
      id: 2,
      label: "Products",
      link: "/store-products",
      icon: productsIcon,
      tool: "store-products",
    },
    {
      id: 3,
      label: "Add Product",
      link: "/add-store-product",
      icon: productsIcon2,
      tool: "add-store-product",
    },
  ];

  const handleClick = (e, link, tool) => {
    e.preventDefault();
    navigate(link);
    onToolChange(tool);
  };

  return (
    <Container>
      <hr />
      {links.map((item) => (
        <Links key={item.id}>
          <Item
            to={item.link}
            onClick={(e) => handleClick(e, item.link, item.tool)}
            isActive={location.pathname === item.link}
          >
            <img src={item.icon} alt={`${item.label} icon`} /> {item.label}
          </Item>
        </Links>
      ))}
      <hr />
      <Links style={{ position: "absolute", bottom: "30px" }}>
        <Item to="/login" onClick={logout}>
          <img src={logoutIcon} alt="logout" />
          Logout
        </Item>
      </Links>
    </Container>
  );
}

SideMenu.propTypes = {
  onToolChange: PropTypes.func.isRequired,
};
