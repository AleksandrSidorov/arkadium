import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	getLeaders
} from '../actions';

class LeaderBoard extends Component {

	componentDidMount() {
		this.props.getLeaders(this.props.currentGame, this.props.currentPeriod);
	}
	
	render() {
		return (
			<h3>This is the Leader Board</h3>
		)
	}
}

function mapStateToProps (state) {
	return {
		currentGame: state.games.currentGame,
		currentPeriod: state.leaders.currentPeriod,
		leaders: state.leaders.leaders,
		leadersFetching: state.leaders.leadersFetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getLeaders: (game, period) => dispatch(getLeaders(game, period))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);