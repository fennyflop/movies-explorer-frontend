import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

function Movies({ openNavigationPopup, handleCloseNavigation, handleSearchForm, hasAnswers, defaultCount, rowCount, isSearching, movieList, hasErrors, handleSave, handleDelete, isOpen }) {
    return (
        <>
            <Header openNavigation={openNavigationPopup} />
            <SearchForm handleSearchForm={handleSearchForm} hasAnswers={hasAnswers} movieList={movieList} areSaved={false} />
            <MoviesCardList defaultCount={defaultCount} rowCount={rowCount} isSearching={isSearching} movieList={movieList} hasAnswers={hasAnswers} hasErrors={hasErrors} handleSave={handleSave} handleDelete={handleDelete} />
            <Footer />
            <Navigation handleCloseNavigation={handleCloseNavigation} isOpen={isOpen} />
        </>
    );
}

export default Movies;