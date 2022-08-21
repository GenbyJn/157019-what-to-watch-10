import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/common';
import MainScreen from '../../pages/main-screen/main-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';


const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>

      <Route
        path={AppRoute.Main}
        element={
          <MainScreen />
        }
      />

      <Route
        path={AppRoute.SignIn}
        element={<LoginScreen/>}
      />

      <Route
        path={AppRoute.MyList}

        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyListScreen favoriteCardCount={'9'} />
          </PrivateRoute>
        }
      />

      <Route
        path={AppRoute.Film}
        element={<FilmScreen />}
      />

      <Route
        path={AppRoute.AddReview}
        element={<AddReviewScreen />}
      />

      <Route
        path={AppRoute.Player}
        element={<PlayerScreen />}
      />

      <Route
        path="*"
        element={<ErrorScreen />}
      />

    </Routes>
  </BrowserRouter>
);

export default App;
