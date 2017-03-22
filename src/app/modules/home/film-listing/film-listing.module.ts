import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListingComponent } from './film-listing.component';
import { FilmListingService } from './film-listing.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilmListingComponent],
  exports:[FilmListingComponent],
  providers:[FilmListingService]
})
export class FilmListingModule { }
