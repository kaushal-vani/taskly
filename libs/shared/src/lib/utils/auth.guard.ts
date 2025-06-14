import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ROUTE_PATHS } from '../constants';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = authService.isAuthenticated();

  return isLoggedIn
    ? true
    : router.createUrlTree([ROUTE_PATHS.AUTHENTICATE]);
};