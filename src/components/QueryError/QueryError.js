import './QueryError.css';
import errorIcon from '../../images/error.webp';

function QueryError() {
    return (
        <section className="error">
            <img className="error__icon" src={errorIcon} alt="errorImage" />
            <p className="error__text">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
        </section>
    );
}

export default QueryError;