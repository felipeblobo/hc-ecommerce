import React from 'react'
import { News, PromotionCard, PromotionGrid } from './styles'
import promotionOne from '../../assets/img/roupas7.png';
import promotionTwo from '../../assets/img/roupas.jfif';
import promotionThree from '../../assets/img/roupas5.jfif';
import promotionFour from '../../assets/img/roupas4.jfif';

export default function NewsSection() {
  return (
    <News>
      <h2>Coleção Moda Viva</h2>
      <p>Tudo com 50% de desconto!!!</p>
      <PromotionGrid>
        <PromotionCard>
          <img src={promotionOne} alt="Roupas da promoção" />
        </PromotionCard>
        <PromotionCard>
          <img src={promotionTwo} alt="Roupas da promoção" />
        </PromotionCard>
        <PromotionCard>
          <img src={promotionThree} alt="Roupas da promoção" />
        </PromotionCard>
        <PromotionCard>
          <img src={promotionFour} alt="Roupas da promoção" />
        </PromotionCard>
      </PromotionGrid>
    </News>
  )
}
