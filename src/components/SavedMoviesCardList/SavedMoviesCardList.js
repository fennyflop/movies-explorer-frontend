import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

function MoviesCardList({ movieList, handleDelete }) {

    const [displayedMovies, setDisplayedMovies] = useState([]);

    return (
        <section className="movies">
            <div className="movies__list">
                {movieList.map((movie, i) => {
                    return <Movie movie={movie} isInSavedMovies={true} handleDelete={handleDelete} key={i} />
                })}
                {/* <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
                <Movie savedMovie={true} /> */}
            </div>
            <button className="movies__button">Ещё</button>
        </section>
    );
}

export default MoviesCardList;