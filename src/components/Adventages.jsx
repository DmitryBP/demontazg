import React from 'react';
import icon1 from '../assets/img/icon-21.png';
import icon2 from '../assets/img/icon-22.png';
import icon3 from '../assets/img/icon-23.png';
import sc from '../scss/components.module.scss'
import s2 from '../scss/secondScrin.module.scss';

export default function Adventages() {
  return (
    <section>
      <div className={s2.title}>Почему заказывать демонтаж у нас выгоднее</div>
      <div className={sc.twoSectionBox}>
        <div className={sc.left}>
          <p>
            ООО “Континент” предлагает услуги по демонтажу любых конструкций и материалов. Наши цены доступны и
            конкурентоспособны.
          </p>
          <p>Мы используем только профессиональное оборудование и гарантируем качество выполненных работ.</p>
          <p>Свяжитесь с нами для получения профессиональной консультации.</p>
        </div>
        <div className={sc.right}>
          <div className={sc.iconStr +" "+sc.iconStr +" "+s2.advantageCol}>
            <img src={icon3} alt="" />
            <p>Квалификация и опыт специалистов, позволяет выполнять работы эффективно не допуская простоев.</p>
          </div>
          <div className={sc.iconStr +" "+s2.advantageCol}>
            <img src={icon1} alt="" />
            <p>Мы работаем своей техникой, что позволяет нам держать цены на доступном уровне.</p>
          </div>
          <div className={sc.iconStr +" "+s2.advantageCol}>
            <img src={icon2} alt="" />
            <p>Мы не экономим на безопасности и проводим работы в строгом соотвествии нормам и правилам.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
