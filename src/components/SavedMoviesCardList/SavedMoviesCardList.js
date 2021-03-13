import SavedMovie from '../SavedMovie/SavedMovie';

function MoviesCardList() {
    return (
        <section className="movies">
            <div className="movies__list">
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
                <SavedMovie />
            </div>
            <button className="movies__button">Ещё</button>
        </section>
    );
}

export default MoviesCardList;