import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, map, of } from 'rxjs';
import { Countrie } from '../interfaces/countries.interface';
import { CacheStorage } from '../interfaces/cacheStorage.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private urlBase: string = 'https://restcountries.com/v3.1/';

  public cacheStorage: CacheStorage = {
    bycapital: { term: '', countrie: [] },
    bycountry: { term: '', countrie: [] },
    byregion: { term: '', countrie: [] },
  };

  constructor(private http: HttpClient) {}

  getCountryRequest(url: string): Observable<Countrie[]> {
    return this.http.get<Countrie[]>(url).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }

  searchCountryByCode(code: string): Observable<Countrie | null> {
    return this.http
      .get<Countrie[]>(`${this.urlBase}alpha/${code}`)
      .pipe(map((countries) => (countries.length > 0 ? countries[0] : null)))
      .pipe(
        catchError((error) => {
          console.log(error);
          return of(null);
        })
      );
  }

  searchCapital(namecapital: string): Observable<Countrie[]> {
    const url = `${this.urlBase}capital/${namecapital}`;
    return this.getCountryRequest(url).pipe(
      tap((data) => {
        this.cacheStorage.bycapital.countrie = data;
        this.cacheStorage.bycapital.term = namecapital;
      })
    );
  }
  searchCountrie(namecountrie: string): Observable<Countrie[]> {
    const url = `${this.urlBase}name/${namecountrie}`;
    return this.getCountryRequest(url).pipe(
      tap((data) => {
        this.cacheStorage.bycountry.countrie = data;
        this.cacheStorage.bycountry.term = namecountrie;
      })
    );
  }
  searchRegion(nameregion: Region): Observable<Countrie[]> {
    const url = `${this.urlBase}region/${nameregion}`;
    return this.getCountryRequest(url).pipe(
      tap((data) => {
        this.cacheStorage.byregion.countrie = data;
        this.cacheStorage.byregion.term = nameregion;
      })
    );
  }
}