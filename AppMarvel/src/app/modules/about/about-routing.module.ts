import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './components/component01/component01.component';
import { Component02Component } from './components/component02/component02.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "one", component: Component01Component },
      { path: "two", component: Component02Component },
      { path: "**", redirectTo: "one" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
