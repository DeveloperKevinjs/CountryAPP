import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('inputSearch')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';
  @Input()
  public sizeBox: string = '';
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  public textSearchPerformed(): void {
    const newValue = this.tagInput.nativeElement.value;
    this.onValue.emit(newValue);
  }
}
