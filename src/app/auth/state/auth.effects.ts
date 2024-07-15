import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, login_success } from './auth.action';
import { exhaustMap, map, Observable } from 'rxjs';
import { User } from './auth.state';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) {}
  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(login),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data: any) => {
            console.log(data);
            return login_success({
              user: new User(data.data.email, data.data.token),
            });
          })
        );
      })
    );
  });
}
