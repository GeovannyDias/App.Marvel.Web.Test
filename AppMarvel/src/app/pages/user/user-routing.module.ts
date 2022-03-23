import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './components/component01/component01.component';
import { Component02Component } from './components/component02/component02.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: "user-one", component: Component01Component },
      { path: "user-two/:id", component: Component02Component },
      { path: "**", redirectTo: "" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
