import React, { useState } from "react";
import { Form, MainContent, MainGrid, MainImage, SendedEmail } from "./styles";
import ModelWithClothes from "../../assets/img/roupas2.jfif";

export default function CallActionSection() {
  const [data, setData] = useState({
    name: "",
    email: ""
  });
  const [status, setStatus] = useState(false);
  console.log(data)

  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    const value = event.target.value;

    setData({
      ...data,
      [fieldName]: value,
    });
  }

  function setEmailToStorage(e) {
    e.preventDefault();
    if (data.name !== "" && data.email !== ""){
      localStorage.setItem("userData", JSON.stringify(data));
      setData("");
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 3000);
    } 
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
        {status && <SendedEmail>Email cadastrado com sucesso</SendedEmail>}
        <Form onSubmit={setEmailToStorage}>
          
          <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleChange}
            value={data.name}
          />
          </div>
  
          <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Cadastre-se para receber promoções exclusivas"
            onChange={handleChange}
            value={data.email}
          />
         
          </div>
          <button type="submit" >
            Enviar
          </button>
         
        </Form>
      </MainContent>
    </MainGrid>
  );
}
