import { Injectable } from '@angular/core';
import { HttpProxy } from '../../../shared/http/http-proxy';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {

  constructor(private _http: HttpProxy) { }

  private getCustomerCount(): Observable<any[]> {
    return this._http.get("customer/count");
  }

  private getTotalPayments(): Observable<any[]> {
    return this._http.get("payment/sum");
  }

  private getTotalInventory(): Observable<any[]> {
    return this._http.get("inventory/count");
  }

  private getTotalLanguages(): Observable<any[]> {
    return this._http.get("language/count");
  }

  private getTopMovies(): Observable<any[]> {
    return this._http.get("topMoviesByRentals");
  }

  public getDashboardData(): Observable<any> {

    //IF YOU WANT ALL THE ITEMS AT ONCE
    //BUT THERE IS A CATCH, IF ONE FAILS, ALL FAILS..
    /*return Observable.forkJoin([
            this.getTotalPayments().catch(v=>Observable.of(v)),
            this.getTotalInventory().catch(v=>Observable.of(v)),
            this.getTotalLanguages().catch(v=>Observable.of(v)),
            this.getTopMovies().catch(v=>Observable.of(v)),
          ]).mergeMap(v=>v);*/
    
    //IF YOU WANT ANY ITEM AS IT COMES..
    return Observable.from([
            this.getCustomerCount().catch(v=>Observable.of(v)).map(v=>["customerCount", v]),
            this.getTotalPayments().catch(v=>Observable.of(v)).map(v=>["totalPayments", v]),
            this.getTotalInventory().catch(v=>Observable.of(v)).map(v=>["inventoryCount", v]),
            this.getTotalLanguages().catch(v=>Observable.of(v)).map(v=>["languageCount", v]),
            this.getTopMovies().catch(v=>Observable.of(v)).map(v=>["topMovies", v]),
          ]).mergeMap(v=>v);
    
    //IF YOU WANT ITEMS IN SEQUNCE AS THE ARE CALLED
    /*return Observable.from([
            this.getTotalPayments().catch(v=>Observable.of(v)),
            this.getTotalInventory().catch(v=>Observable.of(v)),
            this.getTotalLanguages().catch(v=>Observable.of(v)),
            this.getTopMovies().catch(v=>Observable.of(v)),
          ]).concatMap(v=>v);*/
  }

}
