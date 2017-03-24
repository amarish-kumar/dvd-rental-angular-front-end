import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from './addresses.component';
import { AddressesService } from './addresses.service';
import { GridModule } from '../../../shared/grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [AddressesComponent],
  providers:[AddressesService]
})
export class AddressesModule { }
