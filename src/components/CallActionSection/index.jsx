import React, { useState } from "react";
import { Form, MainContent, MainGrid, MainImage } from "./styles";
import ModelWithClothes from "../../assets/img/roupas2.jfif";

export default function CallActionSection() {
  const [email, setEmail] = useState("");

  function setEmailToStorage() {
    localStorage.setItem("email", JSON.stringify(email));
    setEmail("");
  }

  return (
    <MainGrid>
      <MainImage src={ModelWithClothes} alt="" />
      <MainContent>
        <h2>Tranforme seu dia, sinta-se abraçada pelo que veste! </h2>
        <p>
          Nossas roupas são confeccionadas por meio da valorização do trabalho
          das mulheres e incentiva a produção local voltada a sustentabilidade!
        </p>
        <Form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Cadastre-se para receber promoções exclusivas"
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}
          />
          <button type="button" onClick={setEmailToStorage}>Enviar</button>
        </Form>
      </MainContent>
    </MainGrid>
  );
}
