import { Component, OnInit } from '@angular/core';
import {FilmListingService } from './film-listing.service';

@Component({
  selector: 'dvd-film-listing',
  templateUrl: './film-listing.component.html',
  styles: []
})
export class FilmListingComponent implements OnInit {

  private _filmsCatalog:any[] = [];
  constructor(private _filmListingService:FilmListingService) { }

  ngOnInit() {    
    this._filmListingService.getFilmListing().subscribe((res)=>{
      this._filmsCatalog = res.data;
    });
  }

}
