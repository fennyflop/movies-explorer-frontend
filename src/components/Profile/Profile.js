import './Profile.css';
import useForm from '../FormHooks/FormHooks';
import { useFormWithValidation } from '../FormHooks/useForm';
import { nameProfileValidation } from '../../utils/formValidation';

function Profile({ handleLogout, handleUpdateUser, userName, userEmail }) {

    const { values, handleChange, customHandleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        handleUpdateUser(values.name, values.email);
        resetForm();
    }

    function handleNameValidation(evt) {
        customHandleChange(evt, nameProfileValidation, [userName])
    }

    return (
        <section className="profile">
            <form className="profile__form" onSubmit={handleSubmit}>
                <h1 className="profile__greeting">Привет, {userName}!</h1>
                <p className="profile__error">{errors.name}</p>
                <fieldset className="profile__fieldset">
                    <label className="profile__label" htmlFor="name">Имя</label>
                    <input className={`profile__input ${errors.name && 'profile__input-error'}`} name="name" onChange={handleNameValidation} placeholder={userName} values={values.name} autoComplete="off" required minLength={1} />
                </fieldset>
                <fieldset className="profile__fieldset">
                    <label className="profile__label" htmlFor="email">Почта</label>
                    <input className={`profile__input ${errors.email && 'profile__input-error'}`} type="email" name="email" onChange={handleChange} placeholder={userEmail} values={values.email} autoComplete="off" required minLength={1} />
                </fieldset>
                <p className="profile__error">{errors.email}</p>
                <button type="submit" className="profile__button profile__submit" onClick={handleSubmit} disabled={!isValid}>Редактировать</button>
                <button className="profile__button profile__exit" onClick={() => { handleLogout() }}>Выйти из аккаунта</button>
            </form>
        </section >
    );
}

export default Profile;