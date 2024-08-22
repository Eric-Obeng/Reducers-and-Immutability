import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CounterEffects } from './state/counter.effects';
import { provideEffects } from '@ngrx/effects';
import { metaReducers } from './state/logger.meta-reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ counter: counterReducer }, { metaReducers }), // This is the correct way to provide the store
    provideEffects([CounterEffects]), // Provide your effects here
  ],
};
