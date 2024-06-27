import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './service/login';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { emailValidator } from '../shared/Validators/email.validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LogInComponent implements OnInit {
  loginform!: FormGroup;
  login: Login = new Login();
  errormsgs: string[] = [];
  requiredFieldValidator: any[] = [
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

  constructor(private fb: FormBuilder, private router: Router, 
    private loginService: LoginService) {

  }
  ngOnInit(): void {
    this.loginform = this.fb.group({ ...this.login });
    this.validationSetUp();
  }
  logInToUI() {
    if(!this.loginform?.valid) {
      return;
    }
    this.errormsgs = [];
    const data: Login = {
      UserName: this.loginform.get('UserName')?.value,
      Password: this.loginform.get('Password')?.value
    };
    this.loginService.login(data).subscribe(user => {
      if (user) {
        sessionStorage.setItem('credential', JSON.stringify(user)); 
        this.router.navigate(['admin/dashboard']);
      }
      else {
        this.errormsgs.push('Invalid credential')
      }
    }, (error) => {
      this.errormsgs.push('Error while calling API');
    })
  }
  get UserName() {
    return this.loginform.get('UserName');
  }
  get Password() {
    return this.loginform.get('Password');
  }
  validationSetUp() {
    this.requiredFieldValidator.forEach(val => {
      if (val.isRequired === 'Yes') {
        this.loginform.get(val.controlName)?.setValidators([Validators.required]);
      }
    });
    this.loginform.get('UserName')?.setValidators([emailValidator]);
  }  
}
