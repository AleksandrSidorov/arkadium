import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import './App.css';
import Menu from './Menu';
import PeriodMenu from './PeriodMenu';
import LeaderBoard from './LeaderBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Home" titleTemplate="%s | Leader Board" />
        <h1>Leaderboard</h1>
        <Menu />
        <PeriodMenu />
        <Route exact={true} path="/" render={() => <h2>Select a game and period</h2>} />
        <Route path="/:game/:period" component={LeaderBoard} />
      </div>
    );
  }
}

export default App;
