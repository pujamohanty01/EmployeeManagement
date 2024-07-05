import { NgModule, importProvidersFrom } from '@angular/core';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import {TableModule} from 'primeng/table';
import { EmployeeService } from './add-employee/service/employee.service';
import { ToolbarModule} from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import {  HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptorInterceptor} from'./auth-interceptor.interceptor';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';


@NgModule({
  declarations: [
    AddemployeeComponent,
    DashboardComponent,
    EmployeeDirectoryComponent,
    AccessdeniedComponent
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
    TableModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule
  ],
  providers: [EmployeeService, ConfirmationService,
    importProvidersFrom(HttpClientModule), 
    provideHttpClient(withInterceptors([authInterceptorInterceptor]))
  ]
})
export class AdminModule { }
