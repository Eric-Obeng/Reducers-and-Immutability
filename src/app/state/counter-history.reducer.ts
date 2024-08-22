import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { CounterHistoryState } from '../interface/counterState.model';

export const initialHistoryState: CounterHistoryState = {
  history: [],
};

export const counterHistoryReducer = createReducer(
  initialHistoryState,
  on(increment, (state) => ({
    history: [...state.history, state.history[state.history.length - 1] + 1],
  })),
  on(decrement, (state) => ({
    history: [...state.history, state.history[state.history.length - 1] - 1],
  })),
  on(reset, (state) => ({
    history: [...state.history],
  }))
);
