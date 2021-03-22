import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function ProfilePage({ openNavigation, handleLogout }) {
    return (
        <>
            <Header openNavigation={openNavigation} />
            <Profile handleLogout={handleLogout} />
        </>
    );
}

export default ProfilePage;