import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [CommonModule, CharacterListRoutingModule, SharedModule],
})
export class CharacterListModule {}