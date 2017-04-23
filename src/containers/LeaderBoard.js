import React, { Component } from 'react';
import { connect } from 'react-redux';

import LeadersList from '../components/LeadersList';

import {
	getLeaders
} from '../actions';
import getCachedLeaders from '../selectors';

class LeaderBoard extends Component {

	componentWillReceiveProps(nextProps) {
		if (nextProps.location != this.props.location) {
			this.props.getLeaders(nextProps.currentGame, nextProps.currentPeriod);
		}
	}

	render() {
		return (
			<div>
				<LeadersList leaders={this.props.leaders} />
			</div>
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
