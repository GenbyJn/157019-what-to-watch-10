import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import AddReview from '../../components/add-review/add-review';
import Loading from '../../components/loader/loader';
import Logo from '../../components/logo/logo';
import ServerError from '../../components/server-error/server-error';
import { useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { selectFilm, selectIsLoadedError, selectIsLoadedFilm } from '../../store/film-slice/selectors';

const AddReviewScreen = ():JSX.Element => {
  const params = useParams();
  const dispatch = useDispatch();
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

        <header className="page-header">

          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${ id }`} className="breadcrumbs__link">{ name }</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href="/#" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/#" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={ posterImage } alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <AddReview />

    </section>
  );
};


export default AddReviewScreen;
