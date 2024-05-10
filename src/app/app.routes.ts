import { Routes } from '@angular/router';
import { loginGuard } from './infraestructure/guards/login.guard';
import { dashboardGuard } from './infraestructure/guards/dashboard.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./infraestructure/views/login/login.component').then(m => m.LoginComponent),
        canActivate: [
            loginGuard
        ]
    },
    {
        path:'dashboard',
        loadComponent: () => import('./infraestructure/views/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [
            dashboardGuard  
        ],
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
