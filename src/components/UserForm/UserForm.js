import './UserForm.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function UserForm(props) {
    return (
        <>
            <section className={props.name}>
                <form className="userform">
                    <Link className="userform__home-link" to="/">
                        <img className="userform__logo" alt="logo" src={logo} />
                    </Link>
                    <h1 className="userform__title">{props.title}</h1>
                    {props.children}
                    <button className="userform__submit" type="submit" disabled>{props.submitName}</button>
                    <p className="userform__question">{props.question} <NavLink to={props.toPath} className="userform__link">{props.linkName}</NavLink></p>
                </form>
            </section>
        </>
    );
}

export default UserForm;