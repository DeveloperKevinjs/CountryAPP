import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionalComponent } from './pages/by-regional/by-regional.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalComponent,
  },
  {
    path: 'by-regional',
    component: ByRegionalComponent,
  },
  {
    path: 'by-country',
    component: ByCountryComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    path: '**',
    redirectTo: 'by-capital',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
