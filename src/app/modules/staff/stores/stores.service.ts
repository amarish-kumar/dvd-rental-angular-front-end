import { Injectable } from '@angular/core';
import { HttpProxy } from '../../../shared/http/http-proxy';
import { Observable } from 'rxjs';

@Injectable()
export class StoresService {

  constructor(private _http: HttpProxy) { }

  getAllStores(payload:{limit:number, offset:number}):Observable<any> {
        let include = [
                        {"model":"staff"}, 
                        {
                            "model":"address",
                            "include":[{
                                        "model":"city", 
                                        "include":["country"]
                                    }]
                        }
                    ];  
        let where = {};
        let limit = payload.limit, offset = payload.offset;
        let url = `store?limit=${limit}&offset=${offset}&include=`+encodeURIComponent(JSON.stringify(include))+`&where=`+encodeURIComponent(JSON.stringify(where));     
        return this._http.get(url);
    }

}
