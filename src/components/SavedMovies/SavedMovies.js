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