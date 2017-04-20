import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GamesList from '../components/GamesList';

import {
	getGames,
	setCurrentGame,
} from '../actions';

class Menu extends Component {

	componentDidMount() {
		if (this.props.games.length == 0) {
			console.log("Games list is empty. Let's load them from server")
			this.props.getGames();
		}
	}

	render () {
		return (
			<div>
				<h2>Games menu</h2>
				<GamesList
				  games={this.props.games}
				  handleCurrentGame={this.props.setCurrentGame} />
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		games: state.games.games,
		gamesFetching: state.games.gamesFetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getGames: () => dispatch(getGames()),
		setCurrentGame: (game) => dispatch(setCurrentGame(game))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);