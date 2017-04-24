import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.css';
import Menu from './Menu';
import PeriodMenu from './PeriodMenu';

import {
	menuToggle,
} from '../actions';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">Leaderboard</h1>
        <span
          className="header__hamburger"
          onClick={() => this.props.menuToggle()}
          >
            {this.props.menuIsVisible ? <div>X</div> : <img src="/img/menu-lines.png" />}
          </span>
          <PeriodMenu />
          <Menu />
        </div>
      )
  }
}

function mapStateToProps (state) {
	return {
		menuIsVisible: state.menu.menuIsVisible,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		menuToggle: () => dispatch(menuToggle())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
