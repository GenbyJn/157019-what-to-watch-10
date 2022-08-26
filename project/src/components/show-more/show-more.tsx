import { FILMS_COUNT } from '../../utils/common';

type ShowMoreProps = {
  showCount: number;
  onChangeShowCount: (count: number) => void;
}


const ShowMore = (props: ShowMoreProps): JSX.Element => {
  const { showCount, onChangeShowCount } = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button"
        type="button"
        onClick={() => onChangeShowCount(showCount + FILMS_COUNT)}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
