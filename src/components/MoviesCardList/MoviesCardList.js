import './MoviesCardList.css';
import Movie from '../Movie/Movie';
import QueryNotFound from '../QueryNotFound/QueryNotFound';
import QueryError from '../QueryError/QueryError';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';

function MoviesCardList({ defaultCount, rowCount, areSaved, handleSave, handleDelete, isSearching, hasErrors, movieList }) {

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

    useEffect(() => {
        console.log(movieList);
    }, [isSearching])

    function handleMoreMovies() {
        if (rowCount < movieList.length) {
            return setElements(elements + rowCount);
        }
    }

    return (
        <section className="movies">
            <div className="movies__list">
                {movieList.length && !isSearching ? displayedMovies.map((movie, i) => {
                    return <Movie movie={movie} isInSavedMovies={areSaved} handleSave={handleSave} handleDelete={handleDelete} key={i} />
                }) : ''}
            </div>
            {movieList.length && elements < movieList.length && !isSearching ? <button className="movies__button" onClick={handleMoreMovies}>Ещё</button> : ''}
            {hasErrors ? <QueryError /> : ''}
            {!movieList.length && !hasErrors && !isSearching ? <QueryNotFound /> : ''}
            {isSearching ? <Preloader /> : ''}
        </section>
    );
}

export default MoviesCardList;