import { useEffect, useState } from 'react';
import './Movie.css';

function Movie({ movie, handleSave, handleDelete, isInSavedMovies }) {

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (movie) {
            const savedList = JSON.parse(localStorage.getItem('saved-movies'));
            setIsSaved(savedList.find((item) => item.nameRU === movie.nameRU) ? savedList.find((item) => item.nameRU === movie.nameRU)._id : false);
        }
    }, [movie])

    if (!movie) {
        return null;
    }

    const thumbnail = movie._id ? movie.image : `https://api.nomoreparties.co${movie.image.url}`;

    // Time conversion
    function convertTime() {
        const { duration } = movie;
        return `${Math.floor(duration / 60) || 0}ч${Math.floor(duration % 60)}м`;
    }
    // Get saved-movies
    function getSavedMovies() {
        const savedList = JSON.parse(localStorage.getItem('saved-movies'));
        return savedList.find((item) => item.nameRU === movie.nameRU) ? savedList.find((item) => item.nameRU === movie.nameRU)._id : false;
    }

    // Bookmarking
    function handleSaveClick() {
        const cardId = getSavedMovies();
        if (!cardId) return bookmarkMovie();
        return deleteMovie();
    }
    // Bookmark
    function bookmarkMovie() {
        handleSave(movie).then(() => { setIsSaved(true) }).catch((err) => { console.log(err) });
    }
    // Remove from saved ones
    function deleteMovie() {
        handleDelete(getSavedMovies()).then(() => { setIsSaved(false) }).catch((err) => { console.log(err) });
    }

    return (
        <div className="movie">
            <a target="_blank" href={movie.trailerLink || movie.trailer}><img className="movie__thumbnail" alt="thumbnail" src={thumbnail} /></a>
            <div className="movie__info">
                <div className="movie__toolbar">
                    <h3 className="movie__title">{movie.nameRU}</h3>
                    {isInSavedMovies ? <button className="movie__delete" onClick={deleteMovie}></button> : <button className={`movie__save ${isSaved ? 'movie__saved' : ''}`} onClick={handleSaveClick}></button>}
                </div>
                <p className="movie__duration">{convertTime(movie.duration)}</p>
            </div>
        </div >
    );
}

export default Movie;