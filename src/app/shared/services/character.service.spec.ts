import { HttpClient } from '@angular/common/http';
import { Character } from '@shared/interfaces/character';
import { of } from 'rxjs';
import { CharacterService } from './character.service';

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
describe('CharacterService', () => {
  let service: CharacterService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CharacterService(httpClientSpy);
  });

  describe('#getAllCharacters', () => {
    it('should make characters from server response', () => {
      httpClientSpy.get.and.returnValue(of(mockCharacterResponse));
      service.getAllCharacters().subscribe((res) => {
        expect(res).toEqual(mockCharacterResponse);
      });
    });
  });

  describe('#getCharacterByName', () => {
    it('should make characters from server response', () => {
      httpClientSpy.get.and.returnValue(of(mockCharacterResponse));
      service.getCharacterByName().subscribe((res) => {
        expect(res).toEqual(mockCharacterResponse);
      });
    });
  });
});
