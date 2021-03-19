import './Login.css';
import UserForm from '../UserForm/UserForm';
import useForm from '../FormHooks/FormHooks';
import { useEffect, useState } from 'react';

function Login({ handleLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Validity
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    function handleEmail(evt) {
        setEmail(evt.target.value);
        setEmailValid(evt.target.validity.valid);
    }
    function handlePassword(evt) {
        setPassword(evt.target.value);
        setPasswordValid(evt.target.validity.valid && evt.target.value);
    }

    function validateForm() {

    }

    const { values, errors, handleChange, handleSubmit } = useForm(handleSubmit, validateForm)

    function handleLogin() {
        console.log('successful login');
    }

    return (
        <UserForm handleSubmit={handleLogin} question="Ещё не зарегистрированы?" name="login" linkName="Регистрация" submitName="Войти" title="Рады видеть!" toPath="/signup">
            <fieldset className="login__fieldset">
                <label className="login__label" htmlFor="email">E-mail</label>
                <input className={`login__input ${!emailValid ? 'login__input-error' : ''}`} autoComplete="off" type="email" name="email" placeholder="Введите свою почту" onChange={handleEmail} value={email || ''} />
                <span className={`login__error ${emailValid ? 'login__error-hidden' : ''}`}>Что-то пошло не так...</span>
            </fieldset>
            <fieldset className="login__fieldset">
                <label className="login__label" htmlFor="password">Пароль</label>
                <input className={`login__input ${!passwordValid ? 'login__input-error' : ''}`} autoComplete="off" type="password" name="password" placeholder="Введите свой пароль" onChange={handlePassword} minLength='6' value={email || ''} />
                <span className={`login__error ${passwordValid ? 'login__error-hidden' : ''}`}>Что-то пошло не так...</span>
            </fieldset>
        </UserForm>
    );
}

export default Login;

    // // Values
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // // Validity
    // const [emailValid, setEmailValid] = useState(false);
    // const [passwordValid, setPasswordValid] = useState(false);

    // function handleEmail(evt) {
    //     setEmail(evt.target.value);
    //     setEmailValid(evt.target.validity.valid);
    // }

    // function handlePassword(evt) {
    //     setPassword(evt.target.value);
    //     setPasswordValid(evt.target.validity.valid && evt.target.value);
    // }

    // // Регистрация

    // function handleSubmit(evt) {
    //     evt.preventDefault();
    //     handleLogin(email, password);
    // }