import { Component, OnInit } from '@angular/core';
import { ActorsService } from './actors.service';

@Component({
  selector: 'dvd-actors',
  template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>Actors</h1>
            <dvd-app-grid [limit]="_limit" [currentPage]="_page" (onInteract)="onInteraction($event)" [data]="_actors"></dvd-app-grid>
        </div>
    </div>
  `,
  styles: []
})
export class ActorsComponent implements OnInit {

  private _actors: any[] = null;
  private _limit:number = 15;
  private _page:number = 0;
  
  constructor(private _actorsServ: ActorsService) { }

  ngOnInit() {
    this.getAllActors({ limit: this._limit, offset: this._page });
  }

  getAllActors(data:{ limit: number, offset: number}){
    this._actorsServ.getAllActors({ limit: data.limit, offset: data.offset }).subscribe((res) => {      
      this._actors = res.data || [];
    });
  }

  onInteraction(dir:string){
    
    this._page = dir === "next" ? this._page + 15 : this._page - 15;
    this._page = Math.max(this._page, 0);

    this.getAllActors({ limit: this._limit, offset: this._page });

  }

}
