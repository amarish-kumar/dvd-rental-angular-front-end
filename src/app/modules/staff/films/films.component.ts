import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service';

@Component({
  selector: 'dvd-Films',
  template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>Films</h1>
            <dvd-app-grid [limit]="_limit" [currentPage]="_page" (onInteract)="onInteraction($event)" [data]="_films"></dvd-app-grid>
        </div>
    </div>
  `,
  styles: []
})
export class FilmsComponent implements OnInit {

  private _films: any[] = null;
  private _limit:number = 15;
  private _page:number = 0;
  
  constructor(private _filmsServ: FilmsService) { }

  ngOnInit() {
    this.getAllFilms({ limit: this._limit, offset: this._page });
  }

  getAllFilms(data:{ limit: number, offset: number}){
    this._filmsServ.getAllFilms({ limit: data.limit, offset: data.offset }).subscribe((res) => {      
      this._films = res.data || [];
    });
  }

  onInteraction(dir:string){
    
    this._page = dir === "next" ? this._page + 15 : this._page - 15;
    this._page = Math.max(this._page, 0);

    this.getAllFilms({ limit: this._limit, offset: this._page });

  }

}
