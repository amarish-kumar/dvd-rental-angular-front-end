import { Injectable } from '@angular/core';
import { HttpProxy } from '../../../shared/http/http-proxy';
import { Observable } from 'rxjs';

@Injectable()
export class PaymentsService {

  constructor(private _http: HttpProxy) { }

  getAllPayments(payload:{limit:number, offset:number}):Observable<any> {
        let include =[];        
        let where = {};
        let limit = payload.limit, offset = payload.offset;
        let url = `payment?limit=${limit}&offset=${offset}&include=`+encodeURIComponent(JSON.stringify(include))+`&where=`+encodeURIComponent(JSON.stringify(where));     
        return this._http.get(url);
    }

}
