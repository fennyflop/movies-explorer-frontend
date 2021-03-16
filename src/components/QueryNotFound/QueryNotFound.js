import './QueryNotFound.css';
import queryNotFoundIcon from '../../images/querynotfound.webp';

function QueryNotFound() {
    return (
        <section className="noans">
            <img className="noans__icon" src={queryNotFoundIcon} />
            <p className="noans__text">Нет результатов</p>
        </section>
    );
}

export default QueryNotFound;