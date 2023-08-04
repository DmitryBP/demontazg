import React from 'react';
import s from './footer.module.scss';
import time from '../Header/img/time.png';
import tel from '../Header/img/tel.png';
import whatsapp from '../Header/img/whatsapp.png';
import telegram from '../Header/img/telegram.png';
import OfferBtn from '../Button/OfferBtn';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <p>ООО «Континент»,</p>
          <p>ИНН: 4707045349, </p>
          <p>ОГРН: 124700000898, </p>
          <p>КПП: 470701001, </p>
          <p>р/с: 40702810801500137477</p>
          <p> Банк: «Точка банк» г. Москва, </p>
          <p>БИК: 044525104, </p>
          <p>к/с: 30101810745374525104</p>
          <br />
          <p>©️ 2012 - 2023</p>
        </div>
        <div className={s.center}>
          <p>Выполним на выгодных условиях демонтаж:</p>
          <p>Загородных объектов</p>
          <p>Промышленный объектов</p>
          <p>Заборов</p>
          <p>Строительных конструкций</p>
          <p>Фундаментов</p>
        </div>
        <div className={s.right}>
          <p>Бесплатная консультатция:</p>
          <div className={s.iconStr}>
            <img className={s.icon} src={time} alt="icon" />
            <p>24 часа / 7 дней в неделю</p>
          </div>
          <div className={s.iconStr}>
            <img className={s.icon} src={tel} alt="icon" />
            <a href="tel: +79811924115">
              <span>+7 (981)</span> 192-41-15
            </a>
          </div>
          <a
            className={s.iconStr}
            href="https://api.whatsapp.com/send/?phone=79811924115&text=Здравствуйте%2C+у+меня+есть+вопрос+по+демонтажу"
          >
            <img className={s.icon} src={whatsapp} alt="icon" />
            <p>whatsapp</p>
          </a>
          <a className={s.iconStr} href="https://t.me/+79811924115">
            <img className={s.icon} src={telegram} alt="icon" />
            <p>telegram</p>
          </a>
          <br />
          <OfferBtn />
        </div>
      </div>
    </footer>
  );
}
