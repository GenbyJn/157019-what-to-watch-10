import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/common';
import MainScreen from '../../pages/main-screen/main-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';

import { useAppSelector } from '../../hooks';
import Loading from '../loader/loader';
import ServerError from '../server-error/server-error';
import { selectIsLoadedError, selectIsLoadedFilms } from '../../store/films-slice/selectors';
import { selectAuthStatus } from '../../store/auth-slice/selectors';
import { selectIsPromoError } from '../../store/promo-slice/selectors';
import browserHistory from '../../browser-history';


const App = (): JSX.Element => {
  const isFilmsLoaded = useAppSelector(selectIsLoadedFilms);
  const isErrorLoadFilms = useAppSelector(selectIsLoadedError);
  const isPromoLoaded = useAppSelector(selectIsLoadedError);
  const isErrorLoadPromo = useAppSelector(selectIsPromoError);
  const authStatus = useAppSelector(selectAuthStatus);
  if (authStatus === AuthorizationStatus.Unknown || isFilmsLoaded || isPromoLoaded) {
    return <Loading />;
  }
  if (isErrorLoadFilms || isErrorLoadPromo) {
    return <ServerError/>;
  }
  return (
    <HistoryRouter history={ browserHistory }>
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
          path={AppRoute.Main}
          element={
            <MainScreen />
          }
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute >
              <MyListScreen />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Film}
          element={
            <FilmScreen />
          }
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
      </ Routes>
    </ HistoryRouter>
  );
};

export default App;

