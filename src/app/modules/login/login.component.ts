import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from "./login.service";
import { Router } from "@angular/router";
import { AuthenticationService, AuthInfo } from "../../shared/auth/authentication.service";

@Component({
  selector: 'dvd-login',
  templateUrl: `./login.component.html`,
  styles: []
})
export class LoginComponent implements OnInit {

  private _loginForm: FormGroup = null;
  private _invalidMsg: string = null;
  constructor(private _authService: AuthenticationService, private _loginServ: LoginService, private _router: Router) { }

  ngOnInit() {

    let authenticated = (this._authService.getAuthInfo(true) as AuthInfo).authenticated;

    if (authenticated) {
      this._router.navigate(["staff"]);
    }

    this._loginForm = new FormGroup({
      username: new FormControl('', Validators.minLength(4)),
      password: new FormControl('', [Validators.minLength(6)]),
    });
  }

  submit(evt: MouseEvent) {
    evt.preventDefault();
    this._loginServ
      .doLogin(this._loginForm.value)
      .subscribe((v) => {
        if (v)
          this._router.navigateByUrl("/staff");
      }, v => {
        this._invalidMsg = v.e.message;
      });
  }

}
