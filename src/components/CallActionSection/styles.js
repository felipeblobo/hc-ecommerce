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
  }

  p {
    font-weight: 300;
    margin-bottom: 2rem;
    line-height: 1.5rem;
    font-size: 1.2rem;
  }

  }


`;

export const Form = styled.form`

display: flex;
align-items: center;
align-self: flex-start;
margin-top: 2rem;

@media (max-width: 1023px) {
  margin: 1rem ;
}

label {
  margin-right: .5rem;
  font-size: 1.5rem;

  @media (max-width: 1023px) {
    font-size: 1rem;
  }
}

input {
  height: 3.1rem;
  padding: 1.6rem 1rem;
  width: 20rem;
  border: none;
  border-radius:10px 0 0 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;

  @media (max-width: 1023px) {
    width: 12rem;
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
  align-self: center;
  padding:1rem;
  width: 8rem;
  border-radius: 0px 10px 10px 0;
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

`;


