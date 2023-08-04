import React from 'react';
import sc from '../scss/components.module.scss';
import s from '../scss/messagesSection.module.scss';

export default function MessagerSection() {
  return (
    <section className={s.MessegerWrapper}>
      
      <div className={sc.twoSectionBox + ' ' + s.sectionPadding}>
        <div className={sc.left + ' ' + sc.centerlBorder}>
          <p className={s.leftTitle}>Оставь заявку на расчет<br/> через Whatsapp или Telegram</p>
          <p className={s.leftText}>получи дополнительную скидку  - 10 %</p>
          <div className={s.btnWrp}>
            <div className={s.messangerBtn+" "+s.wtsBtn}></div>
            <div className={s.messangerBtn+" "+s.tlgBtn}></div>
          </div>
        </div>
        <div className={sc.right}>
          <div className={s.advantageCol}>
            <p>Для ускорения расчета стоимости демонтажных работ предлагаем воспользоваться удобным для вас мессенджером. </p>
          </div>
          <div className={s.advantageCol}>
            <p>Пришлите нам фото и характеристики объекта, если они известны, такие как площадь и этажность для зданий, протяженность для заборов и т.п.</p>
          </div>
          <div className={s.advantageCol}>
            <p>В любом случае фото объекта будет уже достаточно для примерной оценки стоимости работ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
