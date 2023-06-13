import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTasksRoutingModule } from './page-tasks-routing.module';
import { RouterModule } from '@angular/router';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';


@NgModule({
  declarations: [ViewTasksComponent],
  imports: [
    CommonModule,
    PageTasksRoutingModule,
    RouterModule
  ]
})
export class PageTasksModule { }
