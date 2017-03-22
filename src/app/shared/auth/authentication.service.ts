import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { HttpProxy } from "../http/http-proxy";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface AuthInfo {
	ttl?: string,
	token: string,
	refreshToken?: string,
	expires?: string,
	authenticated: boolean
};

@Injectable()
export class AuthenticationService {

	private _authInfo: AuthInfo = { ttl: null, token: null, expires: null, authenticated: false } as any;
	constructor(private _httpProxy: HttpProxy) {
		let info = JSON.parse(sessionStorage.getItem("authInfo") || "{}");
		info.token = info.token || null;
		info.authenticated = info.authenticated === true;
		this._authInfo = info;
	}

	public getAuthInfo(raw?:boolean): Observable<AuthInfo> | AuthInfo {
		return raw === true ? this._authInfo : Observable.of(this._authInfo);
	}
	

	public doLogout(loginCredentials): Observable<AuthInfo> {
		
		this._authInfo.token = null;
		this._authInfo.authenticated = false;
		sessionStorage.removeItem("authInfo");
		return Observable.of(this._authInfo);
	}

	public doLogin(loginCredentials): Observable<AuthInfo> {
		if (this._authInfo.token !== null && this._authInfo.token !== void 0)
			return Observable.of(this._authInfo);
		else
			return this._httpProxy
				.post("login", loginCredentials)
				.map(function (data) {
					this._authInfo = data.data;
					return this._authInfo;
				})
	}

	public setAuthInfo(authInfo: AuthInfo) {
		this._authInfo = authInfo;		
		sessionStorage.setItem("authInfo", JSON.stringify(this._authInfo));		
	}
}


