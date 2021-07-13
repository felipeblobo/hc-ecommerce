import styled from "styled-components";

export const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  width: 80vw;
  margin: 0 auto;
`; 

export const MainImage = styled.img`

  width: 100%;
  border-radius: 1rem;

`;

export const MainContent = styled.main`

  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;

  h2 {
    font-family: 'Zen Loop', cursive;
    font-size: 2rem;
    margin: 1rem 0;
  }

  p {
    font-weight: 300;
    margin-bottom: 2rem;
    line-height: 1.5rem;
  }

  button {
    align-self: center;
    padding:1rem;
    width: 11.25rem;
    border-radius: 10px;border: none;
    background-color: #18ca8b;
    font-size: 1.1rem;
    cursor: pointer;

    &:hover {
      filter: contrast(0.8);
    }

  }


`;