import { NavLink } from 'react-router-dom';
import './Navigation.css';
import ProfileRedirect from '../ProfileRedirect/ProfileRedirect';

function Navigation() {
    return (
        <section className="navigation">
            <div className="navigation__container">
                <button className="navigation__close"></button>
                <ul className="navigation__links">
                    <li><NavLink activeClassName="navigation__link-opened" className="navigation__link" exact to="/">Главная</NavLink></li>
                    <li><NavLink activeClassName="navigation__link-opened" className="navigation__link" to="/movies">Фильмы</NavLink></li>
                    <li><NavLink activeClassName="navigation__link-opened" className="navigation__link" to="/saved-movies">Сохранённые фильмы</NavLink></li>
                </ul>
                <ProfileRedirect place="navigation" />
            </div>
        </section>
    );
}

export default Navigation;