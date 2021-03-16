import './MoviesCardList.css';
import Movie from '../Movie/Movie';
import QueryNotFound from '../QueryNotFound/QueryNotFound';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movieList, isSearching, hasAnswers }) {



    return (
        <section className="movies">
            <div className="movies__list">
                {hasAnswers ? movieList.map((movie, i) => {
                    return <Movie movie={movie} isInSavedMovies={false} key={i} />
                }) : ''}
            </div>
            {!hasAnswers ? <QueryNotFound /> : ''}
            {isSearching ? <Preloader /> : ''}
        </section>
    );
}

export default MoviesCardList;