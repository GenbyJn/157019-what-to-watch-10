export const SIMILAR_LIST_COUNT = 4;
export const DEFAULT_GENRE = 'All genres';
export const MAX_COUNT_GENRES = 9;
export const FILMS_COUNT = 8;
export const BACKEND_URL = 'https://10.react.pages.academy/wtw';
export const AUTH_TOKEN_KEY_NAME = 'xcvxcvxcv';
export const REQUEST_TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 2000;
export const PREVIEW_TIMEOUT = 1000;
export const MAX_RATING = 10;
export const DEFAULT_RATING = 0;
export enum CommentLength {
  Min = 50,
  Max = 400,
}

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Score {
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10,
}

export enum TabName {
  Overview = 'OVERVIEW',
  Details = 'DETAILS',
  Reviews = 'REVIEWS'
}

export const RouteName = {
  Main: '/',
  Genre: {
    path: '/genre/:genreName',
    name: 'genre'
  },
  SignIn: '/login',
  MyList: '/mylist',
  Film: {
    path: '/films/:id',
    name: 'films'
  },
  Player: {
    path: '/player/:id',
    name: 'player'
  },
  AddReview: {
    path: '/films/:id/review',
    name: 'films'
  },
  NotFound: '*',
};

export enum APIRoute {
  Main = '/',
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum NameSpace {
  Auth = 'AUTH',
  Promo = 'PROMO',
  Films = 'FILMS',
  Film = 'FILM',
  Favorite = 'FAVORITE',
  Comments = 'COMMENTS',
  Player = 'PLAYER',
}

export enum PlayType {
  Film = 'FILM',
  Promo = 'PROMO',
  Unknown = 'UNKNOWN',
}

export enum ErrorMessage {
  SignInValidate = 'Check your username and password .',
  IncorrectEmail = 'Check your email address',
  ServerError = 'Server error'
}
