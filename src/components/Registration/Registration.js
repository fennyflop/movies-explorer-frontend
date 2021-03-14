import './Registration.css';
import UserForm from '../UserForm/UserForm';

function Registration() {
    return (
        <UserForm question="Уже зарегистрированы?" name="registration" linkName="Войти" submitName="Зарегистрироваться" title="Добро пожаловать!" toPath="/signin">
            <fieldset className="registration__fieldset">
                <label className="registration__label" htmlFor="username">Имя</label>
                <input className="registration__input" name="username" />
            </fieldset>
            <fieldset className="registration__fieldset">
                <label className="registration__label" htmlFor="email">E-mail</label>
                <input className="registration__input" type="email" name="email" />
            </fieldset>
            <fieldset className="registration__fieldset">
                <label className="registration__label" htmlFor="password">Пароль</label>
                <input className="registration__input registration__input-error" type="password" name="password" />
                <span className="registration__error">Что-то пошло не так...</span>
            </fieldset>
        </UserForm>
    );
}

export default Registration;