import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { debounce, debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @ViewChild('inputSearch')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';
  @Input()
  public sizeBox: string = '';
  @Input()
  public nameSearchSave: string = '';
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(800))
      .subscribe((value) => {
        this.onValue.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  public textSearchPerformed(): void {
    const newValue = this.tagInput.nativeElement.value;
    this.onValue.emit(newValue);
  }

  public onKeyPress() {
    const newValue = this.tagInput.nativeElement.value;
    if (newValue.length === 0) return;
    this.debouncer.next(newValue);
  }
}
