import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersService } from './customers.service';
import { GridModule } from '../../../shared/grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [CustomersComponent],
  providers:[CustomersService]
})
export class CustomersModule { }
