import './Registration.css';
import UserForm from '../UserForm/UserForm';
import { useFormWithValidation } from '../FormHooks/useForm';
import { nameValidation } from '../../utils/formValidation';
import { Route, Redirect } from "react-router-dom";

function Registration({ handleRegistration, isLogged }) {

    const { values, handleChange, customHandleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        handleRegistration(values.name, values.email, values.password);
        resetForm();
    }

    function handleNameValidation(evt) {
        customHandleChange(evt, nameValidation);
    }

    return (
        <Route path="/signup">
            {
                () => !isLogged ? <UserForm handleSubmit={handleSubmit} question="Уже зарегистрированы?" name="registration" linkName="Войти" submitName="Зарегистрироваться" title="Добро пожаловать!" toPath="/signin" isDisabled={!isValid}>
                    <fieldset className="registration__fieldset" >
                        <label className="registration__label" htmlFor="username">Имя</label>
                        <input className={`registration__input ${errors.name ? 'registration__input-error' : ''}`} required autoComplete="off" name="name" placeholder="Введите своё имя" value={values.name} onChange={handleNameValidation} required />
                        <span className={`registration__error ${!errors.name ? 'registration__error-hidden' : ''}`}>{errors.name}</span>
                    </fieldset >
                    <fieldset className="registration__fieldset">
                        <label className="registration__label" htmlFor="email">E-mail</label>
                        <input className={`registration__input ${errors.email ? 'registration__input-error' : ''}`} autoComplete="off" type="email" name="email" placeholder="Введите свою почту" value={values.email || ''} onChange={handleChange} required />
                        <span className={`registration__error ${!errors.email ? 'registration__error-hidden' : ''}`}>{errors.email}</span>
                    </fieldset>
                    <fieldset className="registration__fieldset">
                        <label className="registration__label" htmlFor="password">Пароль</label>
                        <input className={`registration__input ${errors.password ? 'registration__input-error' : ''}`} autoComplete="off" type="password" minLength="6" maxLength="24" name="password" required placeholder="Введите свой пароль" value={values.password || ''} onChange={handleChange} />
                        <span className={`registration__error ${!errors.password ? 'registration__error-hidden' : ''}`}>{errors.password}</span>
                    </fieldset>
                </UserForm > : <Redirect to="./movies" />
            }
        </Route>
    );
}

export default Registration;
