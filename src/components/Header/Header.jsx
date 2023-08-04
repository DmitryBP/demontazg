import React from 'react';
import s from './header.module.scss';
import adres from './img/adres.png';
import mail from './img/mail.png';
import tel from './img/tel.png';
import telegram from './img/telegram.png';
import time from './img/time.png';
import whatsapp from './img/whatsapp.png';
import OfferBtn from '../Button/OfferBtn';

export default function Header() {
  return (
    <header>
      <div className={s.logoBox}>
        <div className={s.logoTitle}>kontinentmaxspb.ru</div>
        <div>Безопасный демонтаж в Санкт-Петербурге и области</div>
      </div>
      <div className={s.centerBox}>
        <div className={s.iconStr + ' ' + s.topStr}>
          <div className={s.iconStr}>
            <img className={s.icon} src={mail} alt="icon" />
            <a href="mailto:info@demontag-spb.ru?subject=Вопрос по демонтажу">info@demontag-spb.ru</a>
          </div>
          <div className={s.iconStr + ' ' + s.timeStr}>
            <img className={s.icon + ' ' + s.icon__left} src={time} alt="icon" />
            <p>24/7</p>
          </div>
        </div>
        <div className={s.iconStr + ' ' + s.adressStr}>
          <img className={s.icon} src={adres} alt="icon" />
          <p>Ленинградская область, Ломоносовский р-н, д. Низино улица Центральная Д 1.</p>
        </div>
      </div>
      <div className={s.phoneBox}>
        <div className={s.phoneStrWrp + ' ' + s.topStr}>
          {/* <div className={s.iconStr}> */}
            <img className={s.icon} src={tel} alt="icon" />
            <a href="tel: +79811924115">
              <span>+7 (981)</span> 192-41-15
            </a>
          {/* </div> */}
          <a
            className={s.icon}
            href="https://api.whatsapp.com/send/?phone=79811924115&text=Здравствуйте%2C+у+меня+есть+вопрос+по+демонтажу"
          >
            <img src={whatsapp} alt="icon" />
          </a>
          <a className={s.icon} href="https://t.me/+79811924115">
            <img src={telegram} alt="icon" />
          </a>
        </div>
        <OfferBtn />
      </div>
    </header>
  );
}
