import { combineReducers } from 'redux';
import {
	GAMES_FETCH_REQUESTED,
	GAMES_FETCH_RECEIVED,
	SET_CURRENT_GAME,
	LEADERS_GET,
	LEADERS_FETCH_REQUESTED,
	LEADERS_FETCH_RECEIVED,
	LEADERS_GET_FROM_CACHE,
	SET_CURRENT_PERIOD,
} from './actions';

const initialGamesState = {
	games: [],
	currentGame: "all",
	gamesFetching: false,
}

const initialLeadersState = {
	leaders: [],
	currentPeriod: "today",
	leadersFetching: false,
	gamesCache: {},
}

function games(state=initialGamesState, action) {
	switch(action.type) {
		case GAMES_FETCH_REQUESTED:
			return {
				...state,
				gamesFetching: true,
			}
		case GAMES_FETCH_RECEIVED:
			return {
				...state,
				games: action.games,
				gamesFetching: false,
			}
		case SET_CURRENT_GAME:
			return {
				...state,
				currentGame: action.game
			}
		default:
			return state;
	}
}

function byTime(state={}, action) {
	switch(action.type) {
		case LEADERS_FETCH_RECEIVED:
			return {
				...state,
				[action.period]: action.leaders
			}
	}
}

function leaders(state=initialLeadersState, action) {
	switch(action.type) {
		case LEADERS_FETCH_REQUESTED:
			return {
				...state,
				leadersFetching: true
			}
		case LEADERS_FETCH_RECEIVED:
			return {
				...state,
				leadersFetching: false,
				leaders: action.leaders,
				[action.game]: byTime(state[action.game], action)
			}
		case LEADERS_GET_FROM_CACHE:
			return {
				...state,
				leaders: action.leaders
			}
		case SET_CURRENT_PERIOD:
			return {
				...state,
				currentPeriod: action.period
			}
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	games,
	leaders
});

export default rootReducer;
