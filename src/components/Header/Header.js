import './Header.css';
import logo from '../../images/logo.svg';
import burger from '../../images/burger.png';
import ProfileRedirect from '../ProfileRedirect/ProfileRedirect';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    const { isLogged, openNavigation } = props;
    return (
        <>
            <header className={`header ${window.location.pathname == '/' ? 'header__landing' : ''}`}>
                {
                    !window.location.pathname == "/" ?
                        (
                            <>
                                <Link to="/">
                                    <img className="header__logo" alt="logo-image" src={logo} />
                                </Link>
                                <nav className="header__nav">
                                    <ul className="header__links">
                                        <li><NavLink activeClassName="header__link-active" className="header__link" to="/movies">Фильмы</NavLink></li>
                                        <li><NavLink activeClassName="header__link-active" className="header__link" to="/saved-movies">Сохранённые фильмы</NavLink></li>
                                    </ul>
                                    <ProfileRedirect />
                                    <img className="header__burger header__burger-shown" alt="burger" src={burger} onClick={() => {
                                        openNavigation();
                                    }} />
                                </nav>
                            </>
                        )
                        : (
                            <>
                                <Link to="/">
                                    <img className="header__logo" alt="logo-image" src={logo} />
                                </Link>
                                <nav className="header__buttons">
                                    <NavLink to="/signup" className="header__button header__register">Регистрация</NavLink>
                                    <NavLink to="/signin" className="header__button header__login">Войти</NavLink>
                                </nav>
                            </>
                        )
                }
            </header>
        </>
    );
};

export default Header;