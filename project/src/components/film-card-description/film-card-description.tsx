import { Link, useMatch } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { addFavoriteAction } from '../../store/api-actions';
import { setPlayType } from '../../store/player-slice/player-slice';
import { APIRoute, PlayType } from '../../utils/common';

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
  const isFilmPath = useMatch(APIRoute.Films);

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
        <button
          className="btn btn--play film-card__button"
          type="button"
          onClick={handlePlayFilm}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button
          className="btn btn--list film-card__button"
          type="button"
          onClick={handleAddFavorite}
        >
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
          <span className="film-card__count">9</span>
        </button>
        <Link to={`/films/${id}/review`} className="btn film-card__button">Add review </Link>
      </div>
    </div>
  );
};

export default FilmCardDescription;
