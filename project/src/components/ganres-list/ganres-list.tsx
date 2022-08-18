import { useState } from 'react';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/action';
import { Film } from '../../types/film';
import { DEFAULT_GENRE } from '../../utils/common';

type GenresListProps = {
  FilmsData: Film[]
}

const GenresList = ({FilmsData}: GenresListProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [activeGenre, setActiveGenre] = useState(DEFAULT_GENRE);
  const genresTitle = [DEFAULT_GENRE, ...new Set(FilmsData.map(({ genre }) => genre))];

  useEffect(() => {
    dispatch(changeGenre(activeGenre));
  });

  return (
    <ul className="catalog__genres-list">
      {( genresTitle ).map(( item ) =>
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
