import React from "react";
import { BrandTitle, Menu, StyledHeader } from './styles'

export default function Header() {
  return (
    <StyledHeader>
      <Menu>
        <BrandTitle>Moda Viva</BrandTitle>
        <li>Novidades</li>
        <li>Cadastre-se</li>
        <li>Contatos</li>
      </Menu>
    </StyledHeader>
  );
}
