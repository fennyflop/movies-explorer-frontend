import './Registration.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Registration() {
    return (
        <section className="registration">
            <form className="registration__form">
                <img className="registration__logo" alt="logo" src={logo} />
                <h1 className="registration__title">Добро пожаловать!</h1>
                <fieldset className="registration__fieldset">
                    <label className="registration__label" htmlFor="username">Имя</label>
                    <input className="registration__input" name="username"></input>
                </fieldset>
                <fieldset className="registration__fieldset">
                    <label className="registration__label" htmlFor="email">E-mail</label>
                    <input className="registration__input" name="email"></input>
                </fieldset>
                <fieldset className="registration__fieldset">
                    <label className="registration__label" htmlFor="password">Пароль</label>
                    <input className="registration__input" name="password"></input>
                    <span className="registration__error">Что-то пошло не так...</span>
                </fieldset>
                <button className="registration__submit" type="submit">Зарегистрироваться</button>
                <p className="registration__question">Уже зарегистрированы?<NavLink to="/signin" className="registration__link"> Войти</NavLink></p>
            </form>
        </section>
    );
}

export default Registration;