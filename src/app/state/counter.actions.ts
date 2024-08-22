import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

// action for set count
export const setCount = createAction(
  '[Counter Component] Set Count',
  props<{ count: number }>()
);

// custom action for increment by value
export const incrementBy = createAction(
  '[Counter Component] Increment By',
  props<{ value: number }>() //accepts payload
);

// custom action for decrement by value
export const decrementBy = createAction(
  '[Counter Component] Decrement By',
  props<{ value: number }>()
);

// custom action for decrement by value
export const multiplyBy = createAction(
  '[Counter Component] Multiply By',
  props<{ value: number }>()
);

// union type for all actions
export type counterActionsUnion =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>
  | ReturnType<typeof setCount>
  | ReturnType<typeof incrementBy>
  | ReturnType<typeof decrementBy>
  | ReturnType<typeof multiplyBy>;
