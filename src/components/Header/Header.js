import './Header.css';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profileIcon.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" alt="logo-image" src={logo} />
            <nav className="header__nav">
                <ul className="header__links">
                    <li className="header__link">Фильмы</li>
                    <li className="header__link">Сохранённые фильмы</li>
                </ul>
                <div className="header__profile">
                    <img className="header__profile-icon" alt="profile-icon" src={profileIcon} />
                    <p className="header__profile-text">Аккаунт</p>
                </div>
            </nav>
        </header>
    );
};

export default Header;