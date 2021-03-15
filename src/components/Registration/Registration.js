import './Registration.css';
import UserForm from '../UserForm/UserForm';

function Registration() {
    return (
        <UserForm question="Уже зарегистрированы?" name="registration" linkName="Войти" submitName="Зарегистрироваться" title="Добро пожаловать!" toPath="/signin">
            <fieldset className="registration__fieldset">
                <label className="registration__label" htmlFor="username">Имя</label>
                <input className="registration__input" autoComplete="off" name="username" placeholder="Введите своё имя" />
            </fieldset>
            <fieldset className="registration__fieldset">
                <label className="registration__label" htmlFor="email">E-mail</label>
                <input className="registration__input" autoComplete="off" type="email" name="email" placeholder="Введите свою почту" />
            </fieldset>
            <fieldset className="registration__fieldset">
                <label className="registration__label" htmlFor="password">Пароль</label>
                <input className="registration__input registration__input-error" autoComplete="off" type="password" name="password" placeholder="Введите свой пароль" />
                <span className="registration__error">Что-то пошло не так...</span>
            </fieldset>
        </UserForm>
    );
}

export default Registration;