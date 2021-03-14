import Header from '../Header/Header';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Techs from '../Technologies/Techs';
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
import { Switch, Route } from 'react-router-dom';

function App() {
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
          <SearchForm />
          <MoviesCardList />
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
