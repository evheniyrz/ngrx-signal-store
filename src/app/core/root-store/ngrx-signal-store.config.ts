import { InjectionToken } from "@angular/core";
import { SelectEntityId } from "@ngrx/signals/entities";

export type NGRX_STORE_STATE = {
    isLoading: boolean;
    user: ChatMember;
    interlocutor: ChatMember;
};

export const INITIAL_STATE: NGRX_STORE_STATE = {
    isLoading: false,
    user: {
        nikName: '',
        avatar: '',
        uId: '',
        messages: {
            count: 0,
            list: []
        }
    },
    interlocutor: {
        nikName: '',
        avatar: '',
        uId: '',
        messages: {
            count: 0,
            list: []
        }
    },
}

const CHAT_STATE = new InjectionToken<NGRX_STORE_STATE>(
    'ChatState',
    { factory: () => INITIAL_STATE }
);

export interface UserMessage {
    authorId: string;
    date: number;
    message: string;
    mId: string;
}
export interface ChatMember {
    nikName: string;
    avatar: string;
    uId: string;
    messages: ChatMemberMessage;
}
export interface ChatMemberMessage {
    count: number;
    list: UserMessage[]
}

export const selectId: SelectEntityId<UserMessage> = (message) => message.mId;