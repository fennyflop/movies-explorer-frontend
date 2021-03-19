import './Registration.css';
import UserForm from '../UserForm/UserForm';
import { useEffect, useState } from 'react';

function Registration({ handleRegistration }) {

    // Regexps
    const nameRegexp = /^[а-яА-Я\s]*$/i;

    // Values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Validity
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    function handleName(evt) {
        setName(evt.target.value);
    }

    function handleEmail(evt) {
        setEmail(evt.target.value);
        setEmailValid(evt.target.validity.valid);
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
        setPasswordValid(evt.target.validity.valid && evt.target.value);
    }

    useEffect(() => {
        setNameValid(name && nameRegexp.test(name));
    }, [name]);

    // Регистрация

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(name, email, password);
        handleRegistration(name, email, password);
    }


    return (
        <UserForm handleSubmit={handleSubmit} isDisabled={!(nameValid && emailValid && passwordValid)} question="Уже зарегистрированы?" name="registration" linkName="Войти" submitName="Зарегистрироваться" title="Добро пожаловать!" toPath="/signin">
            <fieldset className="registration__fieldset">
                <label className="registration__label" htmlFor="username">Имя</label>
                <input className={`registration__input ${!nameValid ? 'registration__input-error' : ''}`} autoComplete="off" name="username" placeholder="Введите своё имя" onChange={handleName} />
                <span className={`registration__error ${nameValid ? 'registration__error-hidden' : ''}`}>Неподходящее имя...</span>
            </fieldset>
            <fieldset className="registration__fieldset">
                <label className="registration__label" htmlFor="email">E-mail</label>
                <input className={`registration__input ${!emailValid ? 'registration__input-error' : ''}`} autoComplete="off" type="email" name="email" placeholder="Введите свою почту" onChange={handleEmail} />
                <span className={`registration__error ${emailValid ? 'registration__error-hidden' : ''}`}>Неправильный формат почты</span>
            </fieldset>
            <fieldset className="registration__fieldset">
                <label className="registration__label" htmlFor="password">Пароль</label>
                <input className={`registration__input ${!passwordValid ? 'registration__input-error' : ''}`} autoComplete="off" type="password" minLength="6" maxLength="24" name="password" placeholder="Введите свой пароль" onChange={handlePassword} />
                <span className={`registration__error ${passwordValid ? 'registration__error-hidden' : ''}`}>Что-то пошло не так...</span>
            </fieldset>
        </UserForm>
    );
}

export default Registration;