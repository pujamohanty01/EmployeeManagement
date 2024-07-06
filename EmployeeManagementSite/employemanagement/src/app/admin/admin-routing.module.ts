import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';


const routes: Routes = [ 
  {path: 'addemployee', component: AddemployeeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee', component: EmployeeDirectoryComponent},
  {path: 'accessdenied', component: AccessdeniedComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
