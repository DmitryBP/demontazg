import './App.scss';
import s from './scss/firstScrin.module.scss';
import s2 from './scss/secondScrin.module.scss';
import Header from './components/Header/Header';
import ServiseCard from './components/ServiceCard/ServiseCard';
import img from './components/ServiceCard/img/img.jpg';
import img1 from './components/ServiceCard/img/img-1.jpg';
import img2 from './components/ServiceCard/img/img-2.jpg';
import img3 from './components/ServiceCard/img/img-3.jpg';
import step1 from './assets/img/step1.png';
import step2 from './assets/img/step2.png';
import step3 from './assets/img/step3.png';
import step4 from './assets/img/step4.png';
import Adventages from './components/Adventages';
import MessagerSection from './components/MessagerSection';
import StepCard from './components/StepCard/StepCard';
import Footer from './components/Footer/Footer';

const serviceData = [
  { img: img, price: 7000, text: 'Демонтаж загородного дома' },
  { img: img1, price: 2500, text: 'Демонтаж забора' },
  { img: img2, price: 15000, text: 'Демонтаж фундамента' },
  { img: img3, price: 5000, text: 'Демонтаж промышленного здания' },
];
const stepsData = [
  {
    img: step1,
    step: 'Шаг 1',
    text: 'Оформите заявку позвонив по телефону: +7 (981) 192-41-15 или отправьте сообщение в месседжер, кроме того можно воспользоваться формой обратной связи или заказать обратный звонок',
  },
  {
    img: step2,
    step: 'Шаг 2',
    text: 'Менеджер созванивается с Вами для уточнения деталей и согласования даты выезда на объект. Выезд специалиста на объект осуществляется бесплатно. Не большие объекты можно оценить по фото',
  },
  {
    img: step3,
    step: 'Шаг 3',
    text: 'На основании посещения объекта Определяются сроки и стоимость работ. Подготавливаем исходно разрешительную документацию. Заключаем договор на проведение демонтажных работ',
  },
  {
    img: step4,
    step: 'Шаг 4',
    text: 'Выполнение демонтажных работ, при необходимости, вывоз и утилизация отходов, подготовка и подписание исполнительной документации. Приемка с последующей оплатой выполненных работ.',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      {/* Первый экран */}
      <section className={s.firstScrin}>
        <div className={s.title}>ДЕМОНТАЖНЫЕ РАБОТЫ</div>
        <ul>
          <li>Бесплатный выезд специалиста сегодня</li>
          <li>Оценка стоимости работ по фото</li>
          <li>Работаем быстро на результат</li>
          <li>Гарантии качества</li>
        </ul>
      </section>
      {/* Второй экран */}
      <section className={s2.secondScrin}>
        <div className={s2.title}>Услуги и цены</div>
        <div className={s2.serviceCards}>
          {serviceData.map((s) => {
            return <ServiseCard card={s} />;
          })}
        </div>
        <Adventages />
      </section>
      <MessagerSection />
      <div className="stokString">

        <p>Акция - Утилизация! Весь август утилизация мусора в подарок</p>
      </div>
      <div className="sectionWrapper">
        <div className={s2.title}>Как мы работаем</div>
        <div className={s2.serviceCards}>
          {stepsData.map((s) => {
            return <StepCard card={s} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
