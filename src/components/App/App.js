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
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedMovieList, setSearchedMovieList] = useState([]);

  // SearchForm

  const [isSearching, setIsSearching] = useState(false);
  const [hasAnswers, setHasAnswers] = useState(true); // Не иницирует плейродер сразу
  const [hasErrors, setHasErrors] = useState(false);

  // Row Manipulation

  const [defaultCount, setDefaultCount] = useState(12);
  const [rowCount, setRowCount] = useState(0);

  // User

  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  // Navigation popup

  const [navigationOpened, setNavigationOpened] = useState(false);

  // Контроль повторного входа

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt && jwt.length !== 0) return checkToken(jwt);
  }, [])

  // Контроль получения фильмов

  useEffect(() => {
    if (!isLogged) {
      return;
    }

    handleMovies();
    updateSavedMovies();
  }, [isLogged])

  function handleMovies() {
    return moviesApi.getMovies()
      .then((movies) => {
        setMovieList(movies);
        localStorage.setItem('movies', JSON.stringify(movies));
      })
      .catch((err) => {
        console.log(err);
      })
  };

  function updateSavedMovies() {
    return mainApi.getSavedMovies(localStorage.getItem('jwt'))
      .then((updatedSavedMovies) => {
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem('saved-movies', JSON.stringify(updatedSavedMovies));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Контроль карточек в ряду

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

  async function saveMovie(movie) {
    return mainApi.handleSaveMovie(movie, localStorage.getItem('jwt'))
      .then(() => {
        updateSavedMovies();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  async function deleteMovie(id) {
    return mainApi.handleDeleteMovie(id, localStorage.getItem('jwt'))
      .then(() => {
        updateSavedMovies();
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
        history.push('/movies');
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

  // Close and open navigation popup

  function openNavigationPopup() {
    setNavigationOpened(true);
  }

  function closeNavgiationPopup() {
    setNavigationOpened(false);
  }

  // Временное решение с isNotLogged
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            {/* Временное решение с header */}
            <Header isNotLogged={true} openNavigation={openNavigationPopup} />
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
            <Header openNavigation={openNavigationPopup} />
            <Profile handleLogout={handleLogout} />
          </Route>
          <Route path="/movies">
            <Header openNavigation={openNavigationPopup} />
            <SearchForm handleSearchForm={handleSearchForm} hasAnswers={hasAnswers} />
            <MoviesCardList defaultCount={defaultCount} rowCount={rowCount} isSearching={isSearching} movieList={searchedMovieList} hasAnswers={hasAnswers} hasErrors={hasErrors} handleSave={saveMovie} handleDelete={deleteMovie} />
            <Footer />
            <Navigation handleCloseNavigation={closeNavgiationPopup} isOpen={navigationOpened} />
          </Route>
          <Route path="/saved-movies">
            <Header openNavigation={openNavigationPopup} />
            <SearchForm />
            <SavedMoviesCardList movieList={savedMovies} handleDelete={deleteMovie} />
            <Footer />
            <Navigation handleCloseNavigation={closeNavgiationPopup} isOpen={navigationOpened} />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

  // useEffect(() => {
  //   // Movies
  //   if (!isLogged) {
  //     return;
  //   }
  //   const movies = localStorage.getItem('movies');
  //   if (!movies || !JSON.parse(movies).length) {
  //     return handleMovies();
  //   }

  //   return setMovieList(JSON.parse(movies));
  // }, [isLogged]);