import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ]
})
export class SharedModule { }
