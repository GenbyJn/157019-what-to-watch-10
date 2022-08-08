import { Film } from '../../types/film';
import { getScoreFilm } from '../../utils/utils';

type FilmOverviewProps = {
  currentFilm: Film;
}

const FilmOverview = ({currentFilm}: FilmOverviewProps):JSX.Element => {
  const starringList = currentFilm.starring.map((item) => item).join(', ');

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ currentFilm.rating.toFixed(1).toString().replace(/\./g,',') }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ getScoreFilm(currentFilm.rating) }</span>
          <span className="film-rating__count">{ currentFilm.scoresCount }</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm.description}</p>

        <p className="film-card__director"><strong>Director: { currentFilm.director }</strong></p>

        <p className="film-card__starring"><strong>Starring: { starringList }</strong></p>
      </div>
    </>
  );
};

export default FilmOverview;
