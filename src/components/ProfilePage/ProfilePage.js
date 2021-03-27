import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function ProfilePage({ openNavigation, handleLogout, handleUpdateUser, userName, userEmail, loggedIn }) {
    return (
        <>
            <Header openNavigation={openNavigation} isLogged={loggedIn} />
            <Profile handleLogout={handleLogout} handleUpdateUser={handleUpdateUser} userName={userName} userEmail={userEmail} />
        </>
    );
}

export default ProfilePage;