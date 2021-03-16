import './AboutMe.css';
import Slide from '../Slide/Slide';

import myImage from '../../images/me.png';

function AboutMe() {
    return (
        <Slide name="aboutme" title="Студент">
            <section className="aboutme__info">
                <div className="aboutme__text">
                    <h2 className="aboutme__name">Виталий</h2>
                    <p className="aboutme__occupation">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutme__biography">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <ul className="aboutme__contacts">
                        <li><a className="aboutme__contact" target="_blank" rel="noreferrer" without rel="noreferrer" href="https://www.facebook.com/alex.semochkin.5/">Facebook</a></li>
                        <li><a className="aboutme__contact" target="_blank" rel="noreferrer" href="https://github.com/fennyflop">Github</a></li>
                    </ul>
                </div>
                <img className="aboutme__image" alt="me" src={myImage} />
            </section>
        </Slide>
    );
}

export default AboutMe;