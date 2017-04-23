import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
	setCurrentPeriod,
} from '../actions';

class PeriodMenu extends Component {
	render() {
		return (
			<div>
				<Link
					to={`/${this.props.currentGame}/today`}
					onClick={() => this.props.setCurrentPeriod('today')}
				>
					Today
				</Link>
				{' | '}
				<Link
					to={`/${this.props.currentGame}/week`}
					onClick={() => this.props.setCurrentPeriod('week')}
				>
					Week
				</Link>
				{' | '}
				<Link
					to={`/${this.props.currentGame}/all`}
					onClick={() => this.props.setCurrentPeriod('all')}
				>
					All time
				</Link>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		currentGame: state.games.currentGame,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setCurrentPeriod: (period) => dispatch(setCurrentPeriod(period))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PeriodMenu);
