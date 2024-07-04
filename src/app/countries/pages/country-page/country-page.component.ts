import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Countrie } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  public country?: Countrie;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.countriesService.searchCountryByCode(params['id'])
        )
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');
        return (this.country = country);
        //return;
      });

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.countriesService.searchCountryByCode(id).subscribe((data) => {
    //     console.log({ data });
    //   });
    // });
  }
}
