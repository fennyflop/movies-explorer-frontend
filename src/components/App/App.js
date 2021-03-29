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
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import Navigation from '../Navigation/Navigation';
import InfoPopup from '../InfoPopup/InfoPopup';
// Pages
import ProfilePage from '../ProfilePage/ProfilePage';
import MoviesComponents from '../MovieComponents/MovieComponents';

import useWindowDimensions from '../../utils/windowDimensions';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const history = useHistory();

  const { width } = useWindowDimensions();

  const [movieList, setMovieList] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedSearchedMovieList, setSavedSearchedMovieList] = useState([]);
  const [searchedMovieList, setSearchedMovieList] = useState([]);

  // SearchForm

  const [isSearching, setIsSearching] = useState(false);
  const [hasAnswers, setHasAnswers] = useState(true); // Не иницирует плейродер сразу
  const [hasErrors, setHasErrors] = useState(false);

  // Row Manipulation

  const [defaultCount, setDefaultCount] = useState(12);
  const [rowCount, setRowCount] = useState(0);

  // Popup

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('Сообщение');

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

  function handleSearchForm(query, shortFilmsDecision, areSaved) {
    setHasAnswers(true);
    setHasErrors(false);
    setIsSearching(true);
    setTimeout(() => {
      filterMovies(query, shortFilmsDecision, areSaved)
        .then((filteredMovies) => {
          if (!areSaved) { setSearchedMovieList(filteredMovies) }
          else { setSavedSearchedMovieList(filteredMovies); }
          setHasAnswers(true);
        })
        .catch(() => {
          setHasErrors(true);
        })
        .finally(() => {
          setIsSearching(false);
        })
    }, 1000)
  }

  // User functions

  function handleLogin(email, password) {
    return mainApi.handleLogin(email, password)
      .then(({ token }) => {
        checkToken(token);
        localStorage.setItem('jwt', token);
        history.push('/movies');
      })
      .catch((err) => {
        openPopup('Не удалось войти в аккаунт');
      })
  }

  function handleRegistration(name, email, password) {
    return mainApi.handleRegister(name, email, password)
      .then(() => {
        history.push('/signin')
        openPopup('Аккаунт успешно создан');
      })
      .catch((err) => {
        openPopup('Не удалось зарегестрироваться');
      })
  }

  function handleUpdateUser(name, email) {
    return mainApi.updateUserInfo(name, email, localStorage.getItem('jwt'))
      .then((data) => {
        setCurrentUser(data);
        setIsLogged(true);
        history.push('/movies');
        openPopup('Данные успешно обновленны');
      })
      .catch((err) => {
        openPopup('Не удалось обновить данные');
      })
  }

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem('jwt');
    history.push('/')
    openPopup('Успешный выход из аккаунта');
  }

  // Film functions

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

  function updateSavedMovies(updatedMovies) {
    return mainApi.getSavedMovies(localStorage.getItem('jwt'))
      .then((updatedSavedMovies) => {
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem('saved-movies', JSON.stringify(updatedSavedMovies));
      })
      .catch((err) => {
        console.log(err)
      })
  }


  async function saveMovie(movie) {
    return mainApi.handleSaveMovie(movie, localStorage.getItem('jwt'))
      .then(() => {
        updateSavedMovies();
      })
      .catch((err) => {
        openPopup('Не удалось сохранить фильм');
      })
  }

  async function deleteMovie(id) {
    return mainApi.handleDeleteMovie(id, localStorage.getItem('jwt'))
      .then(() => {
        updateSavedMovies();
        setSavedSearchedMovieList(savedSearchedMovieList.filter((curMovie) => {
          return curMovie._id !== id;
        }))
      })
      .catch((err) => {
        openPopup('Не удалось удалить фильм из сохранённых');
      })
  }

  async function filterMovies(query, shortFilmsDecision, areSaved) {
    const regExp = new RegExp(`${query}`, "i");
    const validDuration = shortFilmsDecision ? 0 : 40;

    const filteredMovies = !areSaved ? movieList.filter((e) => {
      return regExp.test(e.nameRU) && e.duration > validDuration;
    }) : savedMovies.filter((e) => {
      return regExp.test(e.nameRU) && e.duration > validDuration;
    });

    return filteredMovies;
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

  // Popup

  function openPopup(message) {
    setIsPopupOpen(true);
    setPopupMessage(message);
  }

  function closePopup() {
    setIsPopupOpen(false);
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
          <ProtectedRoute
            openNavigationPopup={openNavigationPopup}
            handleCloseNavigation={closeNavgiationPopup}
            handleSearchForm={handleSearchForm}
            defaultCount={defaultCount}
            rowCount={rowCount}
            isSearching={isSearching}
            movieList={searchedMovieList}
            hasErrors={hasErrors}
            areSaved={false}
            isOpen={navigationOpened}
            handleSave={saveMovie}
            handleDelete={deleteMovie}
            path="/movies"
            loggedIn={isLogged}
            component={MoviesComponents}
            hasAnswers={movieList.length !== 0}
          />
          <ProtectedRoute
            openNavigationPopup={openNavigationPopup}
            handleCloseNavigation={closeNavgiationPopup}
            movieList={savedSearchedMovieList}
            handleDelete={deleteMovie}
            isOpen={navigationOpened}
            defaultCount={defaultCount}
            rowCount={rowCount}
            handleSearchForm={handleSearchForm}
            areSaved={true}
            path="/saved-movies"
            loggedIn={isLogged}
            hasAnswers={savedMovies.length !== 0}
            hasErrors={hasErrors}
            isSearching={isSearching}
            component={MoviesComponents} />
          <ProtectedRoute
            openNavigation={openNavigationPopup}
            handleLogout={handleLogout}
            path="/profile"
            userName={currentUser && currentUser.name}
            userEmail={currentUser ? currentUser.email : ''}
            component={ProfilePage} loggedIn={isLogged}
            handleUpdateUser={handleUpdateUser}
          />
          <Route exact path="/">
            <Header isLogged={isLogged} openNavigation={openNavigationPopup} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
            <Navigation handleCloseNavigation={closeNavgiationPopup} isOpen={navigationOpened} />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} isLogged={isLogged} />
          </Route>
          <Route path="/signup">
            <Registration handleRegistration={handleRegistration} isLogged={isLogged} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <InfoPopup isOpen={isPopupOpen} message={popupMessage} closePopup={closePopup} />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
