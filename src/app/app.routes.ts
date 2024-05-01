import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./infraestructure/views/login/login.component').then(m => m.LoginComponent)
    },
    {
        path:'dashboard',
        loadComponent: () => import('./infraestructure/views/dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {
                path: 'listar-ordenes',
                loadComponent: () => import('./infraestructure/views/list-order/list-order.component').then(m => m.ListOrderComponent)
            },
            {
                path: 'registrar-orden',
                loadComponent: () => import('./infraestructure/views/register-order/register-order.component').then(m => m.RegisterOrderComponent)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
