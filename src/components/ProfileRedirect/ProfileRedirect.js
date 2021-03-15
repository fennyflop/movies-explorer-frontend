import './ProfileRedirect.css';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';

function ProfileRedirect({ place }) {
    return (
        <Link className={`redirect`} to="/profile">
            <img className="redirect__icon" alt="profile-icon" src={profileIcon} />
            <p className="redirect__text">Аккаунт</p>
        </Link>
    );
}

export default ProfileRedirect;