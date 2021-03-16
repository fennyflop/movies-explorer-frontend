import './Movie.css';

function Movie({ isInSavedMovies, movie }) {

    const thumbnailNotFound = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';

    function convertTime() {
        const { duration } = movie;
        const hours = Math.floor(duration / 60) || 0;
        const minutes = Math.floor(duration % 60);

        return `${hours}ч${minutes}м`;
    }

    if (!movie) {
        return null;
    }

    return (
        <div className="movie">
            <img className="movie__thumbnail" alt="thumbnail" src={movie.thumbnail || thumbnailNotFound} />
            <div className="movie__info">
                <div className="movie__toolbar">
                    <h3 className="movie__title">{movie.nameRU}</h3>
                    <button className={isInSavedMovies ? 'movie__delete' : `movie__save ${Math.random() * 100 > 50 ? 'movie__saved' : ''}`}></button>
                </div>
                <p className="movie__duration">{convertTime(movie.duration)}</p>
            </div>
        </div>
    );
}

export default Movie;