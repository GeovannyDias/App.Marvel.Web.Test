import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ComponentsModule } from './components/components.module';
import { DetailCharacterComponent } from './components/detail-character/detail-character.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailCharacterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule,
    ComponentsModule,
  ]
})
export class HomeModule { }
