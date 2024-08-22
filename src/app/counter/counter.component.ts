import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
  setCount,
  incrementBy,
  decrementBy,
  multiplyBy,
  undo,
} from '../state/counter.actions';
import { CommonModule } from '@angular/common';
import {
  selectCounterState,
  selectCounterHistory,
} from '../state/counter.selectors';
import { FormsModule } from '@angular/forms';
import { AppState } from '../interface/counterState.model'; // Import the AppState interface

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number>;
  history$: Observable<number[]>;
  inputValue!: number;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCounterState);
    this.history$ = this.store.select(selectCounterHistory);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
    this.inputValue = 0;
  }

  setCount() {
    if (this.inputValue >= 0) {
      this.store.dispatch(reset());
      this.store.dispatch(setCount({ count: this.inputValue }));
    }
  }

  incrementByValue() {
    this.store.dispatch(incrementBy({ value: this.inputValue }));
  }

  decrementByValue() {
    this.store.dispatch(decrementBy({ value: this.inputValue }));
  }

  multiplyByValue() {
    this.store.dispatch(multiplyBy({ value: this.inputValue }));
  }

  undoLastAction() {
    this.store.dispatch(undo());
    this.inputValue = 0;
  }
}
