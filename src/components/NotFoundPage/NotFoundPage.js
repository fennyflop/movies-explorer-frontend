import './NotFoundPage.css';
import { useHistory } from 'react-router-dom';

function NotFoundPage() {
    const history = useHistory();
    return (
        <section className="notfound">
            <h1 className="notfound__title">404</h1>
            <p className="notfound__text">Страница не найдена</p>
            <a className="notfound__link" onClick={() => { history.goBack() }}>Назад</a>
        </section>
    );
};

export default NotFoundPage;