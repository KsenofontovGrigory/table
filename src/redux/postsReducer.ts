import {FETCH_BEERS} from './types'

const initialState = {
  beers: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS:
      return { ...state, beers: action.payload }
    default: return state
  }
}
