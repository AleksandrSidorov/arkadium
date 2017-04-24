import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import api from './api';
import { getCachedLeaders } from './selectors';

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

export function* getLeaders(action) {
	const cachedLeaders = yield select(getCachedLeaders, action.game, action.period);
	if (cachedLeaders) {
		yield put(actions.getLeadersFromCache(cachedLeaders));
    yield put(actions.menuHide());
	} else {
		try {
			yield put(actions.fetchLeaders());
			const leaders = yield call(api.getUsersRating, action.game, action.period);
			yield leaders.sort((a, b) => b.score - a.score);
			yield put(actions.receiveLeaders(leaders, action.game, action.period));
      yield put(actions.menuHide());
		}
		catch (err) {
			yield put(actions.receiveLeadersFailed(err));
		}
	}
}

// Watchers
export function* watchGetGames() {
	yield takeEvery(actions.GAMES_FETCH_REQUESTED, getGames);
}

export function* watchGetLeaders() {
	yield takeEvery(actions.LEADERS_GET, getLeaders);
}

// Export Root Saga
export default function* rootSaga() {
	yield [
		fork(watchGetGames),
		fork(watchGetLeaders),
	]
}
