import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { LoginSuccessInterface } from './auth.state';

const getAuthState = createFeatureSelector<LoginSuccessInterface>('auth');

export const getAuth = createSelector(getAuthState, (state) => {
  return state.user;
});
