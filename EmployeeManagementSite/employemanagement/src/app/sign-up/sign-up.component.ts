import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUp } from './model/signup';
import { SignupService } from './service/signup.service';
import {  emailValidator } from '../shared/Validators/email.validator';
import { Router } from '@angular/router';
import { CompareValidator } from '../shared/Validators/compare.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup;
  signup: SignUp = new SignUp();
  errormsgs: string[] = [];
  status: string = '';
  DateofBirth?: Date = new Date();
  allRoles: any[] =[{name:'Admin', id:1},{name:'Employee', id: 2}];
  selectedRole: string='';
  requiredFieldsValidator: any[] = [
    {
      controlName: 'FullName',
      isRequired: 'Yes',
      errorMessage: 'Please enter FullName'
    },
    {
      controlName: 'UserName',
      isRequired: 'Yes',
      errorMessage: 'Please enter User Name'
    },
    {
      controlName: 'Password',
      isRequired: 'Yes',
      errorMessage: 'Please enter Password'
    }
  ];

  constructor(private datePipe: DatePipe, private fb: FormBuilder, private signupservice: SignupService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.signupform = this.fb.group({ ...this.signup });
    this.validationSetUp();
  }
  selectDate(event: any) {
    this.DateofBirth = event;
    console.log(event); 
  }
  validationSetUp() {
    this.requiredFieldsValidator.forEach(val => {
      if (val.isRequired === 'Yes') {
        this.signupform.get(val.controlName)?.setValidators([Validators.required]);
      }
    });
    this.signupform.get('UserName')?.setValidators([emailValidator]);
    this.signupform.get('ConfirmPwd')?.setValidators(
      [CompareValidator(this.signupform?.get("ConfirmPwd"),this.signupform?.get("Password"))]);

  }
  SignUp() {
    if(!this.signupform?.valid){
      return;
    }
    const data = {
      Id: 0,
      Name: this.signupform.get("FullName")?.value,
      EmailId: this.signupform.get("UserName")?.value,
      Password: this.signupform.get("Password")?.value,
      // DateofBirth: this.ConvertToDateString(this.DateofBirth),
      // ConfirmPwd : this.signupform.get("ConfirmPwd")?.value,
      Role: this.signupform.get("role")?.value.name
    };
    this.signupservice.createAccount(data).subscribe((result) => {
      if (result) {
        this.status = 'Account created successfully.';
        this.signupform.reset();
      } else {
        this.status = 'error while creating Account.';
      }
    }, (error) => {
      this.status = 'error while creating Account.';
    }
    );
  }
  get UserName() {
    return this.signupform.get('UserName');
  }
  get Password() {
    return this.signupform.get('Password');
  }
  get FullName() {
    return this.signupform.get('FullName');
  }
  get ConfirmPwd() {
    return this.signupform.get('ConfirmPwd');
  }
  ConvertToDateString(data?: Date): string {
    const result = data ? this.datePipe.transform(data, 'dd-MM-yyyy') : null;
    return result ?? '';
  }
}
