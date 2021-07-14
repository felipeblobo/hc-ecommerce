import React from 'react'
import { News, PromotionCard, PromotionGrid } from './styles'
import promotionOne from '../../assets/img/roupas7.png';
import promotionTwo from '../../assets/img/roupas.jfif';
import promotionThree from '../../assets/img/roupas5.jfif';
import promotionFour from '../../assets/img/roupas4.jfif';

export default function NewsSection() {
  return (
    <News id='news'>
      <h2>Coleção Moda Viva</h2>
      <p>Tudo com mais de 50% de desconto!!!</p>
      <PromotionGrid>
        <PromotionCard>
          <img src={promotionOne} alt="Roupas da promoção" />
          <p>Camisa de R$ 200, por <span>R$ 100</span>.</p>
        </PromotionCard>
        <PromotionCard>
          <img src={promotionTwo} alt="Roupas da promoção" />
          <p>Kit inverno de R$ 325,50, por <span>R$ 145,00</span>.</p>
        </PromotionCard>
        <PromotionCard>
          <img src={promotionThree} alt="Roupas da promoção" />
          <p>Qualquer peça por <span>R$ 110</span>.</p>
        </PromotionCard>
        <PromotionCard>
          <img src={promotionFour} alt="Roupas da promoção" />
          <p>Somente por <span>R$ 60,50</span>.</p>
        </PromotionCard>
      </PromotionGrid>
    </News>
  )
}
