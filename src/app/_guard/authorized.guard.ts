import { CanActivateFn } from '@angular/router';

export const authorizedGuard: CanActivateFn = (route, state) => {
  return true;
};
