import './AboutProject.css';
import Slide from '../Slide/Slide';

function AboutProject() {
    return (
        <Slide title="О проекте" name="about">
            <div className="aboutproject__description">
                <div className="aboutproject__text">
                    <h2 className="aboutproject__headline">Дипломный проект включал 5 этапов</h2>
                    <p className="aboutproject__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutproject__text">
                    <h2 className="aboutproject__headline">На выполнение диплома ушло 5 недель</h2>
                    <p className="aboutproject__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutproject__progress">
                <div className="aboutproject__backend">
                    <div className="aboutproject__slider aboutproject__slider-backend">1 неделя</div>
                    <p className="aboutproject__slider-name">Back-end</p>
                </div>
                <div className="aboutproject__frontend">
                    <div className="aboutproject__slider aboutproject__slider-frontend">4 недели</div>
                    <p className="aboutproject__slider-name">Front-end</p>
                </div>
            </div>
        </Slide>
    );
}

export default AboutProject;