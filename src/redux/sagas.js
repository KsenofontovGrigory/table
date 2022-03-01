import {takeEvery, call, put} from 'redux-saga/effects'
import {FETCH_BEERS, REQUEST_BEERS} from "./types";
import {hideLoader, showLoader} from "./actions";

export function* sagaWatcher() {
    yield takeEvery( REQUEST_BEERS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchBeers)
        yield put({type: FETCH_BEERS, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put(hideLoader())
    }
}

async function fetchBeers() {
    const response = await fetch('https://api.punkapi.com/v2/beers')
    return await response.json()
}
