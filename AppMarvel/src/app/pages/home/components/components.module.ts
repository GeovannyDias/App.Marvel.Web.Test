import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCharacterComponent } from './card-character/card-character.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

const myComponents = [
  CardCharacterComponent,
  SearchComponent,
]

@NgModule({
  declarations: [myComponents],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [myComponents]
})
export class ComponentsModule { }
