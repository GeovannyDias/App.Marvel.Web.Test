import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { Component01Component } from './components/component01/component01.component';
import { Component02Component } from './components/component02/component02.component';


@NgModule({
  declarations: [
    Component01Component,
    Component02Component
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
