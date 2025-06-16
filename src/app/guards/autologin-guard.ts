import { CanActivateFn } from '@angular/router';

export const autologinGuard: CanActivateFn = (route, state) => {
  return true;
};
