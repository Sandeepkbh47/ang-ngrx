import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.config';
import { getAuth } from '../auth/state/auth.selector';
import { User } from '../auth/state/auth.state';
import { map, Observable, of } from 'rxjs';
export const canActivateGuard: CanActivateFn = (
  route,
  state
): Observable<boolean> | boolean => {
  console.log(route, state);
  const store = inject(Store<AppState>);
  return store.select(getAuth).pipe(map((user) => (user ? true : false)));
};
