import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: ViewTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTasksRoutingModule { }
