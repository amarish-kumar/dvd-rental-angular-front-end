import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CanActivate } from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService, AuthInfo} from "./authentication.service";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
	
	constructor(private authService: AuthenticationService) {}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean{		
		return (this.authService.getAuthInfo(true) as AuthInfo).authenticated;
	}

}