import './Login.css';
import UserForm from '../UserForm/UserForm';
import useForm from '../FormHooks/FormHooks';
import { useEffect, useState } from 'react';

function Login({ handleLogin }) {

    const { values, errors, handleChange, handleSubmit } = useForm(handleForm, validate);

    function validate(values) {
        let errors = {};
        if (!values.email) {
            errors.email = 'Электронная почта обязательна';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Электронная почта не соответствует формату';
        }
        if (!values.password) {
            errors.password = 'Пароль обязателен';
        } else if (values.password.length < 8) {
            errors.password = 'Минимальная длинна пароля - 6 символов';
        }
        console.log(errors);
        return errors;
    };

    function handleForm() {
        handleLogin(values.email, values.password);
    }

    return (
        <UserForm isDisabled={Object.keys(errors).length !== 0} question="Ещё не зарегистрированы?" name="login" linkName="Регистрация" submitName="Войти" title="Рады видеть!" toPath="/signup" handleSubmit={handleSubmit} >
            <fieldset className="login__fieldset">
                <label className="login__label" htmlFor="email">E-mail</label>
                <input className={`login__input ${errors.email ? 'login__input-error' : ''}`} autoComplete="off" type="email" name="email" placeholder="Введите свою почту" value={values.email || ''} onChange={handleChange} />
                <span className={`login__error ${!errors.email ? 'login__error-hidden' : ''}`}>{errors.email}</span>
            </fieldset>
            <fieldset className="login__fieldset">
                <label className="login__label" htmlFor="password">Пароль</label>
                <input className={`login__input ${errors.password ? 'login__input-error' : ''}`} autoComplete="off" type="password" name="password" placeholder="Введите свой пароль" minLength='6' value={values.password || ''} onChange={handleChange} />
                <span className={`login__error ${!errors.password ? 'login__error-hidden' : ''}`}>{errors.password}</span>
            </fieldset>
        </UserForm >
    );
}

export default Login;

    // // // Values
    // import './Login.css';
    // import UserForm from '../UserForm/UserForm';
    // import useForm from '../FormHooks/FormHooks';
    // import { useEffect, useState } from 'react';

    // function Login({ handleLogin }) {

    //     const [email, setEmail] = useState('');
    //     const [password, setPassword] = useState('');
    //     // Validity
    //     const [emailValid, setEmailValid] = useState(false);
    //     const [passwordValid, setPasswordValid] = useState(false);

    //     function handleEmail(evt) {
    //         setEmail(evt.target.value);
    //         setEmailValid(evt.target.validity.valid);
    //     }
    //     function handlePassword(evt) {
    //         setPassword(evt.target.value);
    //         setPasswordValid(evt.target.validity.valid && evt.target.value);
    //     }

    //     function validateForm() {

    //     }

    //     const { values, errors, handleChange, handleSubmit } = useForm(handleSubmit, validateForm)

    //     function handleLogin() {
    //         console.log('successful login');
    //     }

    //     return (
    //         <UserForm handleSubmit={handleLogin} question="Ещё не зарегистрированы?" name="login" linkName="Регистрация" submitName="Войти" title="Рады видеть!" toPath="/signup">
    //             <fieldset className="login__fieldset">
    //                 <label className="login__label" htmlFor="email">E-mail</label>
    //                 <input className={`login__input ${!emailValid ? 'login__input-error' : ''}`} autoComplete="off" type="email" name="email" placeholder="Введите свою почту" onChange={handleEmail} value={email || ''} />
    //                 <span className={`login__error ${emailValid ? 'login__error-hidden' : ''}`}>Что-то пошло не так...</span>
    //             </fieldset>
    //             <fieldset className="login__fieldset">
    //                 <label className="login__label" htmlFor="password">Пароль</label>
    //                 <input className={`login__input ${!passwordValid ? 'login__input-error' : ''}`} autoComplete="off" type="password" name="password" placeholder="Введите свой пароль" onChange={handlePassword} minLength='6' value={email || ''} />
    //                 <span className={`login__error ${passwordValid ? 'login__error-hidden' : ''}`}>Что-то пошло не так...</span>
    //             </fieldset>
    //         </UserForm>
    //     );
    // }

    // export default Login;