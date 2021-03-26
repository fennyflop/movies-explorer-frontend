import './Login.css';
import UserForm from '../UserForm/UserForm';
import useForm from '../FormHooks/FormHooks';
import { Route, Redirect } from "react-router-dom";

function Login({ handleLogin, isLogged }) {

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
        return errors;
    };

    function handleForm() {
        handleLogin(values.email, values.password);
    }

    return (
        <Route path="/signin">
            {
                () => !isLogged ? <UserForm isDisabled={Object.keys(errors).length !== 0} question="Ещё не зарегистрированы?" name="login" linkName="Регистрация" submitName="Войти" title="Рады видеть!" toPath="/signup" handleSubmit={handleSubmit} >
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
                </UserForm > : <Redirect to="./movies" />
            }
        </Route>
    );
}

export default Login;