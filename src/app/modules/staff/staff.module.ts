import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffComponent } from "./staff.component";

import { DashboardModule } from "./dashboard/dashboard.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { ActorsModule } from "./actors/actors.module";
import { ActorsComponent } from "./actors/actors.component";

import { FilmsModule } from "./films/films.module";
import { FilmsComponent } from "./films/films.component";


const STAFF_ROUTES: Routes = [
  {
    path: "", component: StaffComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "customers", component: ActorsComponent },
      { path: "stores", component: ActorsComponent },
      { path: "actors", component: ActorsComponent },
      { path: "films", component: FilmsComponent },
      { path: "addresses", component: ActorsComponent },
      { path: "inventory", component: ActorsComponent },
      { path: "rentals", component: ActorsComponent },
      { path: "categories", component: ActorsComponent },
      { path: "payments", component: ActorsComponent },
    ]
  },
  { path: "**", redirectTo: "" }
];
const STAFF_ROUTING: ModuleWithProviders = RouterModule.forChild(STAFF_ROUTES);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    STAFF_ROUTING,
    ReactiveFormsModule,
    FormsModule,
    DashboardModule,
    ActorsModule,
    FilmsModule
  ],
  declarations: [StaffComponent]
})
export class StaffModule { }