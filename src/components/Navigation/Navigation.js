import { NavLink } from 'react-router-dom';
import './Navigation.css';
import ProfileRedirect from '../ProfileRedirect/ProfileRedirect';

function Navigation({ isOpen, handleCloseNavigation }) {

    function closeNavigation() {
        handleCloseNavigation();
    }

    return (
        <section className={`navigation ${isOpen ? 'navigation__opened' : ''}`}>
            <div className="navigation__container">
                <button className="navigation__close" onClick={closeNavigation}></button>
                <ul className="navigation__links">
                    <li><NavLink onClick={closeNavigation} activeClassName="navigation__link-opened" className="navigation__link" exact to="/">Главная</NavLink></li>
                    <li><NavLink onClick={closeNavigation} activeClassName="navigation__link-opened" className="navigation__link" to="/movies">Фильмы</NavLink></li>
                    <li><NavLink onClick={closeNavigation} activeClassName="navigation__link-opened" className="navigation__link" to="/saved-movies">Сохранённые фильмы</NavLink></li>
                </ul>
                <ProfileRedirect place="navigation" />
            </div>
        </section>
    );
}

export default Navigation;