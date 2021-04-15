import React, { useContext } from 'react';

import { ACTIONS, AppContext } from '../context/AppContext';

import './Header.css';

const APP_INFO = {
  title: 'Todo Manager',
  subtitle: `Witch localStorage`,
}

const Header = () => {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    if(window.confirm('Are you sure to remove all todos?')) dispatch({ type: ACTIONS.REMOVE_ALL });
    else console.log('Operation has been canceled');
  };

  return (
    <div className='header'>
      <div className="header__container">
        <div className="header__text">
          <p className="header__title">{APP_INFO.title}</p>
          <p className="header__subtitle">{APP_INFO.subtitle}</p>
        </div>
        <div className="header__buttons">
          <button onClick={handleClick}>
            <i className="fas fa-eraser"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;