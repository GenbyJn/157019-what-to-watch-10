export type UserReview = {
  id: number;
  name: string;
}

export type Comment = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: UserReview;
}

export type NewComment = {
  filmId: number,
  comment: string;
  rating: number;
}

export type RouteType = {
  path: string;
  element: JSX.Element;
}

export type UserData = {
  id: number;
  avatarUrl: string;
  email: string;
  name: string;
  token: string;
};
