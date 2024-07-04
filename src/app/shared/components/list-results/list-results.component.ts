import { Component, Input } from '@angular/core';
import { Countrie } from '../../../countries/interfaces/countries.interface';

@Component({
  selector: 'shared-list-results',
  templateUrl: './list-results.component.html',
})
export class ListResultsComponent {
  @Input()
  public countriesI: Countrie[] = [];
  @Input()
  public title: string = '';
}
