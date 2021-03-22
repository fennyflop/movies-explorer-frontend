import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesComponents from '../MovieComponents/MovieComponents';

function SavedMovies({ openNavigationPopup, handleCloseNavigation, handleSearchForm, defaultCount, rowCount, isSearching, movieList, hasErrors, handleSave, handleDelete, isOpen }) {
    return (
        <>
            <MoviesComponents
                openNavigationPopup={openNavigationPopup}
                handleCloseNavigation={handleCloseNavigation}
                navigationPopup={isOpen}
                defaultCount={defaultCount}
                rowCount={rowCount}
                movieList={movieList}
                isSearching={isSearching}
                handleSearchForm={handleSearchForm}
                handleDelete={handleDelete}
                handleSave={handleSave}
                areSaved={true}
            >
            </MoviesComponents>
        </>
    );
}

export default SavedMovies;