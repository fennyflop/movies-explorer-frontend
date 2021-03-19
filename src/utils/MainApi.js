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
    handleSaveMovie(movie, isSaved) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "DELETE",
            headers: {
                "Authorization": this._token,
                "Content-Type": "application/json",
            },
        }).then((res) => {
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
    baseUrl: 'https://api.films.students.nomoredomains.monster',
    jwt: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUzNzY4ZDUyMTVhZDQ0Mzc0ODE2OWEiLCJpYXQiOjE2MTYwODM0MjQsImV4cCI6MTYxNjY4ODIyNH0.v-_lhl069HUrRn63OZsu43k9ckvM51ZGLsJrpeKeIfM', //temporary
});

export default mainApi;