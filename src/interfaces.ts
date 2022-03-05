interface Temp {
  value: number;
  unit: string;
}

interface MashTemps {
  temp: Temp;
  duration: number;
}

interface Amount {
  value: number;
  unit: string;
}

interface Malt {
  name: string;
  amount: Amount;
}

interface Hops {
  name: string;
  amount: Amount;
  add: string;
  attribute: string;
}

interface Volume {
  value: number;
  unit: string;
}

interface BoilVolume {
  value: number;
  unit: string;
}

interface Fermentation {
  temp: Temp;
}

interface Method {
  mash_temp: MashTemps[];
  fermentation: Fermentation;
  twist: null;
}

interface Ingredients {
  malt: Malt[];
  hops: Hops[];
  yeast: string;
}

export interface Beers {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface Rows {
  id: number;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  image_url: string;
  volume: number;
}

export interface PropsBeers {
  beers: Beers[];
}

export interface Props {
  fetchBeers: () => void;
  beers: PropsBeers;
}

export interface TypeAction {
  type: string;
  payload?: [];
}

export interface State {
  beers?: Beers[];
  filterBeers?: Beers[];
  changeBeers?: Beers[];
}
