import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../common';
import MainScreen from '../../pages/main-screen/main-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>

      <Route
        path={AppRoute.Root}
        element={
          <MainScreen
            filmCardCount='12'
            releaseDate='2014'
            genre='Drama'
            title='The Grand Budapest Hotel poster'
            poster='img/the-grand-budapest-hotel-poster.jpg'
          />
        }
      />

      <Route
        path={AppRoute.Error}
        element={<ErrorScreen/>}
      />

      <Route
        path={AppRoute.SignIn}
        element={<LoginScreen/>}
      />

      <Route
        path={AppRoute.MyList}
        element={<MyListScreen/>}
      />

      <Route
        path={AppRoute.Film}
        element={<FilmScreen/>}
      />

      <Route
        path={AppRoute.AddReview}
        element={<AddReviewScreen/>}
      />

      <Route
        path={AppRoute.Player}
        element={<PlayerScreen/>}
      />

    </Routes>
  </BrowserRouter>
);

export default App;
