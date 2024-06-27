import { Component, OnInit } from '@angular/core';
import { employee } from '../add-employee/model/employee';
import { EmployeeService } from '../add-employee/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrl: './employee-directory.component.css'
})
export class EmployeeDirectoryComponent implements OnInit {

  employees: employee[] =[];
  constructor(private employeeService: EmployeeService, private router: Router){
    
  }
  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      if(data){
        this.employees = data;
      }
    });
    
  }

 
  first:number= 0;
  pageChange($event: any){
    console.log($event)

  }
  isFirstPage(){

  }
  prev(){

  }
  next(){

  }
  reset(){

  }
  isLastPage(){

  }
  load(){
    this.router.navigate(['admin/addemployee']);
  }
}

