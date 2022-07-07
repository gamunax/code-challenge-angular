import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CharacterResults } from '../../shared/interfaces/character';
import { CharacterService } from '../../shared/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: CharacterResults[] = [];
  isLoading = false;
  value = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(): void {
    this.characterService.getAllCharacters().subscribe(({ results }) => {
      this.characters = results;
    });
  }

  getSearchValue(value: string): void {
    console.log(value);
    this.value = value;
    this.getCharacters(value);
  }

  getCharacters(value: string): void {
    this.isLoading = true;
    this.characterService
      .searchCharacters(value)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        ({ results }) => {
          this.characters = results;
        },
        () => {
          this.characters = [];
        }
      );
  }
}
