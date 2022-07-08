import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let inputEl: DebugElement;
  const keyUp = new KeyboardEvent('keyup');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#handleKeyUp', () => {
    it('should validate value', () => {
      const valueSearch = 'rick';

      inputEl.nativeElement.dispatchEvent(keyUp);
      fixture.detectChanges();

      inputEl.nativeElement.value = valueSearch;
      component.input.nativeElement.value = valueSearch;
      fixture.detectChanges();
      expect(inputEl.nativeElement.value).toEqual(valueSearch);
      expect(component.input.nativeElement.value).toEqual(valueSearch);
      expect(component.input.nativeElement.value.length).toBeGreaterThan(3);
    });
  });

  describe('#search', () => {
    it('should call search', () => {
      const valueSearch = 'rick';
      spyOn(component, 'search');
      component.search(valueSearch);
      expect(component.search).toHaveBeenCalledWith(valueSearch);
    });

    it('should validate if value is > 3', () => {
      const valueSearch = 'rick';
      component.search(valueSearch);
      expect(valueSearch.length).toBeGreaterThan(3);
    });
  });
});
