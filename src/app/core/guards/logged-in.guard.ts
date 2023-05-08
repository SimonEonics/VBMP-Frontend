import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../index';

export const loggedInGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.parseUrl('/account/login');
};
