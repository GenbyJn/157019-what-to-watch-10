import GenresList from '../../components/ganres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';
import { DEFAULT_GENRE } from '../../utils/common';
import Footer from '../../components/footer/footer';
import FilmPromo from '../../components/film-promo/film-promo';


const MainScreen = (): JSX.Element => {
  const filmsData = useAppSelector((state) => state.films);
  const currentGenre = useAppSelector((state) => state.genre);
  const allFilmCardCount = filmsData.length;
  const filmsCount = useAppSelector((state) => state.filmsCount);
  // eslint-disable-next-line no-console
  console.log(filmsData);
  let genreFilms = filmsData;

  if (currentGenre !== DEFAULT_GENRE) {
    genreFilms = filmsData.filter((item) => item.genre.toLowerCase() === currentGenre.toLowerCase());
  }

  return (
    <>
      <FilmPromo />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList FilmsData={filmsData}/>

          <FilmsList
            genreFilms={genreFilms ? genreFilms.slice(0, filmsCount) : filmsData.slice(0, filmsCount)}
            isShowButton={genreFilms ? allFilmCardCount < genreFilms.length : filmsCount < filmsData.length}
          />

        </section>

        <Footer/>
      </div>
    </>
  );
};


export default MainScreen;
