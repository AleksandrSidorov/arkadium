export const GAMES_FETCH_REQUESTED = 'GAMES_FETCH_REQUESTED';
export const GAMES_FETCH_RECEIVED = 'GAMES_FETCH_RECEIVED';
export const SET_CURRENT_GAME = 'SET_CURRENT_GAME';

export const LEADERS_GET = 'LEADERS_GET';
export const LEADERS_FETCH_REQUESTED = 'LEADERS_FETCH_REQUESTED';
export const LEADERS_FETCH_RECEIVED = 'LEADERS_FETCH_RECEIVED';
export const LEADERS_FETCH_FAILED = 'LEADERS_FETCH_FAILED';
export const LEADERS_GET_FROM_CACHE = 'LEADERS_GET_FROM_CACHE';
export const SET_CURRENT_PERIOD = 'SET_CURRENT_PERIOD';

// Games List Actions
export function getGames() {
	return {
		type: GAMES_FETCH_REQUESTED
	}
}

export function receiveGames(games) {
	return {
		type: GAMES_FETCH_RECEIVED,
		games
	}
}

export function setCurrentGame(game) {
	return {
		type: SET_CURRENT_GAME,
		game
	}
}

// Leaders Actions
export function setCurrentPeriod(period) {
	return {
		type: SET_CURRENT_PERIOD,
		period
	}
}

export function getLeaders(game='all', period='all') {
	return {
		type: LEADERS_GET,
		game,
		period
	}
}

export function fetchLeaders() {
	return {
		type: LEADERS_FETCH_REQUESTED,
	}
}


export function receiveLeaders(leaders, game, period) {
	return {
		type: LEADERS_FETCH_RECEIVED,
		leaders,
		game,
		period
	}
}

export function getLeadersFromCache(leaders) {
	return {
		type: LEADERS_GET_FROM_CACHE,
		leaders
	}
}

export function receiveLeadersFails() {
	return {
		type: LEADERS_FETCH_FAILED,
	}
}
