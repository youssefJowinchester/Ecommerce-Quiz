import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterLink } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  const _Router = inject(Router);

  if(localStorage.getItem('xtoken') != null){
    return true;
  }
  else{
    _Router.navigate(['/login']);
    return false;
  }

};
