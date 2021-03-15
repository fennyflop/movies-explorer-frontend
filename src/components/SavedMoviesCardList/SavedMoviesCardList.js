import Movie from '../Movie/Movie';

function MoviesCardList() {
    return (
        <section className="movies">
            <div className="movies__list">
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
                <Movie savedMovie={true} />
                <Movie savedMovie={true} />
            </div>
            <button className="movies__button">Ещё</button>
        </section>
    );
}

export default MoviesCardList;