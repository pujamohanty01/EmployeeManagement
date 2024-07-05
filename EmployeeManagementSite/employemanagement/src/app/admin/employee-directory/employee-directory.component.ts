import { Component, OnInit } from '@angular/core';
import { employee } from '../add-employee/model/employee';
import { EmployeeService } from '../add-employee/service/employee.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrl: './employee-directory.component.css',
})
export class EmployeeDirectoryComponent implements OnInit {
  employees: employee[] = [];
  errormsgs: string[] = [];
  employee!: any;
  constructor(private employeeService: EmployeeService, private confirmationService: ConfirmationService, private router: Router) {
  }
  ngOnInit(): void {
    this.getAllEmployees();
  }
  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(data => {
      if (data) {
        this.employees = data;
      }
    },(err) =>{
      console.log(err);

    }
    );
  }
  deleteSelectedEmployees() {

  }
  department: any;
  city:any;
  editEmployee(data: any) {
    this.department = this.departments.filter(x=> x.name == data.department)[0];
    this.city = this.cities.filter(x=> x.name == data.city)[0];
   this.employee = {...data};
   this.employeeDialog = true;


  }
  employeeDialog:boolean = false;
  departments: any[] = [{ id: 1, name: 'IT' }, { id: 2, name: 'Software' }, { id: 3, name: 'HR' }, { id: 4, name: 'Finance' }, { id: 5, name: 'Admin' }];
  cities: any[] = [{ id: 1, name: 'Bangalore' }, { id: 2, name: 'Mumbai' }, { id: 3, name: 'Pune' }, { id: 4, name: 'Chennai' }];
  submitted:boolean = false;
  deleteEmployee(employee: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.employeeService.deleteEmployee(employee.id).subscribe(data => {
          if (data) {
            this.errormsgs.push("Employee " + data.name + " deleted sucessfully.")
            this.getAllEmployees();
          }
          else {
            this.errormsgs.push("Error while deleting employee. " + employee.name);
          }
        }
        ), () => {
          this.errormsgs.push("Error while calling api.");
        };
     }
   });
  }
  saveEmployee(){
    let emp = new employee();
    emp.Id = this.employee.id;
    emp.Name = this.employee.name;
    emp.Salary = Number(this.employee.salary);
    emp.City = this.city.name;
    emp.Department = this.department.name;
    this.employeeService.UpdateEmplyee(emp).subscribe((data) => {
      if (data) {
      
        this.employeeDialog = false;
        this.getAllEmployees();
      } else {
       // this.status = 'error while creating Employee.';
      }
    }, (error) => {
      //this.status = 'error while creating Employee.';
    }
    );

  }
  hideDialog(){
    this.employeeDialog = false;

  }
  first: number = 0;
  pageChange($event: any) {
    console.log($event)

  }

  load() {
    this.router.navigate(['admin/addemployee']);
  }
}

