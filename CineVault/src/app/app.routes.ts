import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home';
import { Detail } from './views/detail/detail';
import { Favorites } from './views/favorites/favorites';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: Detail },
  { path: 'favorites', component: Favorites },
  { path: '**', redirectTo: '' }
];