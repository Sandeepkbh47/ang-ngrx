import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { increment, decrement, reset, customIncrement } from './counter.action';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log(state);
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  })
);
