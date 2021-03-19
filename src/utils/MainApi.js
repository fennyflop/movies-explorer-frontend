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
    handleSaveMovie(movie, isSaved, jwt) {
        console.log(movie);
        if (!isSaved) {
            return fetch(`${this._baseUrl}/movies`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${jwt}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(movie)
            }).then((res) => {
                return this._handleOriginalResponse(res);
            })
        }
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
    baseUrl: 'https://api.films.students.nomoredomains.monster',
});

export default mainApi;