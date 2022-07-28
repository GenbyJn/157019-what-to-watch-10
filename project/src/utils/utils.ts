import { Score } from './common';


export const getScoreFilm = (rate: number) => {

  if (rate < Score.Normal) {
    return 'Bad';
  }
  if (rate >= Score.Normal || rate < Score.Good) {
    return 'Normal';
  }
  if (rate >= Score.Good || rate < Score.VeryGood) {
    return 'Good';
  }
  if (rate >= Score.VeryGood || rate < Score.Awesome) {
    return 'VeryGood';
  }
  if (rate === Score.Awesome) {
    return 'Awesome';
  }
  return '';
};
