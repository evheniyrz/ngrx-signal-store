import {event, eventGroup} from '@ngrx/signals/events';
import {type} from '@ngrx/signals'
import { ChatMember } from './ngrx-signal-store.config';

// export const opened = event('[Book Search Page] Opened');  
// export const queryChanged = event(
//   '[Book Search Page] Query Changed',
  // 👇 The payload type is defined using the `type` function.
//   type<string>(),
// );

export const addMemberEvents = eventGroup({
    source: 'CAHT Register Page',
    events: {
    //   👇 Defining an event creator without a payload.
      addMember: type<ChatMember>(),
      // queryChanged: type<string>(),
    },
  });