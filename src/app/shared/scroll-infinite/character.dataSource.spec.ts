import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { CharacterResults } from '@shared/interfaces/character';
import { BehaviorSubject, Observable } from 'rxjs';

class CharacterDataSource extends DataSource<CharacterResults> {
  currentPage = 0;
  characterChange$ = new BehaviorSubject<CharacterResults[]>([]);

  connect(
    collectionViewer: CollectionViewer
  ): Observable<CharacterResults[] | readonly CharacterResults[]> {
    return this.characterChange$;
  }
  disconnect(): void {
    throw new Error('Method not implemented.');
  }

  getCharactersAll(currentPate: number): void {
    throw new Error('Method not implemented.');
  }

  getCharacterByName(value: string, currentPage: number): void {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super();
  }
}

describe('#CharacterDataSource', () => {
  let myClass: CharacterDataSource;
  let collectionViewer: CollectionViewer;

  beforeEach(() => {
    myClass = new CharacterDataSource();
  });

  describe('#connect', () => {
    it('should call connect', () => {
      spyOn(myClass, 'connect');
      myClass.connect(collectionViewer);
      expect(myClass.connect).toHaveBeenCalledWith(collectionViewer);
    });
  });

  describe('#disconnect', () => {
    it('should call disconnect', () => {
      spyOn(myClass, 'disconnect');
      myClass.disconnect();
      expect(myClass.disconnect).toHaveBeenCalled();
    });
  });

  describe('#getCharactersAll', () => {
    it('should call getCharactersAll', () => {
      spyOn(myClass, 'getCharactersAll');
      myClass.getCharactersAll(1);
      expect(myClass.getCharactersAll).toHaveBeenCalledWith(1);
    });
  });

  describe('#getCharacterByName', () => {
    it('should call getCharacterByName', () => {
      spyOn(myClass, 'getCharacterByName');
      myClass.getCharacterByName('rick', 1);
      expect(myClass.getCharacterByName).toHaveBeenCalledWith('rick', 1);
    });
  });
});
