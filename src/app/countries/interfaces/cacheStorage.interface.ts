import { Countrie } from './countries.interface';
import { Region } from './region.type';
export interface CacheStorage {
  bycapital: TermiCountry;
  bycountry: TermiCountry;
  byregion: RegionCountry;
}
export interface TermiCountry {
  term: string;
  countrie: Countrie[];
}

export interface RegionCountry {
  term: Region;
  countrie: Countrie[];
}
