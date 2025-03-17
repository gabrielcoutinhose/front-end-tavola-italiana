import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import AccountIcon from "../../assets/icons/account-32.png";
import CartIcon from "../../assets/icons/cart-32.png";
import { useUser } from "../../hooks/UserContext";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Divisor,
  LogOutLink,
} from "./styles";

export function Header() {
  const { logOut, userData } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const logOutUser = () => {
    logOut();
    navigate("/login");
  };

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate("/")} isActive={pathname === "/"}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate("/products")}
          isActive={pathname.includes("/products")}
        >
          Products
        </PageLink>
        <PageLink
          onClick={() => navigate("/order-tracking")}
          isActive={pathname.includes("/order-tracking")}
        >
          My Orders
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => navigate("/account")}>
          <img src={AccountIcon} />
        </PageLink>
        <Divisor></Divisor>
        <PageLink onClick={() => navigate("/cart")}>
          <img src={CartIcon} />
        </PageLink>
        <ContainerText>
          <p>Hello, {userData.name}</p>
          <LogOutLink onClick={logOutUser}>Log out</LogOutLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
