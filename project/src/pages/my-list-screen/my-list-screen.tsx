import {useEffect} from 'react';
import FilmsList from '../../components/films-list/films-list';
import {selectFavorites, selectIsLoadedError, selectIsLoadedFavorites} from '../../store/favorite-slice/selectors';
import {fetchFavoritesAction} from '../../store/api-actions';
import ServerError from '../../components/server-error/server-error';
import Loader from '../../components/loader/loader';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const MyListScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(selectFavorites);
  const isLoading = useAppSelector(selectIsLoadedFavorites);
  const isErrorLoadFavorite = useAppSelector(selectIsLoadedError);
  const favoriteCount = favoriteFilms.length;

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (isErrorLoadFavorite) {
    return <ServerError/>;
  }

  return (
    <div className="user-page">

      <Header className="user-page__head">
        <h1 className="page-title user-page__title">
          My list
          <span className="user-page__film-count">{favoriteCount}</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms}/>
      </section>

      <Footer/>
    </div>
  );
};

export default MyListScreen;
