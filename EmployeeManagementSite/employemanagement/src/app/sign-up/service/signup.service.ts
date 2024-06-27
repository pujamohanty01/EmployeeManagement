import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

 url: string = 'http://localhost:5194/api/User/';
  constructor(private httpclient: HttpClient) { }

  createAccount(signup: any): Observable<any>{
    return this.httpclient.post(this.url, signup);
  }
}
