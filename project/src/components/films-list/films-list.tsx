import SmallFilmCard from '../small-film-card/small-film-card';
import { Film } from '../../types/film';
import { useState } from 'react';
import ShowMore from '../show-more/show-more';

type FilmsListProps = {
  genreFilms: Film[]
  isShowButton: boolean
}

const FilmsList = ({genreFilms, isShowButton}: FilmsListProps): JSX.Element => {
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
      {isShowButton && <ShowMore />}
    </div>
  );
};

export default FilmsList;
