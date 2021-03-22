import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import QueryError from '../QueryError/QueryError';
import QueryNotFound from '../QueryNotFound/QueryNotFound';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movieList, handleDelete, isSearching, hasAnswers, hasErrors, rowCount, defaultCount }) {

    const [elements, setElements] = useState(0);
    const [displayedMovies, setDisplayedMovies] = useState([]);

    // Схожие viewportы
    useEffect(() => {
        setElements(defaultCount);
    }, [rowCount, defaultCount]);

    useEffect(() => {
        let accumulator = [];
        // Нужен цикл for для break;
        for (let i = 0; i < elements; i++) {
            if (i < elements) {
                accumulator.push(movieList[i]);
            } else {
                break;
            }
        };
        setDisplayedMovies(accumulator);
    }, [movieList, elements]);

    function handleMoreMovies() {
        if (rowCount < movieList.length) {
            return setElements(elements + rowCount);
        }
    }

    return (
        <section className="movies">
            <div className="movies__list">
                {displayedMovies.map((movie, i) => {
                    return <Movie movie={movie} isInSavedMovies={true} handleDelete={handleDelete} key={i} />
                })}
            </div>
            {movieList.length && elements < movieList.length ? <button className="movies__button" onClick={handleMoreMovies}>Ещё</button> : ''}
            {hasErrors ? <QueryError /> : ''}
            {!movieList.length && !hasErrors ? <QueryNotFound /> : ''}
            {isSearching ? <Preloader /> : ''}
        </section>
    );
}

export default MoviesCardList;