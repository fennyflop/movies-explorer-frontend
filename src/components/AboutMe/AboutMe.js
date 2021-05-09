import './AboutMe.css';
import Slide from '../Slide/Slide';

import myImage from '../../images/me.png';
import me from '../../images/meanddoge.jpg';


function AboutMe() {
    return (
        <Slide name="aboutme" title="Студент">
            <section className="aboutme__info">
                <div className="aboutme__text">
                    <h2 className="aboutme__name">Александр</h2>
                    <p className="aboutme__occupation">Разработчик, 15 лет</p>
                    <p className="aboutme__biography">Меня зовут Александр. В своё свободное время увлекаюсь программированием. Люблю работать над масштабными проектами, видеть свой вклад в них. В 2020 году я окунулся в веб-разработку,
                    а сейчас тренирую свои навыки программирования на C++</p>
                    <ul className="aboutme__contacts">
                        <li><a className="aboutme__contact" target="_blank" rel="noreferrer" href="https://www.facebook.com/alex.semochkin.5/">Facebook</a></li>
                        <li><a className="aboutme__contact" target="_blank" rel="noreferrer" href="https://github.com/fennyflop">Github</a></li>
                    </ul>
                </div>
                <img className="aboutme__image" alt="me" src={me} />
            </section>
        </Slide>
    );
}

export default AboutMe;