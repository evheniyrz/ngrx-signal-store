import {event, eventGroup} from '@ngrx/signals/events';
import {type} from '@ngrx/signals'

// export const opened = event('[Book Search Page] Opened');  
// export const queryChanged = event(
//   '[Book Search Page] Query Changed',
  // 👇 The payload type is defined using the `type` function.
//   type<string>(),
// );

export const bookSearchEvents = eventGroup({
    source: 'Book Search Page',
    events: {
    //   👇 Defining an event creator without a payload.
      opened: type<void>(),
      queryChanged: type<string>(),
    },
  });