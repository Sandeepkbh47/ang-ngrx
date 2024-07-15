import { createReducer, on } from '@ngrx/store';
import { initialSuccessState } from './auth.state';
import { login_success } from './auth.action';

export const authReducer = createReducer(
  initialSuccessState,
  on(login_success, (state, action) => {
    console.log(action);
    return {
      ...state,
      user: action.user,
    };
  })
);
