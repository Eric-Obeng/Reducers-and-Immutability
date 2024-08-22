import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  multiplyBy,
  reset,
  setCount,
  undo,
} from './counter.actions';
import { CounterState, AppState } from '../interface/counterState.model';

export const initialState: CounterState = {
  count: 0,
  history: [],
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    count: state.count + 1,
    history: [...state.history, state.count], // Save previous state to history
  })),
  on(decrement, (state) => ({
    ...state,
    count: Math.max(state.count - 1, 0),
    history: [...state.history, state.count], // Save previous state to history
  })),
  on(reset, (state) => ({
    ...state,
    count: 0,
    history: [...state.history, state.count], // Save previous state to history
  })),
  on(setCount, (_, { count }) => ({
    count,
    history: [count], // Initialize history with the new count
  })),
  on(incrementBy, (state, { value }) => ({
    ...state,
    count: state.count + value,
    history: [...state.history, state.count], // Save previous state to history
  })),
  on(decrementBy, (state, { value }) => ({
    ...state,
    count: Math.max(state.count - value, 0),
    history: [...state.history, state.count], // Save previous state to history
  })),
  on(multiplyBy, (state, { value }) => ({
    ...state,
    count: state.count * value,
    history: [...state.history, state.count], // Save previous state to history
  })),
  on(undo, (state) => {
    if (state.history.length === 0) {
      return state; // No action to undo
    }
    const previousCount = state.history[state.history.length - 1]; // Get last action's count
    return {
      ...state,
      count: previousCount,
      history: state.history.slice(0, -1), // Remove last action from history
    };
  })
);
