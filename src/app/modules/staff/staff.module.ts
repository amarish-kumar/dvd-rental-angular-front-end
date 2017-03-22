import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StaffComponent} from "./staff.component";


const STAFF_ROUTES: Routes = [
	{path: "", component: StaffComponent}
];
const STAFF_ROUTING: ModuleWithProviders = RouterModule.forChild(STAFF_ROUTES);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    STAFF_ROUTING,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [StaffComponent]
})
export class StaffModule { }