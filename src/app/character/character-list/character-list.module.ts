import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/components/shared.module';
import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    SharedModule,
    ScrollingModule,
    PortalModule,
  ],
})
export class CharacterListModule {}
