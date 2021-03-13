import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <nav className="footer__nav">
                <p className="footer__copyright">&#169; 2020</p>
                <ul className="footer__links">
                    <li className="footer__link">Яндекс.Практикум</li>
                    <li className="footer__link">Github</li>
                    <li className="footer__link">Facebook</li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;