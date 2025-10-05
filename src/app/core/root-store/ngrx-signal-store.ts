import { patchState, signalStore, withComputed, withHooks, withLinkedState, withMethods, withProps, withState } from '@ngrx/signals';
import { INITIAL_STATE } from '.';
import { Events, on, withEffects, withReducer } from '@ngrx/signals/events';
// import { bookSearchEvents } from './ngrx-store-events';
import { inject } from '@angular/core';

export const NGRX_SIGNAL_STORE = signalStore(
    { providedIn: 'root' }, 
    withState(INITIAL_STATE),
    
    );
    // мне нужно ентитес и потом можно настроить слайсы для виджетов - signalStoreFeature, метод обертка, генератор среза, отображается в рут стор