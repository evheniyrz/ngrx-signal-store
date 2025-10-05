import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent() {
            return import('./pages/welcome-page/welcome-page').then(p=> p.WelcomePage)
        },
    },
    {
        path: 'register',
        loadComponent() {
            return import('./pages/user-register/user-register-page').then(p => p.UserRegisterPage)
        },
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'register'
    }
];
