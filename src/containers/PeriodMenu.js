import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PeriodMenu extends Component {
	render() {
		return (
			<div>
				<h3>Period Menu</h3>
				<ul>
					<li><Link
						to={`/${this.props.currentGame}/today`}
						onClick={() => this.props.getLeaders(this.props.currentGame, 'today')}
					>
						Today
					</Link></li>
					<li><Link
						to={`/${this.props.currentGame}/week`}
						onClick={() => this.props.getLeaders(this.props.currentGame, 'week')}
					>
						Week
					</Link></li>
					<li><Link
						to={`/${this.props.currentGame}/all`}
						onClick={() => this.props.getLeaders(this.props.currentGame, 'all')}
					>
						All time
					</Link></li>
				</ul>
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
		getLeaders: () => dispatch(getLeaders(game, period))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PeriodMenu);