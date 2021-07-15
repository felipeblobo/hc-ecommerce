import styled from "styled-components";

export const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  width: 80vw;
  margin: auto;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainImage = styled.img`
  min-width: 350px;
  width: 100%;
  border-radius: 1rem;

  @media (max-width: 1023px) {
    max-width: 250px;
    padding: 0 1rem;
  }
`;

export const MainContent = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h2 {
    font-family: 'Zen Loop', cursive;
    font-size: 3rem;
    margin: 1rem 0;

    @media (max-width: 1023px) {
      padding: 0 1rem;
    }
  }

  p {
    font-weight: 300;
    margin-bottom: 2rem;
    line-height: 1.5rem;
    font-size: 1.2rem;

    @media (max-width: 1023px) {
      padding: 0 1rem;
    }
  }
`;

export const Form = styled.form`

display: flex;
justify-content: center;
align-self: flex-start;
flex-direction: column;

@media (max-width: 1023px) {
  margin: 1rem ;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .5rem 0;
}

label {
  margin-right: .5rem;
  font-size: 1.2rem;

  @media (max-width: 1023px) {
    font-size: 1rem;
  }
}

input {
  height: 3.1rem;
  padding: 1.6rem 1rem;
  width: 20rem;
  border: none;
  border-radius:10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;

  @media (max-width: 389px) {
    width: 16rem;
  }

  @media (min-width: 390px) {
    flex:1;
  }


  ::placeholder {
    opacity: 0.6;
  }

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0 ;
}
}

button {
  align-self: flex-end;
  padding:1rem;
  margin: 1.5rem 0;
  width: 8rem;
  border-radius: 10px;
  border: none;
  background-color: #612F1E;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;

  @media (max-width: 1023px) {
    width: 6rem;
  }

  &:hover {
    filter: contrast(0.8);
  }
}
`;


export const SendedEmail = styled.h3`
    margin: 1rem 0;
    background-color: #18ca8b;
    padding: .7rem;
    border-radius: 10px;
`