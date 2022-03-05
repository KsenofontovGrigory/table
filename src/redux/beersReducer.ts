import { CHANGE_BEERS, DELETE_BEERS, FETCH_BEERS } from "./types";
import { State, TypeAction } from "../interfaces";

const initialState = {
  beers: [],
  filterBeers: [],
  changeBeers: [],
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
        ...state,
        filterBeers: action.payload?.filter(() => {
          // eslint-disable-next-line no-console
          console.log(111);
        }),
      };
    case CHANGE_BEERS:
      return {
        ...state,
        changeBeers: action.payload?.filter(() => {
          // eslint-disable-next-line no-console
          console.log(222);
        }),
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
