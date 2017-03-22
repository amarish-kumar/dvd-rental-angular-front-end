import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListingComponent } from './film-listing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilmListingComponent],
  exports:[FilmListingComponent]
})
export class FilmListingModule { }
