import { CHANGE_BEERS, DELETE_BEERS, REQUEST_BEERS } from "./types";
import { Beers, TypeAction } from "../interfaces";

export const fetchBeers = (): TypeAction => {
  return {
    type: REQUEST_BEERS,
  };
};

export const removeBeers = (rowID: number) => {
  return {
    type: DELETE_BEERS,
    payload: rowID,
  };
};

export const changeBeers = (row: Beers) => {
  return {
    type: CHANGE_BEERS,
    payload: row,
  };
};
