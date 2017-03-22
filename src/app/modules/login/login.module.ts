import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Router, Routes, RouterModule } from '@angular/router';

const LOGIN_ROUTES: Routes = [
	{path: "", component: LoginComponent}
];
const LOGIN_ROUTING: ModuleWithProviders = RouterModule.forChild(LOGIN_ROUTES);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LOGIN_ROUTING
  ],
  declarations: [LoginComponent] 
})
export class LoginModule { }
