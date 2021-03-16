import './Login.css';
import UserForm from '../UserForm/UserForm';

function login() {
    return (
        <UserForm question="Ещё не зарегистрированы?" name="login" linkName="Регистрация" submitName="Войти" title="Рады видеть!" toPath="/signup">
            <fieldset className="login__fieldset">
                <label className="login__label" htmlFor="email">E-mail</label>
                <input className="login__input" autoComplete="off" type="email" name="email" placeholder="Введите свою почту" />
            </fieldset>
            <fieldset className="login__fieldset">
                <label className="login__label" htmlFor="password">Пароль</label>
                <input className="login__input login__input-error" autoComplete="off" type="password" name="password" placeholder="Введите свой пароль" />
                <span className="login__error">Что-то пошло не так...</span>
            </fieldset>
        </UserForm>
    );
}

export default login;