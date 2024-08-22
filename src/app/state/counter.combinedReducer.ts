import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { counterHistoryReducer } from './counter-history.reducer';
import {
  CounterHistoryState,
  CounterState,
} from '../interface/counterState.model';

export interface AppState {
  counter: CounterState;
  history: CounterHistoryState;
}

// Combine the reducers
export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  history: counterHistoryReducer,
};
