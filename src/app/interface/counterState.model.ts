export interface CounterState {
  count: number;
  history: number[];
}

export interface AppState {
  counter: CounterState;
  history: CounterHistoryState;
}

export interface CounterHistoryState {
  history: number[];
}
