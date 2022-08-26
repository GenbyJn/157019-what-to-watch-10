import {useEffect} from 'react';
import FilmsList from '../../components/films-list/films-list';
import {selectFavorites, selectIsLoadedError, selectIsLoadedFavorites} from '../../store/favorite-slice/selectors';
import {fetchFavoritesAction} from '../../store/api-actions';
import ServerError from '../../components/server-error/server-error';
import Loading from '../../components/loading/loading';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';

function FavoriteFilms(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(selectFavorites);
  const isLoading = useAppSelector(selectIsLoadedFavorites);
  const isErrorLoadFavorite = useAppSelector(selectIsLoadedError);
  const favoriteCount = favoriteFilms.length;

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (isLoading) {
    return <Loading/>;
  }

  if (isErrorLoadFavorite) {
    return <ServerError/>;
  }

  return (
    <div className="user-page">

      <header className="user-page__head">
        <h1 className="page-title user-page__title">
          My list
          <span className="user-page__film-count">{favoriteCount}</span>
        </h1>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms}/>
      </section>

      <Footer/>
    </div>
  );
}

export default FavoriteFilms;
