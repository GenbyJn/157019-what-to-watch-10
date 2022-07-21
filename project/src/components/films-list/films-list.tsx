import SmallFilmCard from '../small-film-card/small-film-card';
import { Film } from '../../types/film';
import { useState } from 'react';

type FilmsListProps = {
  filmsData: Film[];
}


const FilmsList = ({filmsData}: FilmsListProps): JSX.Element => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleSetActive = (id: number) =>
    setActiveCard(id);

  const handleSetNoActive = () =>
    setActiveCard(null);
  return (
    <div className="catalog__films-list">
      {filmsData.map((film) =>
        (
          <SmallFilmCard
            key={film.id}
            film={film}
            activeCard={activeCard}
            onMouseEnter={handleSetActive}
            onMouseLeave={handleSetNoActive}
          />
        )
      )}
    </div>
  );
};

export default FilmsList;
