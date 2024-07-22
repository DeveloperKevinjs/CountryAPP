import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countrie } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent implements OnInit {
  public countrie: Countrie[] = [];
  public nameSearchSave: string = '';
  constructor(private countrieService: CountriesService) {}

  ngOnInit(): void {
    this.countrie = this.countrieService.cacheStorage.bycountry.countrie;
    this.nameSearchSave = this.countrieService.cacheStorage.bycountry.term;
  }

  public onValue(search: string): void {
    this.countrieService.searchCountrie(search).subscribe((data) => {
      this.countrie = data;
    });
  }
}
