import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url: string ='http://localhost:5194/api/Employee/';
    constructor(private http: HttpClient) { }

  getEmployeeById(Id: number): Observable<any> {
    return this.http.get(this.url+'GetUserById'+'/'+Id);
  }
  getAllEmployees(): Observable<any> {
    return this.http.get(this.url+'GetEmployees');
   }
   AddEmplyee(employee: employee): Observable<any> {
    return this.http.post(this.url, employee);
   }
   deleteEmployee(Id: string): Observable<any> {
    return this.http.delete(this.url+'Delete'+'/'+ Id);
   }
   UpdateEmplyee(employee: employee): Observable<any> {
    return this.http.patch(this.url+"Update", employee);
   }
}
