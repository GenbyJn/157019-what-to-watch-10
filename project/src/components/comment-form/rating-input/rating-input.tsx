import { memo } from 'react';

type RatingInputProps = {
  score: number
  isSending: boolean
  onChangeRating: (value: string) => void
}

const RatingInput = (props: RatingInputProps): JSX.Element => {
  const {score, isSending, onChangeRating} = props;
  return (
    <>
      <input
        value={score}
        className="rating__input"
        id={`star-${score}`}
        type="radio"
        name="rating"
        onChange={(evt) => onChangeRating(evt.target.value)}
        disabled={isSending}
      />
      <label
        className="rating__label"
        htmlFor={`star-${score}`}
      >
        {`Rating ${score}`}
      </label>
    </>
  );
};

export default memo(RatingInput);
