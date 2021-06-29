import React from "react";
import { Link } from "react-dom";
import { Container, LogoImg, RightSide } from "./style";
const Navbar = () => {
  return (
    <Container>
      <LogoImg />
      <RightSide>
        <a href="#">Home</a>

        <a href="#">Bags</a>

        <a href="#">Sneakers</a>

        <a href="#">Belt</a>

        <a href="#">Contact</a>
      </RightSide>
    </Container>
  );
};

export default Navbar;
