import { Component, OnInit } from '@angular/core';
import { InventoriesService } from './inventory.service';

@Component({
  selector: 'dvd-Inventories',
  template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>Inventories</h1>
            <dvd-app-grid [limit]="_limit" [currentPage]="_page" (onInteract)="onInteraction($event)" [data]="_inventories"></dvd-app-grid>
        </div>
    </div>
  `,
  styles: []
})
export class InventoriesComponent implements OnInit {

  private _inventories: any[] = null;
  private _limit:number = 15;
  private _page:number = 0;
  
  constructor(private _inventoriesServ: InventoriesService) { }

  ngOnInit() {
    this.getAllInventories({ limit: this._limit, offset: this._page });
  }

  getAllInventories(data:{ limit: number, offset: number}){
    this._inventoriesServ.getAllInventories({ limit: data.limit, offset: data.offset }).subscribe((res) => {      
      this._inventories = res.data || [];
    });
  }

  onInteraction(dir:string){
    
    this._page = dir === "next" ? this._page + 15 : this._page - 15;
    this._page = Math.max(this._page, 0);

    this.getAllInventories({ limit: this._limit, offset: this._page });

  }

}
