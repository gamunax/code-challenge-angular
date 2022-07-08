import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CharacterResults } from '../interfaces/character';
import { CharacterService } from '../services/character.service';

export class CharacterDataSource extends DataSource<CharacterResults> {
  private characterChange$ = new BehaviorSubject<CharacterResults[]>([]);
  private unsubscribe$: Subject<boolean> = new Subject();
  private pageSize = 20;
  private lastCurrentPage = 0;
  private currentPage = 0;
  private isConstructor = false;
  public dataCharacterAll: CharacterResults[] = [];
  public searchValue = '';

  constructor(private characterService: CharacterService) {
    super();
    this.isConstructor = true;
    this.getCharactersAll();
  }

  connect(collectionViewer: CollectionViewer): Observable<CharacterResults[]> {
    collectionViewer.viewChange
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((range) => {
        console.log(range);
        this.currentPage = Math.floor(range.end / this.pageSize) + 1;
        if (this.currentPage > this.lastCurrentPage) {
          this.lastCurrentPage = this.currentPage;

          if (this.isConstructor) {
            this.isConstructor = false;
            return;
          }

          if (this.searchValue) {
            this.getCharacterByName(this.searchValue, this.currentPage);
            return;
          }

          this.getCharactersAll(this.currentPage);
        }
      });
    return this.characterChange$;
  }

  getCharactersAll(currentPage = 1): void {
    this.characterService
      .getAllCharacters(currentPage)
      .subscribe(({ results }) => {
        if (currentPage === 1) {
          this.dataCharacterAll = results;
        } else {
          this.dataCharacterAll = [...this.dataCharacterAll, ...results];
        }
        this.characterChange$.next(this.dataCharacterAll);
      });
  }

  getCharacterByName(value: string, currentPage = 1): void {
    if (!value) {
      this.getCharactersAll();
      return;
    }

    this.characterService.getCharacterByName(value, currentPage).subscribe(
      ({ results }) => {
        if (currentPage === 1) {
          this.dataCharacterAll = results;
        } else {
          this.dataCharacterAll = [...this.dataCharacterAll, ...results];
        }
        this.characterChange$.next(this.dataCharacterAll);
      },
      () => {
        this.characterChange$.next([]);
        this.dataCharacterAll = [];
      }
    );
  }

  disconnect(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
