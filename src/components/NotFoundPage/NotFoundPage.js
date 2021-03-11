import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <section className="notfound">
            <h1 className="notfound__title">404</h1>
            <p className="notfound__text">Страница не найдена</p>
            <a className="notfound__link">Назад</a>
        </section>
    );
};

export default NotFoundPage;