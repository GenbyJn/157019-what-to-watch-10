import SmallFilmCard from '../small-film-card/small-film-card';
import { Film } from '../../types/film';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

type FilmsListProps = {
  genreFilms: Film[];
}

const FilmsList = ({genreFilms}: FilmsListProps): JSX.Element => {
  const genre = useAppSelector((state) => state.genre);
  // eslint-disable-next-line no-console
  console.log(genre);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseOn = (id: number) => setActiveCard(id);

  const handleMouseOut = (): void => setActiveCard(null);

  return (
    <div className="catalog__films-list">
      {genreFilms.map((film) =>
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
