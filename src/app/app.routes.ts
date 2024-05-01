import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./infraestructure/views/login/login.component').then(m => m.LoginComponent)
    },
    {
        path:'dashboard',
        loadComponent: () => import('./infraestructure/views/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
