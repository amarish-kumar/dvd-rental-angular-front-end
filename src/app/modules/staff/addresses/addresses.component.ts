import { Component, OnInit } from '@angular/core';
import { AddressesService } from './addresses.service';

@Component({
  selector: 'dvd-Addresses',
  template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>Addresses</h1>
            <dvd-app-grid [limit]="_limit" [currentPage]="_page" (onInteract)="onInteraction($event)" [data]="_addresses"></dvd-app-grid>
        </div>
    </div>
  `,
  styles: []
})
export class AddressesComponent implements OnInit {

  private _addresses: any[] = null;
  private _limit:number = 15;
  private _page:number = 0;
  
  constructor(private _addressesServ: AddressesService) { }

  ngOnInit() {
    this.getAllAddresses({ limit: this._limit, offset: this._page });
  }

  getAllAddresses(data:{ limit: number, offset: number}){
    this._addressesServ.getAllAddresses({ limit: data.limit, offset: data.offset }).subscribe((res) => {      
      this._addresses = res.data || [];
    });
  }

  onInteraction(dir:string){
    
    this._page = dir === "next" ? this._page + 15 : this._page - 15;
    this._page = Math.max(this._page, 0);

    this.getAllAddresses({ limit: this._limit, offset: this._page });

  }

}
