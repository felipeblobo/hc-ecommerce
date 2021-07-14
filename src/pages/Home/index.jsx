import React from "react";
import Header from "../../components/Header";
import NewsSection from "../../components/NewsSection";
import Contacts from "../../components/Contacts";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <NewsSection />
      <Contacts />
    </Container>
  );
}
