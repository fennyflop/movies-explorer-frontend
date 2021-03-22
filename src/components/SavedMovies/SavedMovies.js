import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

function SavedMovies({ openNavigationPopup, handleNavgiationPopup, movieList, handleDelete, isOpen, rowCount, defaultCount, hasAnswers, handleSearchForm }) {
    return (
        <>
            <Header openNavigation={openNavigationPopup} />
            <SearchForm handleSearchForm={handleSearchForm} hasAnswers={hasAnswers} movieList={movieList} areSaved={true} />
            <SavedMoviesCardList movieList={movieList} handleDelete={handleDelete} rowCount={rowCount} defaultCount={defaultCount} />
            <Footer />
            <Navigation handleCloseNavigation={handleNavgiationPopup} isOpen={isOpen} />
        </>
    );
}

export default SavedMovies;