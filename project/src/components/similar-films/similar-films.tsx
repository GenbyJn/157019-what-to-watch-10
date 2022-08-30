import {useAppSelector} from '../../hooks/index';
import {SIMILAR_LIST_COUNT} from '../../utils/common';
import {selectSimilarFilms} from '../../store/film-slice/selectors';
import FilmsList from '../films-list/films-list';

function SimilarFilms(): JSX.Element {
  const similarFilms = useAppSelector(selectSimilarFilms)
    .slice(0, SIMILAR_LIST_COUNT);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList films={similarFilms}/>
    </section>
  );
}

export default SimilarFilms;
