import './Profile.css';
import useForm from '../FormHooks/FormHooks';
import { validateProfileUpdate } from '../../utils/formValidation';

function Profile({ handleLogout, handleUpdateUser, userName, userEmail }) {

    const { values, errors, handleChange, handleSubmit } = useForm(handleForm, validateProfileUpdate, [userName, userEmail]);

    function handleForm() {
        handleUpdateUser(values.name, values.email);
    }

    return (
        <section className="profile">
            <form className="profile__form" onSubmit={handleSubmit}>
                <h1 className="profile__greeting">Привет, {userName}!</h1>
                <p className="profile__error">{errors.name}</p>
                <fieldset className="profile__fieldset">
                    <label className="profile__label" htmlFor="name">Имя</label>
                    <input className={`profile__input ${errors.name && 'profile__input-error'}`} name="name" onChange={handleChange} placeholder={userName} values={values.name} />
                </fieldset>
                <fieldset className="profile__fieldset">
                    <label className="profile__label" htmlFor="email">Почта</label>
                    <input className={`profile__input ${errors.email && 'profile__input-error'}`} name="email" onChange={handleChange} placeholder={userEmail} values={values.email} />
                </fieldset>
                <p className="profile__error">{errors.email}</p>
                <button type="submit" className="profile__button profile__submit" form="profile" onClick={handleForm} disabled={errors.name || errors.email ? true : false}>Редактировать</button>
                <button className="profile__button profile__exit" onClick={() => { handleLogout() }}>Выйти из аккаунта</button>
            </form>
        </section >
    );
}

export default Profile;