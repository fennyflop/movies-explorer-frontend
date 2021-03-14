import './Profile.css';

function Profile() {
    return (
        <section className="profile">
            <h1 className="profile__greeting">Привет, Виталий!</h1>
            <form className="profile__form">
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
                <button className="profile__submit">Редактировать</button>
            </form>
            <p className="profile__exit">Выйти из аккаунта</p>
        </section>
    );
}

export default Profile;