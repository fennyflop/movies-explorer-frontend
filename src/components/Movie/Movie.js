import { useState } from 'react';
import './Movie.css';

function Movie({ isInSavedMovies, handleSave, movie }) {

    const [isLiked, setIsLiked] = useState(false);

    if (!movie) {
        return null;
    }

    const thumbnail = movie.image ? `https://api.nomoreparties.co${movie.image.url}` : 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';

    function convertTime() {
        const { duration } = movie;
        const hours = Math.floor(duration / 60) || 0;
        const minutes = Math.floor(duration % 60);

        return `${hours}ч${minutes}м`;
    }

    function onSave() {
        setIsLiked(!isLiked);
        handleSave(movie);
    }

    return (
        <div className="movie">
            <a target="_blank" href={movie.trailerLink}><img className="movie__thumbnail" alt="thumbnail" src={thumbnail} /></a>
            <div className="movie__info">
                <div className="movie__toolbar">
                    <h3 className="movie__title">{movie.nameRU}</h3>
                    <button className={isInSavedMovies ? 'movie__delete' : `movie__save ${isLiked ? 'movie__saved' : ''}`} onClick={onSave}></button>
                </div>
                <p className="movie__duration">{convertTime(movie.duration)}</p>
            </div>
        </div>
    );
}

export default Movie;