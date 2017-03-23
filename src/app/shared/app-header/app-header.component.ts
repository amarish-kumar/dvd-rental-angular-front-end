import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { AuthenticationService } from "../auth/authentication.service";

@Component({
  selector: 'dvd-app-header',
  templateUrl: './app-header.component.html',
  styles: []
})
export class AppHeaderComponent implements OnInit {


  private _loggedIn: boolean = false;
  private _isHome: boolean = false;
  private _destroyed:boolean = false;

  constructor(private _router: Router, private _authServ:AuthenticationService) { }

  ngOnDestroy() {
    this._destroyed = true;
  }

  ngOnInit() {
    this._router.events.takeWhile(v=>!this._destroyed).subscribe((arg) => {
      if (arg instanceof NavigationEnd) {
        
        if (arg.url === "/") {
          this._isHome = true;
          this._loggedIn = this._authServ.getAuthInfo().authenticated;
        }else{
          this._isHome = false;
          this._loggedIn = this._authServ.getAuthInfo().authenticated;
        }

      }
    }, (err) => {
      this._isHome = false;
      this._loggedIn = false;
    });
  }



}
