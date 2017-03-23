import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { Utils } from '../../utils/keys';

@NgModule({
  imports: [
    CommonModule,
    Utils
  ],
  exports:[GridComponent],
  declarations: [GridComponent]
})
export class GridModule { }
