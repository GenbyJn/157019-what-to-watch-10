import { useState } from 'react';
import { Film } from '../../types/film';
import { SIMILAR_LIST_COUNT } from '../../utils/common';
import SmallFilmCard from '../small-film-card/small-film-card';

type SimilarFilmsProps = {
  similarFilms: Film[];
}

const SimilarFilms = ({similarFilms}: SimilarFilmsProps):JSX.Element => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const handleMouseOn = (id: number) => setActiveCard(id);
  const handleMouseOut = (): void => setActiveCard(null);

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
              onMouseEnter={handleMouseOn}
              onMouseLeave={handleMouseOut}
            />
          )
        ).slice(0, SIMILAR_LIST_COUNT)}
      </div>
    </section>
  );
};

export default SimilarFilms;
