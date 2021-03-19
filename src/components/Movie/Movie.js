import { useEffect, useState } from 'react';
import './Movie.css';

function Movie({ handleBookmark, handleUnsave, movie }) {

    const [isSaved, setIsSaved] = useState(false);

    if (!movie) {
        return null;
    }

    const thumbnail = movie._id ? movie.image : `https://api.nomoreparties.co${movie.image.url}` || 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';

    function convertTime() {
        const { duration } = movie;
        const hours = Math.floor(duration / 60) || 0;
        const minutes = Math.floor(duration % 60);
        return `${hours}ч${minutes}м`;
    }

    // Bookmarking
    function handleSaveClick() {
        const savedList = JSON.parse(localStorage.getItem('saved-movies'));
        const cardLikedId = savedList.find((item) => item.nameRU === movie.nameRU) ? savedList.find((item) => item.nameRU === movie.nameRU)._id : false;

        console.log(cardLikedId);
        if (!cardLikedId) {
            handleBookmark(movie);
            setIsSaved(true);
        } else {
            handleUnsave(cardLikedId);
            setIsSaved(false);
        }

        // if (cardLiked._id)
    }

    return (
        <div className="movie">
            <a target="_blank" href={movie.trailerLink}><img className="movie__thumbnail" alt="thumbnail" src={thumbnail} /></a>
            <div className="movie__info">
                <div className="movie__toolbar">
                    <h3 className="movie__title">{movie.nameRU}</h3>
                    <button className={`movie__save ${isSaved ? 'movie__saved' : ''}`} onClick={handleSaveClick}></button>
                </div>
                <p className="movie__duration">{convertTime(movie.duration)}</p>
            </div>
        </div >
    );
}

export default Movie;