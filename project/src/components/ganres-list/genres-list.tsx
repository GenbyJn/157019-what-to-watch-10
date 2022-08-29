import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import classNames from 'classnames';

import {FILMS_COUNT, MAX_COUNT_GENRES, RouteName} from '../../utils/common';
import {selectGenres} from '../../store/films-slice/selectors';
import {changeGenre} from '../../store/films-slice/films-slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenreUrl } from '../../utils/urls';

type GenreMenuProps = {
  onChangeShowCount: (value: number) => void;
}

const GenresList = ({onChangeShowCount}: GenreMenuProps): JSX.Element => {
  const genres = useAppSelector(selectGenres);
  const {genreName} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeGenre(genreName));
    onChangeShowCount(FILMS_COUNT);
  }, [genreName, dispatch, onChangeShowCount]);

  return (
    <ul className="catalog__genres-list">
      <li className={classNames(
        'catalog__genres-item',
        {'catalog__genres-item--active': !genreName}
      )}
      >
        <Link className="catalog__genres-link"
          to={RouteName.Main}
        >
          All genres
        </Link>
      </li>
      {
        genres.map((genre) => (
          <li className={classNames(
            'catalog__genres-item',
            {'catalog__genres-item--active': genreName === genre.toLowerCase()}
          )}
          key={genre}
          data-testid="genre"
          >
            <Link className="catalog__genres-link"
              to={getGenreUrl(genre)}
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
