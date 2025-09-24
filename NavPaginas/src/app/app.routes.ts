import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'first-page',
    loadComponent: () => import('./first-page/first-page.page').then( m => m.FirstPagePage)
  },
  {
    path: 'second-page',
    loadComponent: () => import('./second-page/second-page.page').then( m => m.SecondPagePage)
  },
];
