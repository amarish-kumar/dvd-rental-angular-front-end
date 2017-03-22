import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { HttpProxy } from "../http/http-proxy";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface AuthInfo {
	ttl?: string,
	token: string,
	refreshToken?: string,
	expires?: string,
	authenticated: boolean,
	user:any
};

@Injectable()
export class AuthenticationService {

	private _authInfo: AuthInfo = { ttl: null, token: null, expires: null, authenticated: false, user:null} as any;
	constructor() {
		let info = JSON.parse(sessionStorage.getItem("authInfo") || "{}");
		info.token = info.token || null;
		info.authenticated = info.authenticated === true;
		this._authInfo = info;		
	}

	public getAuthInfo(raw?:boolean):AuthInfo {
		return this._authInfo;
	}
	
	public setAuthInfo(authInfo: AuthInfo) {
		this._authInfo = authInfo;		
		if(authInfo)
			sessionStorage.setItem("authInfo", JSON.stringify(this._authInfo));		
		else	
			sessionStorage.removeItem("authInfo");
	}
}


