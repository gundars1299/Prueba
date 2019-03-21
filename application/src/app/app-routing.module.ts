import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// import { AuthComponent }   from './auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,  
    },
    {
        path: 'login/:id',
        component: ContentComponent,  
    }
];