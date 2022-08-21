import Logo from '../../components/logo/logo';
import GenresList from '../../components/ganres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';
import { DEFAULT_GENRE } from '../../utils/common';
import Footer from '../../components/footer/footer';


const MainScreen = (): JSX.Element => {
  const allFilms = useAppSelector((state) => state.films)
  const currentGenre = useAppSelector((state) => state.genre);
  const allFilmCardCount = allFilms.length;
  const filmsCount = useAppSelector((state) => state.filmsCount);
  // eslint-disable-next-line no-console
  console.log(allFilms);
  let genreFilms = allFilms;

  if (currentGenre !== DEFAULT_GENRE) {
    genreFilms = allFilms.filter((item) => item.genre.toLowerCase() === currentGenre.toLowerCase());
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={ backgroundImage } alt={ name } />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">

          <Logo/>

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

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={ posterImage } alt={ name } width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{ name }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ genre } </span>
                <span className="film-card__year">{ released }</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{ allFilmCardCount }</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList FilmsData={filmsData}/>

          <FilmsList
            genreFilms={genreFilms ? genreFilms.slice(0, filmsCount) : filmsData.slice(0, filmsCount)}
            isShowButton={genreFilms ? filmsCount < genreFilms.length : filmsCount < filmsData.length}
          />

        </section>

        <Footer/>
      </div>
    </>
  );
};


export default MainScreen;
