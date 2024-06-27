import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employee } from './model/employee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddemployeeComponent implements OnInit {
  AddEmployeeform!: FormGroup;
  departments: any[] = [{ id: 1, name: 'IT' }, { id: 2, name: 'Software' }, { id: 3, name: 'HR' }, { id: 4, name: 'Finance' }, { id: 5, name: 'Admin' }];
  cities: any[] = [{ id: 1, name: 'Bangalore' }, { id: 2, name: 'Mumbai' }, { id: 3, name: 'Pune' }, { id: 4, name: 'Chennai' }];
  selectedcity: string = '';
  selecteddepartment: string = '';
  employee: employee = new employee();
  errormsgs: string[] = [];
   status: string =''
  requiredFieldsValidator: any[] = [
    {
      controlName: 'Name',
      isRequired: 'Yes',
      errorMessage: 'Please enter Name'
    },
    {
      controlName: 'Salary',
      isRequired: 'Yes',
      errorMessage: 'Please enter salary'
    }
  ];
  maxLengthValidator: any[] = [

    {
      controlName: 'Name',
      maxLength: 100,
      errorMessage: 'Name cannot be more than 100 charactors'
    }
  ];

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {

  }
  validationSetUp() {
    this.requiredFieldsValidator.forEach(val => {
      if (val.isRequired === 'Yes') {
        this.AddEmployeeform.get(val.controlName)?.setValidators([Validators.required]);
      }
    });

  }
  ngOnInit(): void {
    this.AddEmployeeform = this.fb.group({ ...this.employee });
    this.validationSetUp();
  }
 
  addEmployee() {
    let emp = new employee();
    emp.Name = this.Name?.value;
    emp.Salary = Number(this.Salary?.value);
    emp.City = this.AddEmployeeform.get('City')?.value.name;
    emp.Department = this.AddEmployeeform.get('Department')?.value.name;
    this.AddEmployeeform.value;
    this.employeeService.AddEmplyee(emp).subscribe((data) => {
      if (data) {
        this.status = 'Employee created successfully.';
        this.AddEmployeeform.reset();
      } else {
        this.status = 'error while creating Employee.';
      }
    }, (error) => {
      this.status = 'error while creating Employee.';
    }
    );

  }
  clearEmployee() {
    this.AddEmployeeform.reset();
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  get Name() {
    return this.AddEmployeeform.get('Name');
  }
  get Salary() {
    return this.AddEmployeeform.get('Salary');
  }


}



