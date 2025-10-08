import { PartialStateUpdater, patchState, signalStore, withComputed, withHooks, withLinkedState, withMethods, withProps, withState } from '@ngrx/signals';
import { withEntities, addEntity, removeEntity, removeAllEntities } from '@ngrx/signals/entities';
import { ChatMember, INITIAL_STATE, NGRX_STORE_STATE, UserMessage, selectId } from './ngrx-signal-store.config';
import { Events, on, withEffects, withReducer } from '@ngrx/signals/events';
import { currentMemberAPIEvents } from './ngrx-store-events';
import { effect, inject, linkedSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { OverlayLoader } from '../../UI/services/overlay-loader/overlay-loader';
import { delay, filter, tap, timeout, timer } from 'rxjs';
import { Router } from '@angular/router';


export const NGRX_SIGNAL_STORE = signalStore(
    { providedIn: 'root' },
    withState<NGRX_STORE_STATE>(INITIAL_STATE),
    withEntities<UserMessage>(),
    withProps((store) => ({
        loader: inject(OverlayLoader),
        router: inject(Router)
    })),
    withReducer(
        on(currentMemberAPIEvents.addMember, (event, _) => ({ isLoading: true, user: event.payload })),
        on(currentMemberAPIEvents.addMessage, (event, _) => [addEntity(event.payload.message, { selectId }), { isLoading: true }]),
        on(currentMemberAPIEvents.removeMessage, (event, _) => [removeEntity(event.payload.mId), { isLoading: true }]),
        on(currentMemberAPIEvents.removeAllMessages, () => [removeAllEntities(), { isLoading: true }])
    ),
    withHooks({
        onInit(store, events = inject(Events)) {
            const eventsSignal = toSignal(events.on())
            effect(() => {
                store.isLoading() ? store.loader.showPreloader() : store.loader.hidePreloader();
            });


        },
    }),
    withEffects((store, events = inject(Events)) => ({
        disableLoader$: events.on(
            currentMemberAPIEvents.addMember, 
            currentMemberAPIEvents.addMessage, 
            currentMemberAPIEvents.removeAllMessages, 
            currentMemberAPIEvents.removeMessage
            ).pipe(
            filter(() => store.isLoading()),
            delay(3000),
            tap((event) => {
                patchState(store, () => ({ isLoading: false }));
                if (event.type === currentMemberAPIEvents.addMember.type) {
                    store.router.navigate(['chat-room', `${store.user().uId}`])
                }
            }),
        )
    }))
);
