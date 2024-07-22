import { CommonModule } from '@angular/common';
import { ListResultsComponent } from './components/list-results/list-results.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebardComponent } from './components/sidebard/sidebard.component';

@NgModule({
  declarations: [
    ListResultsComponent,
    LoaderComponent,
    SearchBoxComponent,
    SidebardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ListResultsComponent,
    LoaderComponent,
    SearchBoxComponent,
    SidebardComponent,
  ],
})
export class SharedModule {}
