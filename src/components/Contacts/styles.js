import styled from "styled-components";

export const ContactSection = styled.section`

  background-color: #b1b1b1;
  height: 25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Zen Loop', cursive;
    font-size: 3rem;
    text-align: center;
  }

`

export const GridSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


export const Content = styled.div`
  flex: 1;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  width: 60rem;
  


  h3 {
    font-family: 'Zen Loop', cursive;
    font-size: 6rem;
  }

`

export const SocialMedia = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 1rem;

  li {
    margin: 0 .5rem;
    cursor: pointer;
  }
`