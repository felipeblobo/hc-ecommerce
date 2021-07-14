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
          <p>Camisa de R$ 200, por R$ 100,00.</p>
        </PromotionCard>
        <PromotionCard>
          <img src={promotionTwo} alt="Roupas da promoção" />
          <p>Kit inverno de R$ 325,53, por R$ 145,10.</p>
        </PromotionCard>
        <PromotionCard>
          <img src={promotionThree} alt="Roupas da promoção" />
          <p>Qualquer uma por R$ 110,10.</p>
        </PromotionCard>
        <PromotionCard>
          <img src={promotionFour} alt="Roupas da promoção" />
          <p>Somente por R$ 60,50.</p>
        </PromotionCard>
      </PromotionGrid>
    </News>
  )
}
