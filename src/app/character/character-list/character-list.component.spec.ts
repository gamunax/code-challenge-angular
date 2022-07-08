import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterService } from '@shared/services/character.service';

import { Observable, of } from 'rxjs';
import { Character } from '../../shared/interfaces/character';
import { CharacterListComponent } from './character-list.component';

const mockCharacterResponse: Character = {
  info: {
    count: 1,
    pages: 1,
    next: '',
    prev: '',
  },
  results: [
    {
      id: 1,
      name: 'Rick',
      species: 'Human',
      gender: 'Male',
      image: 'image',
    },
  ],
};

const mockedCharacterService: {
  getAllCharacters: () => Observable<Character>;
  getCharacterByName: () => Observable<Character>;
} = {
  getAllCharacters: () => of(mockCharacterResponse),
  getCharacterByName: () => of(mockCharacterResponse),
};

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: CharacterService,
          useValue: mockedCharacterService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getSearchValue', () => {
    it('should call if detect a value', () => {
      const value = 'Rick';
      component.characterDataSource.searchValue = value;
      component.characterDataSource.getCharacterByName(value);
      component.getSearchValue(value);
      expect(component.characterDataSource.searchValue).toEqual(value);
    });
  });
});
