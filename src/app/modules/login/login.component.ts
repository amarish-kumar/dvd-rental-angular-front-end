import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {LoginService} from "./login.service";


@Component({
  selector: 'dvd-login',
  templateUrl: `./login.component.html`,
  styles: []
})
export class LoginComponent implements OnInit {

  private _loginForm:FormGroup = null;
  private _invalidMsg:string = null;
  constructor(private _loginServ:LoginService) { }

  ngOnInit() {
    this._loginForm = new FormGroup({
      username: new FormControl('', Validators.minLength(4)),
      password: new FormControl('', [Validators.minLength(6)]),
    });
  }

  submit(evt:MouseEvent){
    evt.preventDefault();
    this._loginServ
      .doLogin(this._loginForm.value)
      .subscribe((v)=>{
        console.info(v);
      }, v=>{        
        this._invalidMsg = v.e.message;
      });
  }

}
