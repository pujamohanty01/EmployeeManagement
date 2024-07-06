import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const isLoggedIn = localStorage.getItem('credential');
  if(!isLoggedIn){
    _router.navigate(['/forbidden']);
  }
  return true;
};

