import { takeEvery, put, call } from "redux-saga/effects";
import { FETCH_BEERS, REQUEST_BEERS } from "./types";
import { Beers } from "../interfaces";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_BEERS, sagaWorker);
}

function* sagaWorker() {
  try {
    const payload: Beers[] = yield call(fetchPosts);
    yield put({ type: FETCH_BEERS, payload });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("Error");
  }
}

async function fetchPosts() {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  return await response.json();
}
