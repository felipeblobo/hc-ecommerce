import React from "react";
import CallActionSection from "../CallActionSection";
import { BrandTitle, Menu, StyledHeader } from "./styles.js";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <StyledHeader>
      <Menu>
        <BrandTitle>Moda Viva</BrandTitle>
        <Link to="news" smooth={true} spy={true}>
          <li>Promoções</li>
        </Link>
        <li>Produtos</li>
        <Link to="contacts" smooth={true} spy={true}>
          <li>Contatos</li>
        </Link>
      </Menu>
      <CallActionSection />
    </StyledHeader>
  );
}
