import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsComponent } from './actors.component';
import { ActorsService } from './actors.service';
import { GridModule } from '../../../shared/grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [ActorsComponent],
  providers:[ActorsService]
})
export class ActorsModule { }
