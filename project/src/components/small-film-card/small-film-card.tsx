import { Film } from '../../types/film';
import { Link } from 'react-router-dom';

type SmallFilmCardProps = {
  film: Film
  activeCard: number | null;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

const SmallFilmCard = ({film, activeCard, onMouseEnter, onMouseLeave}: SmallFilmCardProps): JSX.Element => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={film.posterImage} alt={film.name} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
    </h3>
  </article>
);

export default SmallFilmCard;
