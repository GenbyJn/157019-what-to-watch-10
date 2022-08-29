import { Route, Routes } from 'react-router-dom';
import { AuthorizationStatus, RouteName } from '../../utils/common';
import MainScreen from '../../pages/main-screen/main-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../hooks';
import Loading from '../loader/loader';
import ServerError from '../server-error/server-error';
import { selectIsLoadedError, selectIsLoadedFilms } from '../../store/films-slice/selectors';
import { selectAuthStatus } from '../../store/auth-slice/selectors';
import { selectIsPromoError } from '../../store/promo-slice/selectors';


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
          path={RouteName.Main}
          element={
            <MainScreen />
          }
        />

        <Route
          path={RouteName.SignIn}
          element={<LoginScreen/>}
        />

        <Route
          path={RouteName.MyList}

          element={
            <PrivateRoute >
              <MyListScreen />
            </PrivateRoute>
          }
        />

        <Route
          path={RouteName.Film.path}
          element={<FilmScreen />}
        />

        <Route
          path={RouteName.AddReview.path}
          element={<AddReviewScreen />}
        />

        <Route
          path={RouteName.Player.path}
          element={<PlayerScreen />}
        />

        <Route
          path={RouteName.NotFound}
          element={<ErrorScreen />}
        />

      </ Routes>
    </ HistoryRouter>
  );
};
export default App;
