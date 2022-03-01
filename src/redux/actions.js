import {FETCH_BEERS, HIDE_LOADER, REQUEST_BEERS, SHOW_LOADER} from "./types";

export function fetchBeers() {
    return {
        type: FETCH_BEERS,
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function requestBeers() {
    return {
        type: REQUEST_BEERS
    }
}
