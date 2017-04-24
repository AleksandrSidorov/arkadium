import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GamesList from '../components/GamesList';

import {
	getGames,
	setCurrentGame,
} from '../actions';

import './Menu.css';

class Menu extends Component {

	componentDidMount() {
		if (this.props.games.length == 0) {
			console.log("Games list is empty. Let's load them from server")
			this.props.getGames();
		}
	}

	render () {
		return (
			<div
        className={"menu" + (this.props.menuIsVisible ? " menu--visible" : "")}
      >
				<GamesList
				  games={this.props.games}
          currentGame={this.props.currentGame}
          currentPeriod={this.props.currentPeriod}
				  handleCurrentGame={this.props.setCurrentGame} />
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		games: state.games.games,
    currentGame: state.games.currentGame,
    currentPeriod:state.leaders.currentPeriod,
		gamesFetching: state.games.gamesFetching,
    menuIsVisible: state.menu.menuIsVisible,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getGames: () => dispatch(getGames()),
		setCurrentGame: (game) => dispatch(setCurrentGame(game))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
