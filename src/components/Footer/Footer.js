import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <nav className="footer__nav">
                <p className="footer__copyright">&#169; 2020</p>
                <ul className="footer__links">
                    <li><a className="footer__link" target="_blank" rel="noreferrer" href="https://praktikum.yandex.ru">Яндекс.Практикум</a></li>
                    <li><a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/fennyflop">Github</a></li>
                    <li><a className="footer__link" target="_blank" rel="noreferrer" href="https://www.facebook.com/alex.semochkin.5/">Facebook</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;