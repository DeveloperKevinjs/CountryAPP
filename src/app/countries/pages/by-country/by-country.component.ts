import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countrie } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public countrie: Countrie[] = [];
  constructor(private countrieService: CountriesService) {}

  public onValue(search: string): void {
    this.countrieService.searchCountrie(search).subscribe((data) => {
      this.countrie = data;
    });
  }
}
