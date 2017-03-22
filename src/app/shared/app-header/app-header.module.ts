import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[AppHeaderComponent],
  declarations: [AppHeaderComponent, AppSidebarComponent]
})
export class AppHeaderModule { }
