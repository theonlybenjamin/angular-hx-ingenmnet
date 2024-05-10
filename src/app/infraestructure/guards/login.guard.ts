import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  if (localStorage.getItem('token')) {
    router.navigateByUrl('dashboard/registrar-orden');
    return false
  }

  return true;
};
