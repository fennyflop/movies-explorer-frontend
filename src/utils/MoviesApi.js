class MovieApi {
    constructor(config) {
        this._baseUrl = config.baseUrl;
    }

    _handleOriginalResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._baseUrl}`)
            .then((res) => {
                return this._handleOriginalResponse(res);
            })
    }
}

const movieApi = new MovieApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default movieApi;