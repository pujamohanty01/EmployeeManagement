import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
   
  const _router = inject(Router);
  var data =localStorage.getItem('credential');
  let authToken ='';
  if(data){
   authToken = JSON.parse(data).password;
  }

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) =>
       {
      console.log('Logging Interceptor Functional Error:', error);
      _router.navigate(['admin/accessdenied']);
      return throwError(()=> error);
    }));
};
