import { Component, OnInit } from '@angular/core';
import { RentalsService } from './rentals.service';

@Component({
  selector: 'dvd-Rentals',
  template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>Rentals</h1>
            <dvd-app-grid [limit]="_limit" [currentPage]="_page" (onInteract)="onInteraction($event)" [data]="_rentals"></dvd-app-grid>
        </div>
    </div>
  `,
  styles: []
})
export class RentalsComponent implements OnInit {

  private _rentals: any[] = null;
  private _limit:number = 15;
  private _page:number = 0;
  
  constructor(private _rentalsServ: RentalsService) { }

  ngOnInit() {
    this.getAllRentals({ limit: this._limit, offset: this._page });
  }

  getAllRentals(data:{ limit: number, offset: number}){
    this._rentalsServ.getAllRentals({ limit: data.limit, offset: data.offset }).subscribe((res) => {      
      this._rentals = res.data || [];
    });
  }

  onInteraction(dir:string){
    
    this._page = dir === "next" ? this._page + 15 : this._page - 15;
    this._page = Math.max(this._page, 0);

    this.getAllRentals({ limit: this._limit, offset: this._page });

  }

}
