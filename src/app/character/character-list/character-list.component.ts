import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../shared/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.searchCharacters('rick').subscribe(console.log);
  }
}
