import styled from "styled-components";


export const News = styled.div`
 
  background-color: #1a181a;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h2 {
    text-align: center;
    padding-top: 2rem;
    font-family: 'Zen Loop', cursive;
    font-size: 3rem;
  }

  >p {
    text-align: center;
    margin-top: 1rem;
    font-size: 2rem;
    color: #e2ff0c;
  }
`;


export const PromotionGrid = styled.div`
  display: flex;
  max-width: 70rem;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6rem;
  margin-top: 3rem;
  padding-bottom: 4rem;
  

`

export const PromotionCard = styled.div`
  width: 20rem;
  height: 25rem;
  background-color: #dfd9c5;
  border-radius: 20px;
  cursor: pointer;


  img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: .5rem;
  }

  p {
    span {
      color: #cff564;
      font-size: 1.5rem;
      margin-left: .4rem;
    }
  }

` 