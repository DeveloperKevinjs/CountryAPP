import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countrie } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-regional',
  templateUrl: './by-regional.component.html',
})
export class ByRegionalComponent {
  public countrie: Countrie[] = [];
  constructor(private countrieService: CountriesService) {}

  public onValue(search: string): void {
    this.countrieService.searchRegion(search).subscribe((data) => {
      this.countrie = data;
    });
  }
}
