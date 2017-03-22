import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CanActivate } from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthenticationService, AuthInfo} from "./authentication.service";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
	
	constructor(private _authService: AuthenticationService, private _router: Router) {}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{			
		let authenticated = (this._authService.getAuthInfo(true) as AuthInfo).authenticated;
		if(!authenticated)
			this._router.navigate(["login"]);
		return authenticated;
	}

}