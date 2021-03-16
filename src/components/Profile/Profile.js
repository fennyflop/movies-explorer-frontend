import './Profile.css';

function Profile() {
    return (
        <section className="profile">
            <form className="profile__form">
                <h1 className="profile__greeting">Привет, Виталий!</h1>
                <fieldset className="profile__fieldset">
                    <div className="profile__top">
                        <label className="profile__label" htmlFor="name">Имя</label>
                        <label className="profile__label" htmlFor="name">Виталий</label>
                    </div>
                    <input className="profile__input" type="text" />
                </fieldset>
                <fieldset className="profile__fieldset">
                    <div className="profile__top">
                        <label className="profile__label" htmlFor="name">Почта</label>
                        <label className="profile__label" htmlFor="name">vitaliy@gmail.ru</label>
                    </div>
                    <input className="profile__input" type="text" />
                </fieldset>
            </form>
            <div className="profile__buttons">
                <button className="profile__button profile__submit" type="submit" form="profile">Редактировать</button>
                <button className="profile__button profile__exit" type="button">Выйти из аккаунта</button>
            </div>
        </section>
    );
}

export default Profile;