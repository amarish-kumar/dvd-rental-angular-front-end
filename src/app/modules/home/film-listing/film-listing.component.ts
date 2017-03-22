import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvd-film-listing',
  templateUrl: './film-listing.component.html',
  styles: []
})
export class FilmListingComponent implements OnInit {

  private _filmsCatalog:any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
