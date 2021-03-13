import { NavLink } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import './Navigation.css';

function Navigation() {
    return (
        <section className="navigation">
            <div className="navigation__container">
                <button className="navigation__close"></button>
                <ul className="navigation__links">
                    <li><NavLink className="navigation__link" to="/">Главная</NavLink></li>
                    <li><NavLink className="navigation__link" to="/movies">Фильмы</NavLink></li>
                    <li><NavLink className="navigation__link" to="/saved-movies">Сохранённые фильмы</NavLink></li>
                </ul>
                <div className="navigation__profile">
                    <img className="navigation__profile-icon" alt="profile-icon" src={profileIcon} />
                    <p className="navigation__profile-text">Аккаунт</p>
                </div>
            </div>
        </section>
    );
}

export default Navigation;