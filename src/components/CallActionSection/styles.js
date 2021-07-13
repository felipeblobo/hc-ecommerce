import styled from "styled-components";

export const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  width: 80vw;
  margin: auto;
`; 

export const MainImage = styled.img`

  width: 100%;
  border-radius: 1rem;
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

label {
  margin-right: .5rem;
  font-size: 1.5rem;
}

input {
  height: 3.1rem;
  padding: 1.6rem 1rem;
  width: 20rem;
  border: none;
  border-radius:10px 0 0 10px;


  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
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

  &:hover {
    filter: contrast(0.8);
  }

`;


