import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  
  if (localStorage.getItem('token')) {
    return true;
  }
  router.navigateByUrl('login');
  return false;
};
