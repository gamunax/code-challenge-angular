import { Component, OnInit } from '@angular/core';
import { CharacterResults } from '../../shared/interfaces/character';
import { CharacterDataSource } from '../../shared/scroll-infinit/character.dataSource';
import { CharacterService } from '../../shared/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: CharacterResults[] = [];
  characterDataSource!: CharacterDataSource;

  constructor(private characterService: CharacterService) {
    this.characterDataSource = new CharacterDataSource(this.characterService);
  }

  ngOnInit(): void {}

  getSearchValue(value: string): void {
    this.characterDataSource.searchValue = value;
    this.characterDataSource.getCharacterByName(value);
  }
}
