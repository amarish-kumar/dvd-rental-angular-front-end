import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderModule } from './shared/app-header/app-header.module';
import { HttpProxy } from './shared/http/http-proxy';
import { AuthenticationService } from './shared/auth/authentication.service';


let ROUTE_CONF:Routes = [
  {path:"", pathMatch:"full", loadChildren:"./modules/home/home.module#HomeModule"},  
  {path:"login", loadChildren:"./modules/login/login.module#LoginModule"},
  {path:"staff", loadChildren:"./modules/staff/staff.module#StaffModule"},
  {path:"**", redirectTo:""} 
];
let APP_ROUTES:ModuleWithProviders = RouterModule.forRoot(ROUTE_CONF,{useHash:true});

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    APP_ROUTES,
    AppHeaderModule   
  ],
  providers: [HttpProxy, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
