import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

function SavedMovies({ openNavigationPopup, handleCloseNavigation, movieList, handleDelete, isOpen }) {
    return (
        <>
            <Header openNavigation={openNavigationPopup} />
            <SearchForm />
            <SavedMoviesCardList movieList={movieList} handleDelete={handleDelete} />
            <Footer />
            <Navigation handleCloseNavigation={handleCloseNavigation} isOpen={isOpen} />
        </>
    );
}

export default SavedMovies;