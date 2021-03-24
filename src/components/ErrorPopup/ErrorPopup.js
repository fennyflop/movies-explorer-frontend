import './ErrorPopup.css';
import closeButtonIcon from '../../images/cross.png';

function ErrorPopup({ isOpened, message }) {
    return (
        <section className={`error ${isOpened ? 'error__opened' : ''}`}>
            <img className="error__close" src={closeButtonIcon} alt="closeButton" />
            <h2 className="error__message">{message || 'Произошла загадочная ошибка'}</h2>
        </section>
    );
}

export default ErrorPopup;