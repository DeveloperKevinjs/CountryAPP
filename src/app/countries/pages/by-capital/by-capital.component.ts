import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countrie } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  public countries: Countrie[] = [];

  constructor(private countrieService: CountriesService) {}
  public onValue(search: string): void {
    this.countrieService
      .searchCapital(search)
      .subscribe((data) => (this.countries = data));
  }
}
