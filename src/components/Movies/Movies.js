import MoviesComponents from '../MovieComponents/MovieComponents';

function Movies({ openNavigationPopup, handleCloseNavigation, handleSearchForm, defaultCount, rowCount, isSearching, movieList, hasErrors, handleSave, handleDelete, isOpen }) {
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
                areSaved={false}
            >
            </MoviesComponents>
        </>
    );
}

export default Movies;
