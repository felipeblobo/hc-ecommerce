import React from "react";
import CallActionSection from '../CallActionSection';
import { BrandTitle, Menu, StyledHeader } from './styles'

export default function Header() {
  return (
    <StyledHeader>
      <Menu>
        <BrandTitle>Moda Viva</BrandTitle>
        <li>Promoções</li>
        <li>Produtos</li>
        <li>Contatos</li>
      </Menu>
      <CallActionSection />
    </StyledHeader>
  );
}
