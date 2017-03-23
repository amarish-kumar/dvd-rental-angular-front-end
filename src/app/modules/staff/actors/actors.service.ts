import { Injectable } from '@angular/core';
import { HttpProxy } from '../../../shared/http/http-proxy';
import { Observable } from 'rxjs';

@Injectable()
export class ActorsService {

  constructor(private _http: HttpProxy) { }

  getAllActors(payload:{limit:number, offset:number}):Observable<any> {
        let include =[];        
        let where = {};
        let limit = payload.limit, offset = payload.offset;
        let url = `actor?limit=${limit}&offset=${offset}&include=`+encodeURIComponent(JSON.stringify(include))+`&where=`+encodeURIComponent(JSON.stringify(where));     
        return this._http.get(url);
    }

}
