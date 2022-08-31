import { useAppSelector } from '../../hooks';
import { selectPromoFilm } from '../../store/promo-slice/selectors';
import FilmCardDescription from '../film-card-description/film-card-description';
import Header from '../header/header';

const FilmPromo = ():JSX.Element => {
  const filmPromo = useAppSelector(selectPromoFilm);
  const { id, name, genre, released, isFavorite, posterImage, backgroundImage } = filmPromo;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={ backgroundImage } alt={ name } />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={ posterImage } alt={ name } width="218" height="327" />
          </div>

          <FilmCardDescription id={id} name={name} genre={genre} released={released} isFavorite={isFavorite} />
        </div>
      </div>
    </section>
  );
};
export default FilmPromo;
