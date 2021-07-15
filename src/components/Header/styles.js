import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #dfd9c5;
  height: 100%;

` ;

export const Menu = styled.ul`
  display: flex;
  padding: 2rem 4rem;
  align-items: center;

  

  li {
    margin: 0 1rem;
    list-style: none;
    cursor: pointer;
    transition: .5s;

    &:hover {
      background-color: #612F1E;
      padding: .5rem 1rem;
      border-radius: 10px;
      color: #fff;
    }

    @media (max-width: 1023px) {
      display: none;
    }
  }
`; 

export const BrandTitle = styled.h1`
  font-family: 'Zen Loop', cursive;
  margin-right: 3rem;
  font-size: 4rem;

  }
`;