import { EmployeeworkComponent } from './employeework/employeework.component';
import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: 'emp', component: EmployeeComponent,
    children: [
      {
        path: '', component: EmployeeworkComponent,
        children: [
          {
            path: '', component: CreateComponent
          },
          {
            path: 'create', component: CreateComponent
          },
          {
            path: 'view', component: ViewComponent
          },
        ]
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
