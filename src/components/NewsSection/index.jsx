import React from "react";
import { MainContent, MainGrid, MainImage } from "./styles";
import ModelWithClothes from "../../assets/img/roupas6.jfif";

export default function NewsSection() {
  return (
    <MainGrid>
      <MainImage src={ModelWithClothes} alt="" />
      <MainContent>
        <h2>Tranforme seu dia, sinta-se abraçada pelo que veste! </h2>
        <p>
          Nossas roupas são confeccionadas por meio da valorização do trabalho
          das mulheres e incentiva a produção local voltada a sustentabilidade!
        </p>
        <button>Comprar</button>
      </MainContent>
    </MainGrid>
  );
}
