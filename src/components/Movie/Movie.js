import { useEffect, useState } from 'react';
import './Movie.css';

function Movie({ movie, handleSave, handleDelete, isInSavedMovies }) {

    const [isSaved, setIsSaved] = useState(false);
    const [cardId, setCardId] = useState('');

    useEffect(() => {
        if (movie) {
            // Отображение самого первого
            const savedList = JSON.parse(localStorage.getItem('saved-movies'));
            setIsSaved(savedList.find((item) => item.nameRU === movie.nameRU) ? savedList.find((item) => item.nameRU === movie.nameRU)._id : false);
        }
    }, [])

    if (!movie) {
        return null;
    }

    const thumbnail = movie._id ? movie.image : `https://api.nomoreparties.co${movie.image.url}` || 'https://www.meme-arsenal.com/memes/43ee710082bdd5b7ea27fbba58c87e40.jpg';

    // Time conversion
    function convertTime() {
        const { duration } = movie;
        const hours = Math.floor(duration / 60) || 0;
        const minutes = Math.floor(duration % 60);
        return `${hours}ч${minutes}м`;
    }
    // Get saved-movies
    function getSavedMovies() {
        const savedList = JSON.parse(localStorage.getItem('saved-movies'));
        const cardLikedId = savedList.find((item) => item.nameRU === movie.nameRU) ? savedList.find((item) => item.nameRU === movie.nameRU)._id : false;
        return cardLikedId;
    }

    // Bookmarking
    function handleSaveClick() {
        const cardLikedId = getSavedMovies();
        if (!cardLikedId) {
            handleSave(movie).then(() => { setIsSaved(true) }).catch((err) => { console.log(err) });
        } else {
            handleDelete(cardLikedId).then(() => { setIsSaved(false) }).catch((err) => { console.log(err) });
        }
    }
    // Remove from saved ones
    function deleteMovie() {
        const cardLikedId = getSavedMovies();
        handleDelete(cardLikedId).then(() => { setIsSaved(false) }).catch((err) => { console.log(err) });
    }

    return (
        <div className="movie">
            <a target="_blank" href={movie.trailerLink}><img className="movie__thumbnail" alt="thumbnail" src={thumbnail} /></a>
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