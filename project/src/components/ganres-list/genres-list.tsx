import { useState } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/films-slice/films-slice';
import { selectGenres } from '../../store/films-slice/selectors';

import { DEFAULT_GENRE, FILMS_COUNT } from '../../utils/common';

type GenresListProps = {
  onChangeShowCount: (value: number) => void;
}

const GenresList = ({onChangeShowCount}: GenresListProps): JSX.Element => {
  const genres = useAppSelector(selectGenres);
  const dispatch = useAppDispatch();
  const [activeGenre, setActiveGenre] = useState(DEFAULT_GENRE);
  const genresTitles = [DEFAULT_GENRE, ...new Set(genres.map(( genre ) => genre))];

  useEffect(() => {
    dispatch(changeGenre(activeGenre));
    onChangeShowCount(FILMS_COUNT);
  });

  return (
    <ul className="catalog__genres-list">
      {( genresTitles ).map(( item ) =>
        (
          <li
            key={ item }
            className={ activeGenre === item ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
          >
            <a href="/#"
              className="catalog__genres-link"
              onClick={() => setActiveGenre(item)}
            >{ item }
            </a>
          </li>
        )
      )}
    </ul>
  );
};

export default GenresList;
