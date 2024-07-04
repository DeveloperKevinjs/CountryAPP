import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-routing.module';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionalComponent } from './pages/by-regional/by-regional.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionalComponent,
    CountryPageComponent,
  ],
  imports: [CommonModule, CountryRoutingModule, SharedModule],
})
export class CountriesModule {}
