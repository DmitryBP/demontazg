import React from 'react'
import s from './serviceCard.module.scss'
import OfferBtn from '../Button/OfferBtn'

export default function ServiseCard(props) {
  return (
    <div className={s.cardWrapper}>
      <img src={props.card.img} alt="" />
      <div className={s.price}>{props.card.price} ₽ / м3</div>
      <p>{props.card.text}</p>
      <OfferBtn state={'transperent'}/>
    </div>
  )
}
