import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterInterface } from './counter-interface';

const getCounterState = createFeatureSelector<CounterInterface>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});
