import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  constructor() { }

  getAuthenticated() {
    const usercredential = sessionStorage.getItem('credential');
    return !!usercredential;
    // if (usercredential) {
    //   let validUser = this.userInfo.filter((x)=> {return (x.UserName === usercredential.UserName && x.Password === usercredential.Password);} );
    // }
    // return null;

  }
}
