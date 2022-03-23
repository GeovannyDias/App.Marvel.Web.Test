import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Page404Component } from './shared/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: "about",
    // canActivate: [AuthGuard],
    // canLoad: [AuthGuard],
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
