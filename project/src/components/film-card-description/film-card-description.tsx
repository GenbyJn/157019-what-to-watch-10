import { Link, useMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addFavoriteAction } from '../../store/api-actions';
import { selectAuthStatus } from '../../store/auth-slice/selectors';
import { selectFavoritesCount } from '../../store/films-slice/selectors';
import { setPlayType } from '../../store/player-slice/player-slice';
import { AuthorizationStatus, PlayType, RouteName } from '../../utils/common';
import { getAddReviewUrl, getPlayerUrl } from '../../utils/urls';

type FilmCardDescriptionProps = {
  id: number;
  name: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

const FilmCardDescription = (props: FilmCardDescriptionProps): JSX.Element => {
  const {id, name, genre, released, isFavorite} = props;
  const dispatch = useAppDispatch();
  const isFilmPath = useMatch(RouteName.Film);
  const isAuthStatus = useAppSelector(selectAuthStatus);
  const favoriteCount = useAppSelector(selectFavoritesCount);


  const handleAddFavorite = () => {
    const status = +!isFavorite;
    dispatch(addFavoriteAction({id, status}));
  };

  const handlePlayFilm = () => {
    const type = isFilmPath ? PlayType.Film : PlayType.Promo;
    dispatch(setPlayType(type));
  };

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{ name }</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{ genre }</span>
        <span className="film-card__year">{ released }</span>
      </p>
      <div className="film-card__buttons">
        <Link
          className="btn btn--play film-card__button"
          type="button"
          onClick={handlePlayFilm}
          to={getPlayerUrl(id)}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>
        {
          isAuthStatus === AuthorizationStatus.Auth &&
        <button
          className="btn btn--list film-card__button"
          type="button"
          onClick={handleAddFavorite}
        >
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
          <span className="film-card__count">{ favoriteCount }</span>
        </button>
        }
        {
          isAuthStatus === AuthorizationStatus.Auth && isFilmPath &&
          <Link to={getAddReviewUrl(id)}
            className="btn film-card__button"
          > Add review
          </Link>
        }
      </div>
    </div>
  );
};

export default FilmCardDescription;
