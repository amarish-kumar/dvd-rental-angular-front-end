import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvd-home',
  template: `
    <dvd-film-listing></dvd-film-listing>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
