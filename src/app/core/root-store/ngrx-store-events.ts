import {event, eventGroup} from '@ngrx/signals/events';
import {type} from '@ngrx/signals'
import { ChatMember, UserMessage } from './ngrx-signal-store.config';

export const currentMemberAPIEvents = eventGroup({
    source: 'USER API',
    events: {
      addMember: type<ChatMember>(),
      addMessage: type<{userId: string;message:UserMessage;}>(),
      removeMessage: type<{mId: string;}>(),
      removeAllMessages: type<void>()
    },
  });