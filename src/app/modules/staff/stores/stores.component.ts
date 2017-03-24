import { Component, OnInit } from '@angular/core';
import { StoresService } from './stores.service';

@Component({
  selector: 'dvd-Stores',
  template: `
      <div class="row">
        <div class="col-lg-12">
            <h1></h1>
            <div class="panel panel-default" *ngFor="let item of _stores; let i=index">
                <div class="panel-heading">Store {{i+1}}</div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <h4>Manager</h4>                            
                            <form role="form" class="form">
                                <div class="form-group">
                                    <label for="fName">First Name</label>
                                    <input id="fName" [value]="item.staff.first_name" class="form-control"> 
                                </div>                                                            
                                <div class="form-group">
                                    <label for="lName">Last Name</label>
                                    <input id="lName" [value]="item.staff.last_name" class="form-control"> 
                                </div>                                                            
                                <div class="form-group">
                                    <label for="email">E-mail</label>
                                    <input id="email" [value]="item.staff.email" class="form-control"> 
                                </div>                                                            
                            </form>                                
                        </div>
                        <div class="col-lg-6">
                            <h4>Address</h4>                            
                            <form role="form" class="form">
                                <div class="form-group">
                                    <label for="address">Location</label>
                                    <input id="address" [value]="item.address.address" class="form-control"> 
                                </div>  
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input id="city" [value]="item.address.city.city" class="form-control"> 
                                </div>
                                <div class="form-group">
                                    <label for="country">Country</label>
                                    <input id="country" [value]="item.address.city.country.country" class="form-control"> 
                                </div>                                                            
                            </form>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: []
})
export class StoresComponent implements OnInit {

  private _stores: any[] = null;
  private _limit:number = 15;
  private _page:number = 0;
  
  constructor(private _storesServ: StoresService) { }

  ngOnInit() {
    this.getAllStores({ limit: this._limit, offset: this._page });
  }

  getAllStores(data:{ limit: number, offset: number}){
    this._storesServ.getAllStores({ limit: data.limit, offset: data.offset }).subscribe((res) => {      
      this._stores = res.data || [];
    });
  }

  onInteraction(dir:string){
    
    this._page = dir === "next" ? this._page + 15 : this._page - 15;
    this._page = Math.max(this._page, 0);

    this.getAllStores({ limit: this._limit, offset: this._page });

  }

}
