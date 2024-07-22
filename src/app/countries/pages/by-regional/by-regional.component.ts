import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countrie } from '../../interfaces/countries.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-regional',
  templateUrl: './by-regional.component.html',
})
export class ByRegionalComponent implements OnInit {
  public countrie: Countrie[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Europe',
    'Asia',
    'Oceania',
  ];
  public isLoading: boolean = false;
  public selectRegion?: Region;

  constructor(private countrieService: CountriesService) {}

  ngOnInit(): void {
    this.countrie = this.countrieService.cacheStorage.byregion.countrie;
    this.selectRegion = this.countrieService.cacheStorage.byregion.term;
  }

  public onValue(search: Region): void {
    this.selectRegion = search;

    this.isLoading = true;
    this.countrieService.searchRegion(search).subscribe((data) => {
      this.countrie = data;
      this.isLoading = false;
    });
  }
}
