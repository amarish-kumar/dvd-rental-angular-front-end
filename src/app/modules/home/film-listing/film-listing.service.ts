import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpProxy } from '../../../shared/http/http-proxy';

@Injectable()
export class FilmListingService {

  constructor(private _httpProxy: HttpProxy) { }

  getFilmListing(): Observable<any> {
    return this._httpProxy.get("film?limit=10");
  }
}
