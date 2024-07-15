import { createAction, props } from '@ngrx/store';
import { User } from './auth.state';

const LOGIN_START = 'login';
const LOGIN_SUCCESS = 'login success';

export const login = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const login_success = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);
