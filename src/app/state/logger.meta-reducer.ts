import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../interface/counterState.model';

export function LoggerMetaReducer(reducer: ActionReducer<AppState>) {
  return (state: AppState, action: Action): any => {
    console.log('Action dispatched:', action);
    const nextState = reducer(state, action);
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [LoggerMetaReducer];
