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
} from '../state/counter.actions';
import { CommonModule } from '@angular/common';
import { selectCounterState } from '../state/counter.selectors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count$: Observable<number>;
  inputValue: number = 0;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCounterState);
  }

  // dispatch an increment action
  increment() {
    this.store.dispatch(increment());
  }

  // dispatch a decrement action
  decrement() {
    this.store.dispatch(decrement());
  }

  // dispatch a reset action
  reset() {
    this.store.dispatch(reset());
    // set counter to 0 when reset button is clicked
    this.inputValue = 0;
  }

  // dispatch a setCount action
  setCount() {
    if (this.inputValue >= 0) {
      this.store.dispatch(reset());
      this.store.dispatch(setCount({ count: this.inputValue }));
    }
  }

  // dispatch an incrementBy actionincrementValue()
  incrementByValue() {
    this.store.dispatch(incrementBy({ value: this.inputValue }));
  }

  // dispatch a decrement by action
  decrementByValue() {
    this.store.dispatch(decrementBy({ value: this.inputValue }));
  }

  // dispatch a multiply by action
  multiplyByValue() {
    this.store.dispatch(multiplyBy({ value: this.inputValue }));
  }
}
