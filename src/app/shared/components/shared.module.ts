import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CardComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, SearchComponent, CardComponent],
})
export class SharedModule {}
