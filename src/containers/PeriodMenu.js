import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
	setCurrentPeriod,
} from '../actions';

import './PeriodMenu.css';

class PeriodMenu extends Component {
	render() {
		return (
			<div className="period-menu">
				<Link
          className={"period-menu__link" + (this.props.currentPeriod == 'today' ? " period-menu__link--active" : "")}
					to={`/${this.props.currentGame}/today`}
					onClick={() => this.props.setCurrentPeriod('today')}
				>
					Today
				</Link>
				<span className="period-menu__separator">{'|'}</span>
				<Link
          className={"period-menu__link" + (this.props.currentPeriod == 'week' ? " period-menu__link--active" : "")}
					to={`/${this.props.currentGame}/week`}
					onClick={() => this.props.setCurrentPeriod('week')}
				>
					This Week
				</Link>
				<span className="period-menu__separator">{'|'}</span>
				<Link
          className={"period-menu__link" + (this.props.currentPeriod == 'all' ? " period-menu__link--active" : "")}
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
    currentPeriod: state.leaders.currentPeriod,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setCurrentPeriod: (period) => dispatch(setCurrentPeriod(period))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PeriodMenu);
