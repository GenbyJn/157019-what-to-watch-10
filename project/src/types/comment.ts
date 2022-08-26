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
