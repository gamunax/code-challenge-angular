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
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input!: ElementRef;

  @Output() searchValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.handleKeyUp();
  }

  handleKeyUp(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((res) => {
        const value = this.input.nativeElement.value;
        if (value && value?.length > 3) {
          this.searchValue.emit(value);
        }

        if (!value) {
          this.searchValue.emit(value);
        }
      });
  }

  search(value: string): void {
    if (value && value?.length > 3) {
      this.searchValue.emit(value);
    }
  }
}
