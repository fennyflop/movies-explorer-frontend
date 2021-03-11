import './Portfolio.css';
import arrow from '../../images/arrow.png';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">
                Портфолио
            </h2>
            <div className="portfolio__items">
                <div className="portfolio__item">
                    <p className="portfolio__name">Статичный сайт</p>
                    <img className="portfolio__arrow" alt="arrow" src={arrow} />
                </div>
                <div className="portfolio__item">
                    <p className="portfolio__name">Адаптивный сайт</p>
                    <img className="portfolio__arrow" alt="arrow" src={arrow} />
                </div>
                <div className="portfolio__item">
                    <p className="portfolio__name">Одностраничное приложение</p>
                    <img className="portfolio__arrow" alt="arrow" src={arrow} />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;