import { Injectable } from '@angular/core';
import { Login } from '../service/login';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = 'http://localhost:5194/api/User/';
  constructor(private http: HttpClient) { }


  login(login: Login): Observable<any> {
   return this.http.get(this.url+'LogIn/'+ login.UserName+'/'+ login.Password);
  }
}
