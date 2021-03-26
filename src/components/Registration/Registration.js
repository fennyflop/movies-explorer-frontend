import './Registration.css';
import UserForm from '../UserForm/UserForm';
import useForm from '../FormHooks/FormHooks';
import { useHistory } from "react-router-dom";

function Registration({ handleRegistration, isLogged }) {

    const history = useHistory();

    console.log(isLogged);

    const { values, errors, handleChange, handleSubmit } = useForm(handleForm, validate);

    function validate(values) {
        let errors = {};
        if (!values.name) {
            errors.name = 'Имя обязательно'
        } else if (!/^[а-яА-Я\s]*$/i.test(values.name)) {
            errors.name = 'Имя может содержать только латыницу';
        }
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
        handleRegistration(values.name, values.email, values.password);
    }

    return (
        <UserForm handleSubmit={handleSubmit} question="Уже зарегистрированы?" name="registration" linkName="Войти" submitName="Зарегистрироваться" title="Добро пожаловать!" toPath="/signin">
            < fieldset className="registration__fieldset" >
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
        </UserForm >
    );
}

export default Registration;
