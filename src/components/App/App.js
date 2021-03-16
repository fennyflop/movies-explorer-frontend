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
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [searchedMovieList, setSearchedMovieList] = useState([]);

  // SearchForm

  const [isSearching, setIsSearching] = useState(false);
  const [hasAnswers, setHasAnswers] = useState(true); // Не иницирует плейродер сразу

  useEffect(() => {
    const movies = localStorage.getItem('movies');
    if (!movies) {
      return handleMovies();
    }

    return setMovieList(JSON.parse(movies));
  }, []);

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

  function handleSearchForm(query, shortFilmsDecision) {
    // Start searching
    setIsSearching(true);
    // Query params
    const regExp = new RegExp(`${query}`);
    const validDuration = shortFilmsDecision ? 0 : 40
    // Filtered movies
    const filteredMovies = movieList.filter((e) => {
      return regExp.test(e.nameRU) && e.duration > validDuration;
    });
    // Testing
    console.log(filteredMovies);
    if (filteredMovies.length) {
      setSearchedMovieList(filteredMovies);
      setHasAnswers(true);
    } else {
      setHasAnswers(false)
    }
    // Finish search
    setIsSearching(false);
  }

  // Временное решение с isNotLogged
  return (
    <div className="App">
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
          <Login />
        </Route>
        <Route path="/signup">
          <Registration />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/movies">
          <Header />
          <SearchForm handleSearchForm={handleSearchForm} hasAnswers={hasAnswers} />
          <MoviesCardList isSearching={isSearching} movieList={searchedMovieList} hasAnswers={hasAnswers} />
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
    </div>
  );
}

export default App;
