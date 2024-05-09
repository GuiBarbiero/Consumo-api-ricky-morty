import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRootComponent } from './pages/login/components/login-root/login-root.component';
import { HomeRootComponent } from './pages/home/components/home-root/home-root.component';
import { ListCharectersRootComponent } from './pages/list-characters/components/list-charecters-root/list-charecters-root.component';
import { CharactersDetailsComponent } from './pages/list-characters/components/characters-details/characters-details.component';
import { ListFavoritesRootComponent } from './pages/list-favorites/components/list-favorites-root/list-favorites-root.component';
import { ListEpisodesRootComponent } from './pages/list-episodes/list-episodes-root.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginRootComponent },
  {
    path: 'home',
    component: HomeRootComponent,
    canActivate: [AuthGuard], // Protect the home route
    children: [
      { path: 'list-characters', component: ListCharectersRootComponent },
      { path: 'characters-details/:id', component: CharactersDetailsComponent },
      { path: 'list-favorite', component: ListFavoritesRootComponent },
      { path: 'list-episodes', component: ListEpisodesRootComponent },
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
