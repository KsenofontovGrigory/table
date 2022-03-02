import {HIDE_LOADER, REQUEST_BEERS, SHOW_LOADER} from './types'

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

export function fetchBeers() {
  return {
    type: REQUEST_BEERS
  }
}
