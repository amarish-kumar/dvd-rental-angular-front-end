import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores.component';
import { StoresService } from './stores.service';
import { GridModule } from '../../../shared/grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [StoresComponent],
  providers:[StoresService]
})
export class StoresModule { }
