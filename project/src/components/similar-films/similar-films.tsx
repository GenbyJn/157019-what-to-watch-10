import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { selectSimilarFilms } from '../../store/film-slice/selectors';
import { SIMILAR_LIST_COUNT } from '../../utils/common';
import SmallFilmCard from '../small-film-card/small-film-card';

const SimilarFilms = ():JSX.Element => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const handleMouseEnter = (id: number) => setActiveCard(id);
  const handleMouseLeave = (): void => setActiveCard(null);
  const similarFilms = useAppSelector(selectSimilarFilms).slice(0, SIMILAR_LIST_COUNT);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {similarFilms.map((film) =>
          (
            <SmallFilmCard
              key={film.id}
              film={film}
              activeCard={activeCard}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          )
        ).slice(0, SIMILAR_LIST_COUNT)}
      </div>
    </section>
  );
};

export default SimilarFilms;
