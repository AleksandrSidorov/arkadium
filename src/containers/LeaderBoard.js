import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import './LeaderBoard.css';
import LeadersList from '../components/LeadersList';

import {
	getLeaders
} from '../actions';
import getCachedLeaders from '../selectors';

class LeaderBoard extends Component {
  componentDidMount() {
    this.props.getLeaders(this.props.currentGame, this.props.currentPeriod);
  }

	componentWillReceiveProps(nextProps) {
		if (nextProps.location != this.props.location) {
    //if (this.props.currentGame !== nextProps.currentGame || this.props.currentPeriod !== nextProps.currentPeriod) {
			this.props.getLeaders(nextProps.currentGame, nextProps.currentPeriod);
		}
	}

	render() {
		return (
      <div className="leaderboard-wrapper">
  			<Scrollbars>
  				<LeadersList leaders={this.props.leaders} />
  			</Scrollbars>
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
