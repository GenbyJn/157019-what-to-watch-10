import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import { DEFAULT_GENRE, FILMS_COUNT, MAX_COUNT_GENRES } from '../../utils/common';
import {selectActiveGenre, selectGenres} from '../../store/films-slice/selectors';
import {changeGenre} from '../../store/films-slice/films-slice';
import { useAppDispatch, useAppSelector } from '../../hooks';

type GenresListProps = {
  onChangeShowCount: (value: number) => void;
}

const GenresList = ({onChangeShowCount}: GenresListProps): JSX.Element => {
  const genres = useAppSelector(selectGenres);
  const {genreName} = useParams();
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(selectActiveGenre);

  const genresList = [DEFAULT_GENRE, ...genres];

  useEffect(() => {
    dispatch(changeGenre(genreName));
    onChangeShowCount(FILMS_COUNT);
  }, [genreName, dispatch, onChangeShowCount]);

  return (
    <ul className="catalog__genres-list">
      {
        genresList.map((genre) => (
          <li className={`
          catalog__genres-item  ${activeGenre === genre ? 'catalog__genres-item--active' : ''}
          `}
          key={genre}
          >
            <Link className="catalog__genres-link"
              to=''
              onClick={() => dispatch(changeGenre(genre))}
            >
              {genre}
            </Link>
          </li>
        )).slice(0, MAX_COUNT_GENRES)
      }
    </ul>
  );
};

export default GenresList;
