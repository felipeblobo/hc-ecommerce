import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #dfd9c5;
  height: 100vh;
` ;

export const Menu = styled.ul`
  display: flex;
  padding: 2rem 4rem;
  align-items: center;

  li {
    margin: 0 1rem;
    list-style: none;
  }
`; 

export const BrandTitle = styled.h1`
  font-family: 'Zen Loop', cursive;
  margin-right: 3rem;
  font-size: 3rem;
`;