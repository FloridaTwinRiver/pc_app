import { Routes } from '@angular/router';
import { PrivacyGuard } from './guards/privacy-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/home/login/login.module').then((m) => m.LoginPageModule),
    canLoad: [PrivacyGuard],
  },
];
