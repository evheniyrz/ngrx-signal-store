import { PartialStateUpdater, patchState, signalStore, withComputed, withHooks, withLinkedState, withMethods, withProps, withState } from '@ngrx/signals';
import { ChatMember, INITIAL_STATE } from '.';
import { Events, on, withEffects, withReducer } from '@ngrx/signals/events';
import { addMemberEvents } from './ngrx-store-events';
import { inject } from '@angular/core';

export const NGRX_SIGNAL_STORE = signalStore(
    { providedIn: 'root' }, 
    withState(INITIAL_STATE),
    withReducer(
        on(addMemberEvents.addMember, (event, state)=> ({...state, user: event.payload}))
    )
    );
