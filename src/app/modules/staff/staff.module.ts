import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StaffComponent} from "./staff.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {DashboardComponent} from "./dashboard/dashboard.component";


const STAFF_ROUTES: Routes = [
	{path: "", component: StaffComponent, children:[
    {path: "", component: DashboardComponent}
  ]}
];
const STAFF_ROUTING: ModuleWithProviders = RouterModule.forChild(STAFF_ROUTES);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    STAFF_ROUTING,
    ReactiveFormsModule,
    FormsModule,
    DashboardModule
  ],
  declarations: [StaffComponent]
})
export class StaffModule { }