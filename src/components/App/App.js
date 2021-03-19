import './App.css';
import Header from '../Header/Header';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {

  const history = useHistory();

  const { width } = useWindowDimensions();

  const [movieList, setMovieList] = useState([]);
  const [searchedMovieList, setSearchedMovieList] = useState([]);

  // SearchForm

  const [isSearching, setIsSearching] = useState(false);
  const [hasAnswers, setHasAnswers] = useState(true); // Не иницирует плейродер сразу
  const [hasErrors, setHasErrors] = useState(false);

  // Row Manipulation

  const [defaultCount, setDefaultCount] = useState(12);
  const [rowCount, setRowCount] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);

  // User

  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      return checkToken(jwt);
    }
  }, [])

  useEffect(() => {
    // Movies
    if (!isLogged) {
      return;
    }
    const movies = localStorage.getItem('movies');
    if (!movies) {
      return handleMovies();
    }

    return setMovieList(JSON.parse(movies));
  }, [isLogged]);

  useEffect(() => {
    setTimeout(() => {
      switch (true) {
        case (width > 1260):
          setRowCount(4);
          break;
        case (width > 768):
          setRowCount(3);
          break;
        case (width > 480):
          setDefaultCount(8);
          setRowCount(2);
          break;
        default:
          setDefaultCount(5);
          setRowCount(1);
      }
    }, 1000)
  }, [width]);

  function handleMovies() {
    return moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
        setMovieList(movies);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  async function handleSave(movie, isSaved) {
    console.log(movie);
    mainApi.handleSaveMovie({
      "nameRU": movie.nameRU,
      "nameEN": movie.nameEN,
      "description": movie.description,
      "country": movie.country,
      "duration": movie.duration,
      "year": movie.year,
      "image": `https://api.nomoreparties.co${movie.image.url}`,
      "trailer": movie.trailerLink,
      "thumbnail": `https://api.nomoreparties.co${movie.image.url}`,
      "movieId": movie.id,
      "director": movie.director
    }, false, localStorage.getItem('jwt'))
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie])
      })
      .catch((err) => {
        console.log(err);
      })
  }

  async function filterMovies(query, shortFilmsDecision) {
    // Убираем все пред. сообщения
    setHasAnswers(false);
    setHasErrors(false);
    // Начинаем поиск
    setIsSearching(true);

    const regExp = new RegExp(`${query}`, "i");
    const validDuration = shortFilmsDecision ? 0 : 40;

    const filteredMovies = movieList.filter((e) => {
      return regExp.test(e.nameRU) && e.duration > validDuration;
    });
    console.log(filteredMovies);
    return filteredMovies;
  }

  function handleSearchForm(query, shortFilmsDecision) {
    filterMovies(query, shortFilmsDecision)
      .then((filteredMovies) => {
        setSearchedMovieList(filteredMovies);
        setHasAnswers(true);
      })
      .catch((err) => {
        console.log(err);
        setHasErrors(true);
      })
      .finally(() => {
        setIsSearching(false);
      })
  }

  function handleLogin(email, password) {
    return mainApi.handleLogin(email, password)
      .then(({ token }) => {
        checkToken(token);
        localStorage.setItem('jwt', token);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setIsLogged(false);
    history.push('/signin')
  }

  function checkToken(jwt) {
    return mainApi.checkUserToken(jwt)
      .then((data) => {
        setCurrentUser(data);
        setIsLogged(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleRegistration(name, email, password) {
    return mainApi.handleRegister(name, email, password)
      .then(() => {
        history.push('/signin')
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // Временное решение с isNotLogged
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            {/* Временное решение с header */}
            <Header isNotLogged={true} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Registration handleRegistration={handleRegistration} />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile handleLogout={handleLogout} />
          </Route>
          <Route path="/movies">
            <Header />
            <SearchForm handleSearchForm={handleSearchForm} hasAnswers={hasAnswers} />
            <MoviesCardList defaultCount={defaultCount} rowCount={rowCount} isSearching={isSearching} movieList={searchedMovieList} hasAnswers={hasAnswers} hasErrors={hasErrors} handleSave={handleSave} />
            <Footer />
            <Navigation />
          </Route>
          <Route path="/saved-movies">
            <Header />
            <SearchForm />
            <SavedMoviesCardList />
            <Footer />
            <Navigation />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
