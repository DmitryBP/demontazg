import React from 'react'
import s from './stepCard.module.scss'

export default function StepCard(props) {
  return (
    <div className={s.cardWrapper}>
      <img src={props.card.img} alt="" />
      <p className={s.step}>{props.card.step}</p>
      <p className={s.text}>{props.card.text}</p>
    </div>
  )
}
