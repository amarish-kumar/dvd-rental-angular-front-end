import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoriesComponent } from './inventory.component';
import { InventoriesService } from './inventory.service';
import { GridModule } from '../../../shared/grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [InventoriesComponent],
  providers:[InventoriesService]
})
export class InventoriesModule { }
