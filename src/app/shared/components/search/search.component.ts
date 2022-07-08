import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef | undefined;

  @Output() searchValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    fromEvent(this.input?.nativeElement, 'keyup')
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => {
          const value = this.input?.nativeElement.value;
          if (value && value?.length > 3) {
            this.searchValue.emit(value);
          }

          if (!value) {
            console.log('xx', value);
            this.searchValue.emit(value);
          }
        })
      )
      .subscribe();
  }

  search(value: string): void {
    if (value && value?.length > 3) {
      this.searchValue.emit(value);
    }
  }
}
