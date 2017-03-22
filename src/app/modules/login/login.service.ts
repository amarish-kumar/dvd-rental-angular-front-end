import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpProxy } from "../../shared/http/http-proxy";
import { AuthInfo } from "../../shared/auth/authentication.service";
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from "../../shared/auth/authentication.service";

@Injectable()
export class LoginService {


  constructor(private _httpProxy: HttpProxy, private _authServ: AuthenticationService) { }

  public doLogout(loginCredentials) {
    this._authServ.setAuthInfo(null);
  }

  public doLogin(loginCredentials): Observable<boolean> {
    return this._httpProxy
      .post("login", loginCredentials)
      .do((res) => {
        console.info(res);
        this._authServ.setAuthInfo({
          ttl: null,
          token: res.headers.get("authorization"),
          expires: null,
          authenticated: true,
          user:res.data
        });
      }).map(res=>res.headers.get("authorization") !== void 0)
  }

}
