import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { EmployeeworkComponent } from './employeework/employeework.component';


@NgModule({
  declarations: [EmployeeComponent, CreateComponent, ViewComponent, EmployeeworkComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule, MaterialModule, FormsModule
  ]
})
export class EmployeeModule { }
