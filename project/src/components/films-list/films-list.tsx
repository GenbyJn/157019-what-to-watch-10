import SmallFilmCard from '../small-film-card/small-film-card';
import { Film } from '../../types/film';
import { useState } from 'react';

type FilmsListProps = {
  filmsData: Film[];
}


const FilmsList = ({filmsData}: FilmsListProps): JSX.Element => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseOn = (id: number) =>
    setActiveCard(id);

  const handleMouseOut = () =>
    setActiveCard(null);
  return (
    <div className="catalog__films-list">
      {filmsData.map((film) =>
        (
          <SmallFilmCard
            key={film.id}
            film={film}
            activeCard={activeCard}
            onMouseEnter={handleMouseOn}
            onMouseLeave={handleMouseOut}
          />
        )
      )}
    </div>
  );
};

export default FilmsList;
