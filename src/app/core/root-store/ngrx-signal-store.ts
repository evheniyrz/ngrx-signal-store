import { PartialStateUpdater, patchState, signalStore, withComputed, withHooks, withLinkedState, withMethods, withProps, withState } from '@ngrx/signals';
import {withEntities}from '@ngrx/signals/entities';
import { ChatMember, INITIAL_STATE, NGRX_STORE_STATE, UserMessage } from './ngrx-signal-store.config';
import { Events, on, withEffects, withReducer } from '@ngrx/signals/events';
import { currentMemberAPIEvents } from './ngrx-store-events';
import { effect, inject } from '@angular/core';
import { OverlayLoader } from '../../UI/services/overlay-loader/overlay-loader';


export const NGRX_SIGNAL_STORE = signalStore(
    { providedIn: 'root' }, 
    withState<NGRX_STORE_STATE>(INITIAL_STATE),
    withEntities<UserMessage>(),
    withProps((store)=> ({
        loader: inject(OverlayLoader),
    })),
    withReducer(
        on(currentMemberAPIEvents.addMember, (event, state)=> ({isLoading: true,user: event.payload})),
    ),
    withHooks({
        onInit(store) {
            effect(()=> {
                const isLoading = store.isLoading();
            console.log('HOOK', {isLoading});
            isLoading ? store.loader.showPreloader() : store.loader.hidePreloader();
            })
        },
    })
    );
