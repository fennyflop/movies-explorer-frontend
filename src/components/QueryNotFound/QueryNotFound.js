import './QueryNotFound.css';
import noansIcon from '../../images/noans.png';

function QueryNotFound() {
    return (
        <section className="noans">
            <img className="noans__icon" src={noansIcon} alt="noResultImage" />
            <p className="noans__text">Нет результатов</p>
        </section>
    );
}

export default QueryNotFound;