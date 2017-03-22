/**
 * Created by jagadeesh on 13/11/16.
 */

import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import { AuthenticationService, AuthInfo} from "../../shared/auth/authentication.service";


export interface IAppResponse{success:boolean,data?:any,headers?:Headers, error?:any};

@Injectable()
export class HttpProxy{

	private _retryTimes:number = 3;
	private _baseUrl:string = "http://localhost:8085/api/v1.0/";
	constructor(private _http:Http, private _authService:AuthenticationService){}

	get(url: string, options: any={}): Observable<any> {		
		let obs = this._http
			.get(this._baseUrl+url, { "headers":this.addDefaultHeaders(options.headers)} as any);

		return this.handleResponse(obs).share();
	}

	post(url: string, body: any, options: any={}): Observable<any> {
		console.info(this._baseUrl+url);
		let obs = this._http
			.post(this._baseUrl+url, body, {"headers":this.addDefaultHeaders(options.headers)} as any);

		return this.handleResponse(obs).share();
	}

	put(url: string, body: any, options: any={}): Observable<any> {

		let obs = this._http
			.put(this._baseUrl+url, body, { "headers":this.addDefaultHeaders(options.headers)} as any);

		return this.handleResponse(obs).share();
	}

	delete(url: string, options: any={}): Observable<any> {

		let obs = this._http
			.delete(this._baseUrl+url, { "headers":this.addDefaultHeaders(options.headers)} as any);

		return this.handleResponse(obs).share();
	}

	private handleResponse(obs:Observable<Response>):Observable<IAppResponse>{

		return obs
		.catch((res:Response, obs)=>Observable.throw({data:null,e:res.json(), success:false}))
		.map((res:Response)=>({data:res.json(), headers:res.headers, success:true}));
  }

	private addDefaultHeaders(headers:Headers):Headers{		
		
		headers = headers || new Headers();
		headers.set("Content-Type","application/json");
		
		let info = this._authService.getAuthInfo(true) as AuthInfo;

		if(info.authenticated && info.token)
			headers.set("authorization", info.token);

		return headers;
	}


}