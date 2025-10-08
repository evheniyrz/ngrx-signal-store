import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent() {
            return import('./pages/welcome-page/welcome-page').then(p=> p.WelcomePage)
        },
    },
    {
        path: 'chat-room/:id',
        loadComponent() {
            return import('./pages/chat-room/chat-room').then(p => p.ChatRoom)
        },
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];
