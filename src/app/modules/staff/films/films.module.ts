import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmsService } from './films.service';
import { GridModule } from '../../../shared/grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [FilmsComponent],
  providers:[FilmsService]
})
export class FilmsModule { }
