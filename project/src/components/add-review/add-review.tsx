import { useState } from 'react';
import Rating from '../rating/rating';

const AddReview = (): JSX.Element => {

  const [comment, setComment] = useState<string>('');

  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <Rating />

        <div className="add-review__text">
          <textarea
            value={comment}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={(evt) => setComment(evt.target.value)}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};
export default AddReview;
