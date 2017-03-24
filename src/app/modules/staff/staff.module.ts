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

import { RentalsModule } from "./rentals/rentals.module";
import { RentalsComponent } from "./rentals/rentals.component";

import { PaymentsModule } from "./payments/payments.module";
import { PaymentsComponent } from "./payments/payments.component";

import { CustomersModule } from "./customers/customers.module";
import { CustomersComponent } from "./customers/customers.component";

import { CategoriesModule } from "./categories/categories.module";
import { CategoriesComponent } from "./categories/categories.component";

import { AddressesModule } from "./addresses/addresses.module";
import { AddressesComponent } from "./addresses/addresses.component";

import { InventoriesModule } from "./inventory/inventory.module";
import { InventoriesComponent } from "./inventory/inventory.component";

import { StoresModule } from "./stores/stores.module";
import { StoresComponent } from "./stores/stores.component";



const STAFF_ROUTES: Routes = [
  {
    path: "", component: StaffComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "customers", component: CustomersComponent },
      { path: "stores", component: StoresComponent },
      { path: "actors", component: ActorsComponent },
      { path: "films", component: FilmsComponent },
      { path: "addresses", component: AddressesComponent },
      { path: "inventory", component: InventoriesComponent },
      { path: "rentals", component: RentalsComponent },
      { path: "categories", component: CategoriesComponent },
      { path: "payments", component: PaymentsComponent },
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
    FilmsModule,
    CustomersModule,
    CategoriesModule,
    AddressesModule,
    InventoriesModule,
    PaymentsModule,
    RentalsModule,
    StoresModule
  ],
  declarations: [StaffComponent]
})
export class StaffModule { }