import './Portfolio.css';
import ProjectItem from '../ProjectItem/ProjectItem';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">
                Портфолио
            </h2>
            <div className="portfolio__items">
                <ProjectItem name="Статичный сайт" link="https://fennyflop.github.io/how-to-learn/" />
                <ProjectItem name="Адаптивный сайт" link="https://fennyflop.github.io/russian-travel/" />
                <ProjectItem name="Одностраничное приложение" link="https://fennyflop.students.nomoreparties.space/sign-in" />
            </div>
        </section>
    );
}

export default Portfolio;