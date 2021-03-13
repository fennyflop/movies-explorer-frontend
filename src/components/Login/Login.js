import './Login.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

function login() {
    return (
        <section className="login">
            <form className="login__form">
                <img className="login__logo" alt="logo" src={logo} />
                <h1 className="login__title">Рады видеть!</h1>
                <fieldset className="login__fieldset">
                    <label className="login__label" htmlFor="email">E-mail</label>
                    <input className="login__input" name="email"></input>
                </fieldset>
                <fieldset className="login__fieldset">
                    <label className="login__label" htmlFor="password">Пароль</label>
                    <input className="login__input" name="password"></input>
                    <span className="login__error">Что-то пошло не так...</span>
                </fieldset>
                <button className="login__submit" type="submit">Зарегистрироваться</button>
                <p className="login__question">Ещё не зарегистрированы?<NavLink to="/signup" className="login__link"> Регистрация</NavLink></p>
            </form>
        </section>
    );
}

export default login;