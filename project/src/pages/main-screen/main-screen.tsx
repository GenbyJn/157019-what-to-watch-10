import GenresList from '../../components/genres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';
import { FILMS_COUNT } from '../../utils/common';
import Footer from '../../components/footer/footer';
import FilmPromo from '../../components/film-promo/film-promo';
import { useState } from 'react';
import { selectFilterFilms } from '../../store/films-slice/selectors';
import { Film } from '../../types/film';
import ShowMore from '../../components/show-more/show-more';


const MainScreen = (): JSX.Element => {
  const [showCount, setShowCount] = useState<number>(FILMS_COUNT);
  const sortFilms = useAppSelector(selectFilterFilms);

  const getFilmsList = (films: Film[]) => films.slice(0, showCount);

  return (
    <>
      <FilmPromo />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList onChangeShowCount={setShowCount}/>

          <FilmsList films={getFilmsList(sortFilms)} />

          {
            sortFilms.length > showCount &&
            <ShowMore
              showCount={showCount}
              onChangeShowCount={setShowCount}
            />
          }

        </section>

        <Footer/>
      </div>
    </>
  );
};


export default MainScreen;
