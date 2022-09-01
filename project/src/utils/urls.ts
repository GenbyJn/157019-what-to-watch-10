import { RouteName } from './common';

export const getFilmUrl = (id: string | number): string =>
  `/${RouteName.Film.name}/${id}`;

export const getPlayerUrl = (id: string | number): string =>
  `/${RouteName.Player.name}/${id}`;

export const getAddReviewUrl = (id: string | number): string =>
  `/${RouteName.AddReview.name}/${id}/review`;
