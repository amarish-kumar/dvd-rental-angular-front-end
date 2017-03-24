import { Component, OnInit } from '@angular/core';
import { PaymentsService } from './payments.service';

@Component({
  selector: 'dvd-Payments',
  template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>Payments</h1>
            <dvd-app-grid [limit]="_limit" [currentPage]="_page" (onInteract)="onInteraction($event)" [data]="_payments"></dvd-app-grid>
        </div>
    </div>
  `,
  styles: []
})
export class PaymentsComponent implements OnInit {

  private _payments: any[] = null;
  private _limit:number = 15;
  private _page:number = 0;
  
  constructor(private _paymentsServ: PaymentsService) { }

  ngOnInit() {
    this.getAllPayments({ limit: this._limit, offset: this._page });
  }

  getAllPayments(data:{ limit: number, offset: number}){
    this._paymentsServ.getAllPayments({ limit: data.limit, offset: data.offset }).subscribe((res) => {      
      this._payments = res.data || [];
    });
  }

  onInteraction(dir:string){
    
    this._page = dir === "next" ? this._page + 15 : this._page - 15;
    this._page = Math.max(this._page, 0);

    this.getAllPayments({ limit: this._limit, offset: this._page });

  }

}
