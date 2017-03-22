import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { FilmListingModule } from './film-listing/film-listing.module';

const HOME_ROUTES: Routes = [
	{path: "", component: HomeComponent}
];
const HOME_ROUTING: ModuleWithProviders = RouterModule.forChild(HOME_ROUTES);

@NgModule({
  imports: [
    CommonModule,    
    RouterModule,
    HOME_ROUTING,
    FilmListingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
