import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import React, { useState } from 'react';
import { TabNames } from '../../utils/common';
import { Film } from '../../types/film';

type TabMenuProps = {
  currentFilm: Film
}

const TabMenu = ({currentFilm}: TabMenuProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(TabNames.Overview);

  const showTabContent = () => {
    if (activeTab === TabNames.Overview){
      return (
        <FilmOverview currentFilm={currentFilm}/>);
    }
    if (activeTab === TabNames.Details){
      return (
        <FilmDetails currentFilm={currentFilm}/>);
    }
    if (activeTab === TabNames.Reviews){
      return <FilmReviews />;
    }
  };
  // eslint-disable-next-line no-console
  console.log(activeTab);
  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === TabNames.Overview ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <div onClick={()=> setActiveTab(TabNames.Overview)} className="film-nav__link" style={{cursor: 'pointer'}}>Overview</div>
          </li>
          <li className={activeTab === TabNames.Details ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <div onClick={()=> setActiveTab(TabNames.Details)} className="film-nav__link" style={{cursor: 'pointer'}}>Details</div>
          </li>
          <li className={activeTab === TabNames.Reviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <div onClick={()=> setActiveTab(TabNames.Reviews)} className="film-nav__link" style={{cursor: 'pointer'}}>Reviews</div>
          </li>
        </ul>
      </nav>
      {showTabContent()}
    </>
  );
};

export default TabMenu;


