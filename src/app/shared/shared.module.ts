import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebardComponent } from './components/sidebard/sidebard.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListResultsComponent } from './components/list-results/list-results.component';

@NgModule({
  declarations: [SidebardComponent, SearchBoxComponent, ListResultsComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebardComponent, SearchBoxComponent, ListResultsComponent],
})
export class SharedModule {}
