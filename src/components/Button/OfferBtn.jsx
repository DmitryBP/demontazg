import React, { useState } from 'react';
import Modal from '../Modal';
import s from './offerBtn.module.scss';
import s2 from '../ServiceCard/serviceCard.module.scss';

export default function OfferBtn(props) {
  const [modalActive, setModalActive] = useState(false);
  const openModal = () => setModalActive(true);
  return (
    <>
      {props.state === 'transperent' ? (
        <div className={s2.btn} onClick={openModal}>
          Подробнее
        </div>
      ) : (
        <button className={s.offerBtn} onClick={openModal}>
          Обратный звонок
        </button>
      )}
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
}
