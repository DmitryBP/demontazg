import React, { useRef, useState } from 'react';
import s from './Modal.module.scss';
import emailjs from 'emailjs-com';
import close from './close.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Modal({ modalActive, setModalActive }) {
  const [showMessage, setShowMessage] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: 'formName',
    to_name: 'dima',
    message: '',
    reply_to: '',
  });

  const handleChange = (e, ee, eee) => {
    setToSend({ ...toSend, message: e });
    console.log(e, ee, eee);
  };

  const closeModal = () => {
    setModalActive(false);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ywzrgdm', 'template_vc2zrhb', form.current, 'LAsrp2TffzpdiOoMN').then(
      (result) => {},
      (error) => {}
    );
  };
  const clickBtn = () => {
    setShowMessage(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };
  return (
    <div className={modalActive ? s.modal + ' ' + s.active : s.modal} onClick={closeModal}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={close} className={s.close} alt="close" onClick={closeModal} />
        <form ref={form} onSubmit={sendEmail}>
          <p className={s.title}>Получить консультацию</p>
          <div>
            <p className={s.text}>Укажите номер телефона*</p>
            <PhoneInput
              name="message"
              value={toSend.message}
              onChange={handleChange}
              country={'ru'}
              onlyCountries={['ru']}
              inputProps={{
                name: 'message',
                required: true,
                autoFocus: true,
              }}
            />
          </div>
          <div>
            <input className={s.innerBtn} type="submit" value="Отправить" onClick={clickBtn} />
            <p className={showMessage ? s.respons + ' ' + s.active : s.respons}>
              Заявка в обработке, вскоре менеджер свяжется с вами.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
