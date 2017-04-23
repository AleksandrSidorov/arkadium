import React from 'react';
import './Header.css';

import Menu from '../containers/Menu';
import PeriodMenu from '../containers/PeriodMenu';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Leaderboard</h1>
      <PeriodMenu />
      <Menu />
    </div>
	)
}

export default Header;
