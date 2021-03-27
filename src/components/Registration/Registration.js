import './Registration.css';
import UserForm from '../UserForm/UserForm';
import useForm from '../FormHooks/FormHooks';
import { validateSignupValues } from '../../utils/formValidation';
import { Route, Redirect } from "react-router-dom";
import { useEffect } from 'react';

function Registration({ handleRegistration, isLogged }) {
    const { values, errors, handleChange, handleSubmit } = useForm(handleForm, validateSignupValues);

    function handleForm() {
        handleRegistration(values.name, values.email, values.password);
    }

    useEffect(() => {
        handleSubmit(); // Сразу начинает валидироваться
    }, [Registration])

    return (
        <Route path="/signup">
            {
                () => !isLogged ? <UserForm handleSubmit={handleSubmit} question="Уже зарегистрированы?" name="registration" linkName="Войти" submitName="Зарегистрироваться" title="Добро пожаловать!" toPath="/signin" isDisabled={Object.keys(errors).length !== 0}>
                    <fieldset className="registration__fieldset" >
                        <label className="registration__label" htmlFor="username">Имя</label>
                        <input className={`registration__input ${errors.name ? 'registration__input-error' : ''}`} required autoComplete="off" name="name" placeholder="Введите своё имя" value={values.name} onChange={handleChange} />
                        <span className={`registration__error ${!errors.name ? 'registration__error-hidden' : ''}`}>{errors.name}</span>
                    </fieldset >
                    <fieldset className="registration__fieldset">
                        <label className="registration__label" htmlFor="email">E-mail</label>
                        <input className={`registration__input ${errors.email ? 'registration__input-error' : ''}`} autoComplete="off" type="email" name="email" placeholder="Введите свою почту" value={values.email || ''} onChange={handleChange} />
                        <span className={`registration__error ${!errors.email ? 'registration__error-hidden' : ''}`}>{errors.email}</span>
                    </fieldset>
                    <fieldset className="registration__fieldset">
                        <label className="registration__label" htmlFor="password">Пароль</label>
                        <input className={`registration__input ${errors.password ? 'registration__input-error' : ''}`} autoComplete="off" type="password" minLength="6" maxLength="24" name="password" placeholder="Введите свой пароль" value={values.password || ''} onChange={handleChange} />
                        <span className={`registration__error ${!errors.password ? 'registration__error-hidden' : ''}`}>{errors.password}</span>
                    </fieldset>
                </UserForm > : <Redirect to="./movies" />
            }
        </Route>
    );
}

export default Registration;
