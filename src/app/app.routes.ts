import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-page.component'),
  },
  {
    path: 'basic-plan',
    loadComponent: () => import('./pages/basic-plan/basic-plan-page.component'),
  },
  {
    path: '**',
    redirectTo: 'pricing',
  },
];
