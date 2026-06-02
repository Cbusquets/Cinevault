import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home';
import { DetailComponent } from './views/detail/detail';
import { Favorites } from './views/favorites/favorites';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'favorites', component: Favorites },
    { path: '**', redirectTo: '' }
];