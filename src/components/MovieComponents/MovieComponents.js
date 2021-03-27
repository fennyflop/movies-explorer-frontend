import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

///{ openNavigationPopup, handleCloseNavigation, navigationPopup, defaultCount, rowCount }

function MoviesComponents({ handleSave, handleDelete, handleSearchForm, hasErrors, isSearching, openNavigationPopup, handleCloseNavigation, isOpen, defaultCount, rowCount, areSaved, movieList, hasAnswers, loggedIn }) {
    return (
        <>
            <Header openNavigation={openNavigationPopup} isLogged={loggedIn} />
            <SearchForm handleSearchForm={handleSearchForm}
                movieList={movieList}
                areSaved={areSaved}
                hasAnswers={hasAnswers}
                hasErrors={hasErrors}
            />
            <MoviesCardList defaultCount={defaultCount} rowCount={rowCount}
                isSearching={isSearching} movieList={movieList} areSaved={areSaved}
                hasErrors={hasErrors} isSearching={isSearching}
                handleSave={handleSave} handleDelete={handleDelete} />
            <Footer />
            <Navigation handleCloseNavigation={handleCloseNavigation} isOpen={isOpen} />
        </>
    );
}

export default MoviesComponents;