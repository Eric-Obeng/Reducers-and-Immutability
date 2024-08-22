import { createSelector } from '@ngrx/store';
import { AppState } from '../interface/counterState.model';

export const selectCounterState = (state: AppState) => state.counter.count;
export const selectCounterHistory = (state: AppState) => state.counter.history;
