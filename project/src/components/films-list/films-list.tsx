import SmallFilmCard from '../small-film-card/small-film-card';
import { Film } from '../../types/film';
import { useState } from 'react';

type FilmsListProps = {
  films: Film[]
}

const FilmsList = ({films}: FilmsListProps): JSX.Element => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => setActiveCard(id);

  const handleMouseLeave = (): void => setActiveCard(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        (
          <SmallFilmCard
            key={film.id}
            film={film}
            activeCard={activeCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )
      )}
    </div>
  );
};

export default FilmsList;
