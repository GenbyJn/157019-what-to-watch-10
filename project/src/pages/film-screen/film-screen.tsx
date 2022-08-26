import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SimilarFilms from '../../components/similar-films/similar-films';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectIsLoadedFilm, selectIsLoadedError } from '../../store/film-slice/selectors';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import Loading from '../../components/loading/loading';
import ServerError from '../../components/server-error/server-error';

const FilmScreen = ():JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoadedFilm);
  const isErrorLoadFilm = useAppSelector(selectIsLoadedError);
  const filmId = params.id;

  useEffect(() => {
    if (filmId) {
      dispatch(fetchFilmAction(filmId));
      dispatch(fetchSimilarFilmsAction(filmId));
      dispatch(fetchCommentsAction(filmId));
    }
  }, [filmId, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (isErrorLoadFilm) {
    return <ServerError />;
  }
  return (
    <div className="page-content">

      <SimilarFilms />

      <Footer />
    </div>
  );
};

export default FilmScreen;
