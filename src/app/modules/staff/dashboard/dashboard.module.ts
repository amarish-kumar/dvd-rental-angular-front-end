import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent],
  providers:[DashboardService]
})
export class DashboardModule { }
