import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderModule } from './shared/app-header/app-header.module';


let ROUTE_CONF:Routes = [
  {path:"", pathMatch:"full", loadChildren:"./modules/home/home.module#HomeModule"},  
  {path:"login", loadChildren:"./modules/login/login.module#LoginModule"},
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
