import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddemployeeComponent } from './add-employee/add-employee.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import {TableModule} from 'primeng/table';
import { EmployeeService } from './add-employee/service/employee.service';


@NgModule({
  declarations: [
    AddemployeeComponent,
    DashboardComponent,
    EmployeeDirectoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RadioButtonModule,
    DropdownModule,
    TableModule
  ],
  providers: [EmployeeService]
})
export class AdminModule { }
