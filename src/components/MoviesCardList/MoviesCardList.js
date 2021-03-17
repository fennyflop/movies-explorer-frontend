import './MoviesCardList.css';
import Movie from '../Movie/Movie';
import QueryNotFound from '../QueryNotFound/QueryNotFound';
import QueryError from '../QueryError/QueryError';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';

function MoviesCardList({ movieList, isSearching, hasAnswers, hasErrors }) {

    const [num, setNum] = useState(4);
    const [displayedMovies, setDisplayedMovies] = useState([]);

    useEffect(() => {
        let accumulator = [];

        // Нужен цикл for для break;
        for (let i = 0; i < num; i++) {
            if (i < num) {
                accumulator.push(movieList[i]);
            } else {
                break;
            }
        };

        setDisplayedMovies(accumulator);
    }, [movieList, num]);

    function handleMoreMovies() {
        if (num < movieList.length) {
            return setNum(num + 4);
        }
    }

    return (
        <section className="movies">
            <div className="movies__list">
                {hasAnswers ? displayedMovies.map((movie, i) => {
                    return <Movie movie={movie} isInSavedMovies={false} key={i} />
                }) : ''}
            </div>
            {hasAnswers && num < movieList.length ? <button className="movies__button" onClick={handleMoreMovies}>Ещё</button> : ''}
            {hasErrors ? <QueryError /> : ''}
            {!hasAnswers && !hasErrors ? <QueryNotFound /> : ''}
            {isSearching ? <Preloader /> : ''}
        </section>
    );
}

export default MoviesCardList;