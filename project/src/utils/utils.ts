import { Score } from './common';

export function getRunTimeFromMins(value: number) {
  const hours = Math.trunc(value / 60);
  const minutes = value % 60;
  return `${ hours }h ${ minutes }m`;
}

export const getScoreFilm = (rate: number) => {

  if (rate < Score.Normal) {
    return 'Bad';
  }
  if (rate >= Score.Normal && rate < Score.Good) {
    return 'Normal';
  }
  if (rate >= Score.Good && rate < Score.VeryGood) {
    return 'Good';
  }
  if (rate >= Score.VeryGood && rate < Score.Awesome) {
    return 'VeryGood';
  }
  if (rate === Score.Awesome) {
    return 'Awesome';
  }
  return '';
};
