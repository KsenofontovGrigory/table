import { CHANGE_BEERS, DELETE_BEERS, FETCH_BEERS } from "./types";
import { Beers, State, TypeAction } from '../interfaces';

const initialState = {
  beers: [],
};

export const beersReducer = (
  state = initialState,
  action: TypeAction
): State => {
  switch (action.type) {
    case FETCH_BEERS:
      return { ...state, beers: action.payload };
    case DELETE_BEERS:
      return {
        ...state, beers: state.beers?.filter((item: any) => {
          if (item.id !== action.payload) {
            return item;
          }
        }),
      };
    case CHANGE_BEERS:
      return {
        ...state, beers: state.beers?.map((item: any) => {
          // @ts-ignore
          if (item.id === action.payload.id) {
            return action.payload
          }
          return item
        })
      };
    default:
      return state;
  }
  // if (action.type === FETCH_BEERS) {
  //   return { ...state, beers: action.payload };
  // } else if (action.type === DELETE_BEERS) {
  //   const sortedBeers = action.payload?.filter((item: any) => {
  //     // eslint-disable-next-line no-console
  //     console.log(111);
  //   });
  //   return { ...state, sortedBeers };
  // } else if (action.type === CHANGE_BEERS) {
  //   // eslint-disable-next-line no-console
  //   console.log(222);
  // } else {
  //   return state;
  // }
};
