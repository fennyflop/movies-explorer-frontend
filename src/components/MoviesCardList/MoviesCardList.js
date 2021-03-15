import './MoviesCardList.css';
import Movie from '../Movie/Movie';
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
    return (
        <section className="movies">
            <div className="movies__list">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
            <Preloader />
            <button className="movies__button">Ещё</button>
        </section>
    );
}

export default MoviesCardList;