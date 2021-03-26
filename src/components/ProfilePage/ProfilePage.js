import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function ProfilePage({ openNavigation, handleLogout, handleUpdateUser, userName, userEmail }) {
    return (
        <>
            <Header openNavigation={openNavigation} />
            <Profile handleLogout={handleLogout} handleUpdateUser={handleUpdateUser} userName={userName} userEmail={userEmail} />
        </>
    );
}

export default ProfilePage;