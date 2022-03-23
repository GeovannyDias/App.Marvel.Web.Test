import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { Component01Component } from './components/component01/component01.component';
import { Component02Component } from './components/component02/component02.component';


@NgModule({
  declarations: [
    UserComponent,
    Component01Component,
    Component02Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
