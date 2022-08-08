import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import FilmsData from './mocks/films';
import PromoFilm from './mocks/promo-film';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App filmsData={FilmsData} promoFilm={PromoFilm} />
    </Provider>
  </React.StrictMode>,
);
