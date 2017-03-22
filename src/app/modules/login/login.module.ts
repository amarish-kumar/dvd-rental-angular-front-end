import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginService} from "./login.service";
import {AuthenticationService} from "../../shared/auth/authentication.service";

const LOGIN_ROUTES: Routes = [
	{path: "", component: LoginComponent}
];
const LOGIN_ROUTING: ModuleWithProviders = RouterModule.forChild(LOGIN_ROUTES);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LOGIN_ROUTING,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers:[LoginService, AuthenticationService]
})
export class LoginModule { }
