import './Profile.css';
import useForm from '../FormHooks/FormHooks';

function Profile({ handleLogout, handleUpdateUser, userName, userEmail }) {

    const { values, errors, handleChange, handleSubmit } = useForm(handleForm, validate);

    function validate(values) {
        let errors = {};
        if (!values.name) {
            errors.name = 'Имя обязательно'
        } else if (!/^[а-яА-Я\s]*$/i.test(values.name)) {
            errors.name = 'Имя может содержать только латыницу';
        } else if (values.name === userName) {
            errors.name = 'Имя должно отличаться от предыдущего';
        }
        if (!values.email) {
            errors.email = 'Электронная почта обязательна';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Электронная почта не соответствует формату';
        } else if (values.email === userEmail) {
            errors.name = 'Электронная почта должна отличаться от предыдущей';
        }
        console.log(errors);
        return errors;
    }

    function handleForm() {
        handleUpdateUser(values.name, values.email);
    }

    return (
        <section className="profile">
            <form className="profile__form" onSubmit={handleSubmit}>
                <h1 className="profile__greeting">Привет, {userName}!</h1>
                <fieldset className="profile__fieldset">
                    <div className="profile__top">
                        <label className="profile__label" htmlFor="name">Имя</label>
                        <label className="profile__label" htmlFor="name">{userName}</label>
                    </div>
                    <input className='profile__input' type="text" name="name" onChange={handleChange} />
                </fieldset>
                <fieldset className={`profile__fieldset profile__fieldset-border ${errors.name || errors.email ? 'profile__fieldset-error' : ''}`}>
                    < div className="profile__top">
                        <label className="profile__label" htmlFor="email">Почта</label>
                        <label className="profile__label" htmlFor="email">{userEmail}</label>
                    </div>
                    <input className='profile__input' type="text" name="email" onChange={handleChange} />
                </fieldset>
                <button type="submit" className="profile__button profile__submit" form="profile" onClick={handleForm} disabled={errors.name || errors.email ? true : false}>Редактировать</button>
                <button className="profile__button profile__exit" onClick={() => { handleLogout() }}>Выйти из аккаунта</button>
            </form>
        </section >
    );
}

export default Profile;