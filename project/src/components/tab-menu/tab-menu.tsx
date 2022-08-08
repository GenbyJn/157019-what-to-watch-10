import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import { useState } from 'react';
import { TabName } from '../../utils/common';
import { Film } from '../../types/film';

type TabMenuProps = {
  currentFilm: Film
}

const TabMenu = ({currentFilm}: TabMenuProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(TabName.Overview);

  const renderTabContent = () => {
    if (activeTab === TabName.Overview){
      return (
        <FilmOverview currentFilm={currentFilm}/>);
    }
    if (activeTab === TabName.Details){
      return (
        <FilmDetails currentFilm={currentFilm}/>);
    }
    if (activeTab === TabName.Reviews){
      return <FilmReviews />;
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === TabName.Overview ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <div onClick={()=> setActiveTab(TabName.Overview)} className="film-nav__link" style={{cursor: 'pointer'}}>Overview</div>
          </li>
          <li className={activeTab === TabName.Details ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <div onClick={()=> setActiveTab(TabName.Details)} className="film-nav__link" style={{cursor: 'pointer'}}>Details</div>
          </li>
          <li className={activeTab === TabName.Reviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <div onClick={()=> setActiveTab(TabName.Reviews)} className="film-nav__link" style={{cursor: 'pointer'}}>Reviews</div>
          </li>
        </ul>
      </nav>
      {renderTabContent()}
    </>
  );
};

export default TabMenu;


