class MainApi {
    constructor(config) {
        this._baseUrl = config.baseUrl;
    }

    _handleOriginalResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
    }

    handleLogin(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((res) => {
                return this._handleOriginalResponse(res);
            })
    }
    handleRegister(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        })
            .then((res) => {
                return this._handleOriginalResponse(res);
            })
    }
    handleSaveMovie(movie, jwt) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "nameRU": movie.nameRU,
                "nameEN": movie.nameEN,
                "description": movie.description,
                "country": movie.country,
                "duration": movie.duration,
                "year": movie.year,
                "image": `${movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.thumbnail}`,
                "trailer": movie.trailer || movie.trailerLink,
                "thumbnail": `${movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.thumbnail}`,
                "movieId": movie.movieId || movie.id,
                "director": movie.director
            })
        }).then((res) => {
            return this._handleOriginalResponse(res);
        })
    }
    handleDeleteMovie(movieId, jwt) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
        }).then((res) => {
            return this._handleOriginalResponse(res);
        })
    }
    getSavedMovies(jwt) {
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
                "Authorization": `Bearer ${jwt}`,
                "Content-Type": "application/json",
            }
        })
            .then((res) => {
                return this._handleOriginalResponse(res);
            })
    }
    checkUserToken(jwt) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                "Authorization": `Bearer ${jwt}`,
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                return this._handleOriginalResponse(res);
            })
    }
}

const mainApi = new MainApi({
    baseUrl: 'http://api.exultation.students.nomoredomains.monster',
});

export default mainApi;