import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
  selector: 'dvd-Customers',
  template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>Customers</h1>
            <dvd-app-grid [limit]="_limit" [currentPage]="_page" (onInteract)="onInteraction($event)" [data]="_customers"></dvd-app-grid>
        </div>
    </div>
  `,
  styles: []
})
export class CustomersComponent implements OnInit {

  private _customers: any[] = null;
  private _limit:number = 15;
  private _page:number = 0;
  
  constructor(private _customersServ: CustomersService) { }

  ngOnInit() {
    this.getAllCustomers({ limit: this._limit, offset: this._page });
  }

  getAllCustomers(data:{ limit: number, offset: number}){
    this._customersServ.getAllCustomers({ limit: data.limit, offset: data.offset }).subscribe((res) => {      
      this._customers = res.data || [];
    });
  }

  onInteraction(dir:string){
    
    this._page = dir === "next" ? this._page + 15 : this._page - 15;
    this._page = Math.max(this._page, 0);

    this.getAllCustomers({ limit: this._limit, offset: this._page });

  }

}
