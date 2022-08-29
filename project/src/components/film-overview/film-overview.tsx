import { Film } from '../../types/film';
import { getScoreFilm } from '../../utils/utils';

type FilmOverviewProps = {
  currentFilm: Film;
}

const FilmOverview = ({currentFilm}: FilmOverviewProps):JSX.Element => {
  const {rating, scoresCount, director, description} = currentFilm;
  const starringList = currentFilm.starring.map((item) => item).join(', ');

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ rating.toFixed(1).toString().replace(/\./g,',') }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ getScoreFilm(rating) }</span>
          <span className="film-rating__count">{ scoresCount } ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{ description }</p>

        <p className="film-card__director"><strong>Director: { director }</strong></p>

        <p className="film-card__starring"><strong>Starring: { starringList } and other</strong></p>
      </div>
    </>
  );
};

export default FilmOverview;
