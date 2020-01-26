import React from 'react';
import './App.css';
import logo from './images/lllogo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from './Tabs';
import Card from './Card';
import Tabs2 from './Tabs2';
import Second from './Second'

function App() {
  return (
    <div className="App">
      <div className="first-page">
        <div className="header">
          <img src={logo} className="logo"/>
          <a href="">
            О компании
          </a>
          <a href="">
            Кейсы и опыт
          </a>
          <a href="">
            Клиенты
          </a>
          <a href="">
            Отрасли
          </a>
          <a href="">
            Инструментарий
          </a>
          <a href="">
            Цены
          </a>
          <a href="">
            Блог
          </a>
          <a href="">
            Вакансии
          </a>
        </div>
        <div className="first-page-body">
          <div className="headings-box">
            <h1>МАРКЕТИНГОВЫЕ ИССЛЕДОВАНИЯ И</h1>
            <span className="first-line"></span>
            <h1>АНАЛИТИКА ДЛЯ БИЗНЕСА</h1>
            <h3>Выполняем исследования, которые окупаются</h3>
            <span className="second-line"></span>
            <button className="consult">ПРОКОНСУЛЬТИРОВАТЬСЯ</button>
          </div>
        </div>
        <div className="second-page">
          <div className="second-page-header">
            <h2>ЗАЧЕМ НУЖНЫ ИССЛЕДОВАНИЯ?</h2>
          </div>
          <div className="row second-page-body">
            <div className="col-xl-4 left-side">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nulla id tincidunt sollicitudin. Praesent vel ullamcorper lorem, nec vulputate libero. Aliquam a nibh nulla. Maecenas vehicula euismod ex viverra condimentum. Mauris vitae velit rhoncus, mollis tellus a, euismod tortor. Nulla maximus, libero et dictum fringilla, velit tellus maximus urna, quis fermentum felis ex nec turpis. Mauris blandit porttitor porta. Aliquam et pellentesque dolor. Vestibulum eleifend leo libero, quis luctus sem rutrum eu.</p>
              <p>Cras sed volutpat est. Quisque ut urna ac nunc vestibulum tincidunt. Duis laoreet erat quis arcu finibus, vitae rutrum ligula vestibulum. Praesent semper eros at tortor commodo, nec molestie turpis tempor. Fusce sagittis arcu vitae suscipit varius. Suspendisse potenti. Maecenas tempor et ligula eget viverra. Duis et malesuada nisl. Integer laoreet felis vitae egestas mattis. Cras malesuada enim ligula, id congue orci efficitur in. Etiam cursus suscipit enim, at dictum mauris tincidunt quis. Cras velit mi, aliquet tempor tempus sit amet, ornare at magna. Vivamus vel pulvinar quam, eget sodales elit.</p>
              <button>УЗНАТЬ БОЛЬШЕ</button>
            </div>
            <div className="col-xl-8">
              <Tabs/>
            </div>
          </div>
        </div>
        <div className="third-page">
          <div className="second-page-header">
            <h2>КОМУ НУЖНЫ ИССЛЕДОВАНИЯ И ДЛЯ КАКИХ ЗАДАЧ?</h2>
            <div className="cards">
              <div className="row">
                <div className="col-xl-4">
                  <Card title="first title" text="First Text" />
                </div>
                <div className="col-xl-4">
                  <Card title="second title" text="Second text"/>
                </div>
                <div className="col-xl-4">
                  <Card title="third title" text="Third text"/>
                </div>
            </div>
          </div>
        </div> 
        <button>ПОДРОБНЕЕ</button>
      </div>
      <div className="fourth-page">
        <div className="row">
          <div className="col-xl-5">

          </div>
          <div className="col-xl-7 fourth-right">
            <div className="fourth-page-content">
              <h2>О НАС</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nulla id tincidunt sollicitudin. Praesent vel ullamcorper lorem, nec vulputate libero. Aliquam a nibh nulla. Maecenas vehicula euismod ex viverra condimentum. Mauris vitae velit rhoncus, mollis tellus a, euismod tortor. Nulla maximus, libero et dictum fringilla, velit tellus maximus urna, quis fermentum felis ex nec turpis. Mauris blandit porttitor porta. Aliquam et pellentesque dolor. Vestibulum eleifend leo libero, quis luctus sem rutrum eu.</p>
              <button> ПРЕЗЕНТАЦИЯ О КОМПАНИИ (128КБ) </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth-page">
        <div className="second-page-header">
          <h2>НАШИ УСЛУГИ</h2>
          <h4>5 КЛЮЧЕВЫХ НАПРАВЛЕНИЙ</h4>
          <div className="fiveSkills">
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
          </div>
          <h4>ПРОИЗВОДНЫЕ УСЛУГИ</h4>
          <div className="fiveSkills">
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
          </div>
          <div className="fiveSkills">
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
            <div className="fifth-page-card">
              <p>Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sixth-page">
        <div className="second-page-header">
          <h2>КЕЙСЫ</h2>
        </div>
        <Tabs2/>
        <div className="second-page-header">
          <h2>ОТЧЕТЫ</h2>
        </div>
        <div className="row otchets">
          <div className="col-xl-4 otchet">
            <p>Исследование рынка <br/> кальянной индустрии (128kb)
            </p>
          </div>
          <div className="col-xl-4 otchet">
            <p>Исследование рынка <br/> кальянной индустрии (128kb)
            </p>
          </div>
          <div className="col-xl-4 otchet">
            <p>Исследование рынка <br/> кальянной индустрии (128kb)
            </p>
          </div>
        </div>
        <div className="questions">
          <h3>ЕСТЬ ВОПРОСЫ?</h3> 
          <button>Обсудить</button> 
        </div>
      </div>
      <footer>
        <div className="row">
          <div className="col-xl-3">
            <img src={logo}/>
          </div>
          <div className="col-xl-3">
            <h5>Lorem</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nulla id tincidunt sollicitudin.</p>
          </div>
          <div className="col-xl-3">
            <h5>Lorem</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nulla id tincidunt sollicitudin.</p>
          </div>
          <div className="col-xl-3">
            <a href="tel:(8-7172-77-90-82)">8-7172-77-90-82</a>
            <p>г. Нур-Султан, ул. Кажымукана 8а,<br/> 5 этаж, каб. №1, БЦ "Туркестан"</p>
          </div>
        </div>
        <hr/>
        <h6>2019 cprt</h6>
      </footer>
      <Second/>
      </div>
    </div>
  );
}

export default App;
