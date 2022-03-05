import { CHANGE_BEERS, DELETE_BEERS, REQUEST_BEERS } from "./types";
import { Beers, TypeAction } from "../interfaces";

export const fetchBeers = (): TypeAction => {
  return {
    type: REQUEST_BEERS,
  };
};

export const removeBeers = (beers: Beers[]) => {
  return {
    type: DELETE_BEERS,
    payload: beers,
  };
};

export const changeBeers = (beers: Beers[]) => {
  return {
    type: CHANGE_BEERS,
    payload: beers,
  };
};
