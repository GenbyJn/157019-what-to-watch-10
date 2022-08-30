import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import AddReview from '../../components/add-review/add-review';
import CommentForm from '../../components/comment-form/comment-form';
import Header from '../../components/header/header';
import Loading from '../../components/loader/loader';
import ServerError from '../../components/server-error/server-error';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { selectFilm, selectIsLoadedError, selectIsLoadedFilm } from '../../store/film-slice/selectors';
import { getAddReviewUrl, getFilmUrl } from '../../utils/urls';

const AddReviewScreen = ():JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(selectFilm);
  const isLoading = useAppSelector(selectIsLoadedFilm);
  const isErrorLoadFilm = useAppSelector(selectIsLoadedError);
  const filmId = params.id;

  useEffect(() => {
    if (filmId) {
      dispatch(fetchFilmAction(filmId));
    }
  }, [dispatch, filmId]);

  if (isLoading) {
    return <Loading />;
  }

  if (isErrorLoadFilm) {
    return <ServerError/>;
  }
  const {id, name, posterImage, backgroundImage} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={ backgroundImage } alt={ name } />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link"
                  to={getFilmUrl(id)}
                >
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link"
                  to={getAddReviewUrl(id)}
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={ posterImage } alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <CommentForm filmId={id} />

    </section>
  );
};


export default AddReviewScreen;
