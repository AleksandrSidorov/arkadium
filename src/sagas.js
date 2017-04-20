import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import api from './api';

// Sagas
export function* getGames() {
	try {
		const games = yield call(api.getGames);
		yield put(actions.receiveGames(games)); 
	}
	catch (err) {
		yield put(actions.receiveGamesFailed(err));
	}
}

export function* getPeriod(action) {
	try {
		const leaders = yield call(api.getUsersRating, action.game, action.period);
		yield put(actions.receiveLeaders(leaders));
	}
	catch (err) {
		yield put(actions.receiveLeadersFailed(err));
	}
}

// Watchers
export function* watchGetGames() {
	yield takeEvery(actions.GAMES_FETCH_REQUESTED, getGames);
}

export function* watchGetPeriod() {
	yield takeEvery(actions.LEADERS_FETCH_REQUESTED, getPeriod);
}

// Export Root Saga
export default function* rootSaga() {
	yield [
		fork(watchGetGames),
		fork(watchGetPeriod),
	]
}