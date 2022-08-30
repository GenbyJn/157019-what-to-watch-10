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
import { browserHistory } from '../../browser-history';
import { useAppSelector } from '../../hooks';
import Loading from '../loader/loader';
import ServerError from '../server-error/server-error';
import { selectIsLoadedError, selectIsLoadedFilms } from '../../store/films-slice/selectors';
import { selectAuthStatus } from '../../store/auth-slice/selectors';
import { selectIsPromoError } from '../../store/promo-slice/selectors';
import { RouteType } from '../../types/common';


const App = (): JSX.Element => {
  const isFilmsLoaded = useAppSelector(selectIsLoadedFilms);
  const isErrorLoadFilms = useAppSelector(selectIsLoadedError);
  const isPromoLoaded = useAppSelector(selectIsLoadedError);
  const isErrorLoadPromo = useAppSelector(selectIsPromoError);
  const authStatus = useAppSelector(selectAuthStatus);
  const routes: RouteType[] = [
    {
      path: RouteName.Main,
      element: <MainScreen />
    },
    {
      path: RouteName.SignIn,
      element: <LoginScreen/>
    },
    {
      path: RouteName.MyList,
      element:(
        <PrivateRoute >
          <MyListScreen />
        </PrivateRoute>)
    },
    {
      path: RouteName.Film.path,
      element: <FilmScreen />
    },
    {
      path: RouteName.AddReview.path,
      element: <AddReviewScreen />
    },

    {
      path: RouteName.Player.path,
      element: <PlayerScreen />
    },

    {
      path: RouteName.NotFound,
      element: <ErrorScreen />
    },

  ];

  if (authStatus === AuthorizationStatus.Unknown || isFilmsLoaded || isPromoLoaded) {
    return <Loading />;
  }

  if (isErrorLoadFilms || isErrorLoadPromo) {
    return <ServerError/>;
  }

  return (
    <HistoryRouter history={ browserHistory }>

      <Routes>
        {routes.map((route) =>(
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />))}
      </ Routes>
    </ HistoryRouter>
  );
};

export default App;

