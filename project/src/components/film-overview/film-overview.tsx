import { FilmScore } from '../../common';
import { Film } from '../../types/film';

type FilmOverviewProps = {
  currentFilm: Film;
}
let decodedRating: string;


const FilmOverview = ({currentFilm}: FilmOverviewProps):JSX.Element => {

  if (currentFilm.rating < 3) {
    decodedRating = FilmScore.Bad;
  }
  if (currentFilm.rating >= 3 || currentFilm.rating < 5) {
    decodedRating = FilmScore.Normal;
  }
  if (currentFilm.rating >= 5 || currentFilm.rating < 8) {
    decodedRating = FilmScore.Good;
  }
  if (currentFilm.rating >= 8 || currentFilm.rating < 10) {
    decodedRating = FilmScore.VeryGood;
  }
  if (currentFilm.rating === 10) {
    decodedRating = FilmScore.Awesome;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ currentFilm.rating.toFixed(1).toString().replace(/\./g,',') }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ decodedRating }</span>
          <span className="film-rating__count">{ currentFilm.scoresCount }</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm.description}</p>

        <p className="film-card__director"><strong>{ currentFilm.director }</strong></p>

        <p className="film-card__starring"><strong>{ currentFilm.starring }</strong></p>
      </div>
    </>

  );
};
export default FilmOverview;
