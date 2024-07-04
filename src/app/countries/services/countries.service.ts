import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Countrie } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private urlBase: string = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) {}

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
    return this.http
      .get<Countrie[]>(`${this.urlBase}capital/${namecapital}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
  }
  searchCountrie(namecountrie: string): Observable<Countrie[]> {
    return this.http
      .get<Countrie[]>(`${this.urlBase}name/${namecountrie}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
  }
  searchRegion(nameregion: string): Observable<Countrie[]> {
    return this.http
      .get<Countrie[]>(`${this.urlBase}region/${nameregion}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
  }
}
