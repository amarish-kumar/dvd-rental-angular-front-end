import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { Utils } from '../../utils/keys';
import {Ng2DataTable} from "./data-table";

@NgModule({
  imports: [
    CommonModule,
    Utils
  ],
  exports:[GridComponent],
  declarations: [GridComponent,Ng2DataTable]
})
export class GridModule { }
