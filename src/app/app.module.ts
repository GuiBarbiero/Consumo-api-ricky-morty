import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRootComponent } from './pages/login/components/login-root/login-root.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeRootComponent } from './pages/home/components/home-root/home-root.component';
import { ListCharectersRootComponent } from './pages/list-characters/components/list-charecters-root/list-charecters-root.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardSkeletonRootComponent } from './shared/skeletons/card-skeleton/components/card-skeleton-root/card-skeleton-root.component';
import { CardMenuComponent } from './shared/cards/card-menu/components/card-menu/card-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharactersDetailsComponent } from './pages/list-characters/components/characters-details/characters-details.component';
import { ListFavoritesRootComponent } from './pages/list-favorites/components/list-favorites-root/list-favorites-root.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ListEpisodesRootComponent } from './pages/list-episodes/list-episodes-root.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginRootComponent,
    LoginFormComponent,
    HomeRootComponent,
    ListCharectersRootComponent,
    ListEpisodesRootComponent,
    CardSkeletonRootComponent,
    CardMenuComponent,
    CharactersDetailsComponent,
    ListFavoritesRootComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxSkeletonLoaderModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }


