import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countrie } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent implements OnInit {
  public countries: Countrie[] = [];
  public isLoading: boolean = false;
  public nameSearchSave: string = '';

  constructor(private countrieService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countrieService.cacheStorage.bycapital.countrie;
    this.nameSearchSave = this.countrieService.cacheStorage.bycapital.term;
  }
  public onValue(search: string): void {
    this.isLoading = true;
    this.countrieService.searchCapital(search).subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
    });
  }
}
