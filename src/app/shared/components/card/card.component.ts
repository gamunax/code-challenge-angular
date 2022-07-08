import { Component, Input, OnInit } from '@angular/core';
import { CharacterResults } from '../../interfaces/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() character!: CharacterResults;

  constructor() {}

  ngOnInit(): void {}
}
